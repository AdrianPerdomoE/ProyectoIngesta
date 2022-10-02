import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { ArchivoService } from 'src/app/services/archivo.service';
import { Global } from 'src/app/services/Global';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {
  public status: string;
  public filesToUpload: Array<File>;
  public proyecto:Proyecto;
  public proyectoGuardado:Proyecto;
  public etiquetas:string[];
  public etiquetaActual:string;
  public camarografos:string[];
  public camarografoActual:string;
  public tipoSeleccionado:any;
  public tipos:string[];
  public url = Global.url
  constructor(private _route: ActivatedRoute,private _servicioProyecto: ProyectoService,
    private _servicioArchivo: ArchivoService) { this.status = "";
    this.filesToUpload = new Array<File>();
    this.proyecto = new Proyecto('',[],'','',[],'','','', new Date(),[],0,'','')
    this.proyectoGuardado = new Proyecto('',[],'','',[],'','','', new Date(),[],0,'','')
    this.etiquetas = []
   this.etiquetaActual=''
   this.camarografoActual = ''
   this.camarografos = []
   this.tipos = ['Video','Foto','Audio','Gif']
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params["id"];
      this.getProyecto(id);
    });
  }
  getProyecto(id: string) {
    this._servicioProyecto.obtenerProyecto(id).subscribe(
      response => {
        this.proyecto = response.PROYECTO;
        this.camarografos = this.proyecto.camarografos
        this.etiquetas = this.proyecto.etiquetas
        this.tipoSeleccionado = this.proyecto.tipoArchivo
      }
    );
  }
  addCamarografo(){
    this.camarografos.push(this.camarografoActual)
    this.camarografoActual = ''
  }
  addEtiqueta(){
    this.etiquetas.push(this.etiquetaActual)
    this.etiquetaActual = ''
  }
  ValidarDatos(form:any){
    if(this.camarografos.length==0 || this.etiquetas.length==0){
      return false
    }
    return form.form.valid
  }
  onSubmit(form: any) {
    this.proyecto.camarografos = this.camarografos
    this.proyecto.etiquetas = this.etiquetas
    this.proyecto.tipoArchivo = this.tipoSeleccionado
    this._servicioProyecto.actualizarProyecto(this.proyecto).subscribe(
      response => {
        if (response) {
          //Subir la imagen
          if (this.filesToUpload.length >= 1) {
            this._servicioArchivo.makeFileRequest(`${Global.url}UploadArchivo/${response.PROYECTO._id}`, [], this.filesToUpload, "archivo").then((result: any) => {
              this.proyectoGuardado = result.PROYECTO;
            });
          }
          this.status = "Success";
        }
        else {
          this.status = "Failed";
        }
        form.reset();
        this.etiquetas = []
        this.camarografos = []
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
