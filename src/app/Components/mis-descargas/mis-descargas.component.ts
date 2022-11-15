import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from 'src/app/models/Proyecto';
import { Global } from 'src/app/services/Global';
import { Usuario } from 'src/app/models/Usuario';
import { Sesion } from 'src/app/models/Sesion';
import { DescargaService } from 'src/app/services/descarga.service';
import { Descarga } from 'src/app/models/Descarga';



@Component({
  selector: 'app-mis-descargas',
  templateUrl: './mis-descargas.component.html',
  styleUrls: ['./mis-descargas.component.css']
})
export class MisDescargasComponent implements OnInit {
  public proyectos: Proyecto[];
  public url: string;
  public status: string;
  private usuario : Usuario;
  private sesion : Sesion;
  public descargas: Descarga[];

  constructor(private _servicioDescarga:DescargaService,private _servicioProyecto:ProyectoService) {
    this.proyectos = [];
    this.descargas =[];
    this.url = Global.url;
    this.status = "";
    this.usuario =  new Usuario('','','','',0)
    this.sesion = new Sesion(false,this.usuario);
   }

  ngOnInit(): void {
    let localValor = sessionStorage.getItem('SESION')
    if(localValor!=null){
      this.sesion = JSON.parse(localValor)
      this._servicioDescarga.obtenerDescargasUsuario(this.sesion.usuario._id).subscribe(respuesta=>{
      this.descargas = respuesta.DESCARGAS
      for (let descarga of this.descargas){
        this._servicioProyecto.obtenerProyecto(descarga.proyectoId).subscribe(respuesta=>{
          this.proyectos.push(respuesta.PROYECTO)})
      } 
      })
          
     
    }

  }

}