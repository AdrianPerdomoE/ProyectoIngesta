import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from 'src/app/models/Proyecto';
import { Global } from 'src/app/services/Global';
import { Usuario } from 'src/app/models/Usuario';


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
  constructor(private _ServicioProyecto:ProyectoService) {this.proyectos = [];
    this.url = Global.url;
    this.status = "";
    this.usuario =  new Usuario('','','','',0)
  }
  ngOnInit(): void {
    let localValor = localStorage.getItem('USUARIO')
    if(localValor!=null){
      this.usuario = JSON.parse(localValor)
    }
    this._ServicioProyecto.obtenerTodosProyectos().subscribe(respuesta=>{
      this.proyectos = respuesta.PROYECTOS
    })
  }
  Loadproduct(){
    
  }

}
