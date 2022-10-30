import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';
import { Global } from 'src/app/services/Global';
import { Usuario } from 'src/app/models/Usuario';
import { BusquedaService } from 'src/app/services/busqueda.service';
import { Sesion } from 'src/app/models/Sesion';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  public proyectos: Proyecto[];
  public url: string;
  public status: string;
  private usuario : Usuario
  public search = ''
  constructor(private _ServicioBusqueda:BusquedaService) {this.proyectos = [];
    this.url = Global.url;
    this.status = "";
    this.usuario =  new Usuario('','','','',0)
  }
  ngOnInit(): void {
    let localValor = sessionStorage.getItem('SESION')
    if(localValor!=null){
       let sesion:Sesion= JSON.parse(localValor)
       this.usuario = sesion.usuario
    }
    this._ServicioBusqueda.obtenerTodosProyectos().subscribe(respuesta=>{
      this.proyectos = respuesta.PROYECTOS
    })
  }
  Loadproduct(){
    
  }

}
