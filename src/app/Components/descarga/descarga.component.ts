import { Component, Input, OnInit } from '@angular/core';
import { Descarga } from 'src/app/models/Descarga';
import { Proyecto } from 'src/app/models/Proyecto';
import { Sesion } from 'src/app/models/Sesion';
import { Usuario } from 'src/app/models/Usuario';
import { DescargaService } from 'src/app/services/descarga.service';
import { Global } from 'src/app/services/Global';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-descarga',
  templateUrl: './descarga.component.html',
  styleUrls: ['./descarga.component.css']
})
export class DescargaComponent implements OnInit {
  @Input() proyecto!: Proyecto; //obligatorio
  @Input() descripcion!:string;
  public url:String;
  public usuario:Usuario;
  constructor(private _route: ActivatedRoute,private _router: Router,private _proyectoService:ProyectoService,
    private _descargaService:DescargaService) { 
    this.url = Global.url;
    this.usuario =  new Usuario('','','','',0)
  }
  ngOnInit(): void {
    let localValor = sessionStorage.getItem('SESION')
    if(localValor!=null){
      let sesion:Sesion =JSON.parse(localValor)
      this.usuario = sesion.usuario
    }
  }
 
iniciarDescarga()
{ 
  let linkElement = document.createElement('a');
  linkElement.setAttribute('href',`${this.url}DownloadFile/${this.proyecto.ubicacionArchivo}`);
  linkElement.setAttribute("download",String(this.proyecto.ubicacionArchivo));
  linkElement.click(); 
  this.proyecto.usosDescarga.push(this.descripcion)
  this.proyecto.descargas= Number(this.proyecto.descargas) +1;
  this._proyectoService.actualizarProyecto(this.proyecto).subscribe(response=>{
    if(response.PROYECTO){
      let descarga =new Descarga("",this.descripcion,this.usuario._id,this.proyecto._id)
      this._descargaService.registrarDescarga(descarga).subscribe(response=>{
        
      })
    }
  })
}
onCancel(){
  this._router.navigate(['/proyecto/'+this.proyecto._id])
}

}
