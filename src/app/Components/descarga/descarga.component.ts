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
    this.pedirArchivo().subscribe(respuesta=>{
      let data  = respuesta
      var linkElement = document.querySelector('#descarga');
      var blob = new Blob([data], { type: 'ContentType' });
      var url = window.URL.createObjectURL(blob);
      
      linkElement?.setAttribute('href', url);
      linkElement?.setAttribute("download", 'archivo');
    })
  }
  pedirArchivo(): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
      return this._http.get(`${this.url}GetArchivo/'+${this.proyecto.ubicacionArchivo}`, { headers: headers });
  }
iniciarDescarga()
{ 
  
  
}
}
