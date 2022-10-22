import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/app/models/Proyecto';
import { Global } from 'src/app/services/Global';

@Component({
  selector: 'app-descarga',
  templateUrl: './descarga.component.html',
  styleUrls: ['./descarga.component.css']
})
export class DescargaComponent implements OnInit {
  @Input() proyecto!: Proyecto; //obligatorio
  public url:String;
  constructor(private _http: HttpClient) { 
    this.url = Global.url;
  }
  ngOnInit(): void {
   
  }
 
iniciarDescarga()
{ 
 
  let linkElement = document.createElement('a');
  linkElement.setAttribute('href',`${this.url}DownloadFile/${this.proyecto.ubicacionArchivo}`);
  linkElement.setAttribute("download",String(this.proyecto.ubicacionArchivo));
  linkElement.setAttribute('target',"_blank")
  linkElement.click();
    
  
  
}
}
