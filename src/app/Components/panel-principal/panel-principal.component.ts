import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';
import { Global } from 'src/app/services/Global';
import { Usuario } from 'src/app/models/Usuario';
import { BusquedaService } from 'src/app/services/busqueda.service';
import { Sesion } from 'src/app/models/Sesion';
import { DescargaService } from 'src/app/services/descarga.service';
import { Descarga } from 'src/app/models/Descarga';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-panel-principal',
  templateUrl: './panel-principal.component.html',
  styleUrls: ['./panel-principal.component.css']
})
export class PanelPrincipalComponent implements OnInit {
  public proyectos: Proyecto[];
  public proyectosDescargas: Proyecto[];
  public descargas: Descarga[];
  public url: string;
  public status: string;
  private usuario : Usuario
  constructor(private _ServicioBusqueda:BusquedaService,private _servicioDescarga:DescargaService,private _servicioProyecto:ProyectoService) {this.proyectos = [];
    this.url = Global.url;
    this.status = "";
    this.usuario =  new Usuario('','','','',0)
    this.descargas =[];
    this.proyectosDescargas =[];
  }

  ngOnInit(): void {
    let localValor = sessionStorage.getItem('SESION')
    if(localValor!=null){
      let sesion:Sesion =JSON.parse(localValor)
      this.usuario = sesion.usuario
      this._ServicioBusqueda.obtenerProyectosUsuario(this.usuario._id).subscribe(respuesta=>{
        this.proyectos = respuesta.PROYECTOS
         this.proyectos = this.proyectos.slice(0,5)
      })
      this._servicioDescarga.obtenerDescargasUsuario(this.usuario._id).subscribe(respuesta=>{
        if (!respuesta.DESCARGAS) return
        this.descargas = respuesta.DESCARGAS
        for (let descarga of this.descargas){
          this._servicioProyecto.obtenerProyecto(descarga.proyectoId).subscribe((resultado=> {
            if(!resultado.PROYECTO) return
            this.proyectosDescargas.push(resultado.PROYECTO)
            this.proyectosDescargas = this.proyectosDescargas.slice(0,5)
        }
          )
      )
        } 
      })
    }
    
  }
}
