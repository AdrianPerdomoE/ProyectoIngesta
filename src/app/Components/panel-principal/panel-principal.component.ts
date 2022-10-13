import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from 'src/app/models/Proyecto';
import { Global } from 'src/app/services/Global';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-panel-principal',
  templateUrl: './panel-principal.component.html',
  styleUrls: ['./panel-principal.component.css']
})
export class PanelPrincipalComponent implements OnInit {
  public proyectos: Proyecto[];
  public url: string;
  public status: string;
  private usuario : Usuario
  constructor(private _ServicioProyecto:ProyectoService) {this.proyectos = [];
    this.url = Global.url;
    this.status = "";
    this.usuario =  new Usuario('','','','',0)
  }

  ngOnInit(): void {
    let localValor = localStorage.getItem('USUARIO')
    if(localValor!=null){
      this.usuario = JSON.parse(localValor)
      this._ServicioProyecto.obtenerProyectosUsuario(this.usuario._id).subscribe(respuesta=>{
        this.proyectos = respuesta.PROYECTOS
         this.proyectos =this.proyectos.slice(0,this.proyectos.length/2+1)
      })
    }
    
  }
}