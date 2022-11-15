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
  public search:any
  public filtros = [{nombre:'Elige un filtro',valor:-1},{nombre:'Etiquetas',valor:0},{nombre:'Creador',valor:1},{nombre:'Formato',valor:2},{nombre:'Nombre',valor:3},{nombre:'Tipo',valor:4}]
  public seleccionado : any;
  constructor(private _ServicioBusqueda:BusquedaService) {
    this.proyectos = [];
    this.url = Global.url;
    this.status = "";
    this.usuario =  new Usuario('','','','',0)
  this.seleccionado = this.filtros[0]
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
    if (this.search==""){
      this._ServicioBusqueda.obtenerTodosProyectos().subscribe(response=>{
        if(response.PROYECTOS){
          this.proyectos = response.PROYECTOS
        }
      })
    }
    switch(this.seleccionado.valor){
      case 0:
        this._ServicioBusqueda.obtenerProyectosEtiquetas(this.search).subscribe(response=>{
          if(response.PROYECTOS){
            this.proyectos = response.PROYECTOS
          }
        })
        break;
        case 0:
          this._ServicioBusqueda.obtenerProyectosEtiquetas(this.search).subscribe(response=>{
            if(response.PROYECTOS){
              this.proyectos = response.PROYECTOS
            }
          })
          break;
      
        case 1:
          this._ServicioBusqueda.obtenerProyectosCreador(this.search).subscribe(response=>{
            if(response.PROYECTOS){
              this.proyectos = response.PROYECTOS
            }
          })
          break;
        case 2:
          this._ServicioBusqueda.obtenerProyectosFormato(this.search).subscribe(response=>{
            if(response.PROYECTOS){
              this.proyectos = response.PROYECTOS
            }
          })
          break;
        case 3:
          this._ServicioBusqueda.obtenerProyectosNombre(this.search).subscribe(response=>{
            if(response.PROYECTOS){
              this.proyectos = response.PROYECTOS
            }
          })
          break;
        case 4:
          this._ServicioBusqueda.obtenerProyectosTipo(this.search).subscribe(response=>{
            if(response.PROYECTOS){
              this.proyectos = response.PROYECTOS
            }
          })
          break;
              
                      
    }
  }

}
