import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-descarga-formulario',
  templateUrl: './descarga-formulario.component.html',
  styleUrls: ['./descarga-formulario.component.css']
})
export class DescargaFormularioComponent implements OnInit {
  public status: string;
  public proyecto:Proyecto;
  public id:string ;
  public descripcion = '';
  public correcto = false;
  constructor(private _route: ActivatedRoute,private _servicioProyecto: ProyectoService,private _router: Router) {
    this.status = "";
    this.proyecto = new Proyecto('',[],'','',[],'','','', new Date(),[],0,'','')
    this.id = '';   
   }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.id = params["id"];
      this.getProyecto(this.id);
    });
  }
  verificarText(){
    this.correcto=  this.descripcion.length >0;
  }
  getProyecto(id: string) {
    this._servicioProyecto.obtenerProyecto(id).subscribe(
      response => {
        this.proyecto = response.PROYECTO;

      }
    );
  }
  onSubmit(form: any){
    
  }
  onCancel(){
    this._router.navigate(['/proyecto/'+this.id])
  }
}

