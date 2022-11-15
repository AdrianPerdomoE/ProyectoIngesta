import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from 'src/app/models/Proyecto';
import { Global } from 'src/app/services/Global';
import { Usuario } from 'src/app/models/Usuario';
import { BusquedaService } from 'src/app/services/busqueda.service';
import { Sesion } from 'src/app/models/Sesion';

@Component({
  selector: 'app-proyectos-subidos',
  templateUrl: './proyectos-subidos.component.html',
  styleUrls: ['./proyectos-subidos.component.css']
})
export class ProyectosSubidosComponent implements OnInit {
  public proyectos: Proyecto[];
  public url: string;
  public status: string;
  private usuario : Usuario;
  private sesion : Sesion;
  
  constructor(private _servicioBusqueda:BusquedaService) {this.proyectos = [];
    this.url = Global.url;
    this.status = "";
    this.usuario =  new Usuario('','','','',0)
    this.sesion = new Sesion(false,this.usuario);
  }

  ngOnInit(): void {
    let localValor = sessionStorage.getItem('SESION')
    if(localValor!=null){
      this.sesion = JSON.parse(localValor)
      this._servicioBusqueda.obtenerProyectosUsuario(this.sesion.usuario._id).subscribe(respuesta=>{
        this.proyectos = respuesta.PROYECTOS
      })
    }
    
    
  }
  

}
