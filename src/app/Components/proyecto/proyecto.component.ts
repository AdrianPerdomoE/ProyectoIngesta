import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto} from 'src/app/models/Proyecto';
import { Sesion } from 'src/app/models/Sesion';
import { Usuario } from 'src/app/models/Usuario';
import { Global } from 'src/app/services/Global';
import { ProyectoService } from 'src/app/services/proyecto.service';


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css'],
  providers:[ProyectoService]
})
export class ProyectoComponent implements OnInit {
 public proyecto:Proyecto;
 public url: string;
 public confirm = false
 public usuario:Usuario;
  constructor(private _router: Router,
    private _route: ActivatedRoute,private _servicioProyecto:ProyectoService) {
    this.url = Global.url
    this.proyecto = new Proyecto('',[],'','',[],'','','', new Date(),[],0,'','')
    this.usuario =  new Usuario('','','','',0)
   }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params["id"];
      this.getProyecto(id);
    })
    let localValor = sessionStorage.getItem('SESION')
    if(localValor!=null){
      let sesion:Sesion =JSON.parse(localValor)
      this.usuario = sesion.usuario}
  }
  getProyecto(id: string) {
    this._servicioProyecto.obtenerProyecto(id).subscribe(
      response => {
        this.proyecto = response.PROYECTO;
      }
    );
  }
  eliminarProyecto(id: string){
    this._servicioProyecto.eliminarProyecto(id).subscribe(
      {
        next: (response) => {
          if (response.PROYECTO) {
            this._router.navigate(['/Panel principal']);
          }
        },
        error: (err) => {
          console.log(<any>err);
        },
        complete: () => { }
      }
    );
  }

}
