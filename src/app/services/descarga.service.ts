import { Injectable } from '@angular/core';
import { Global } from "./Global";
import { Descarga } from '../models/Descarga';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })

export class DescargaService {
    public url: string;
    constructor(private _http: HttpClient) { 
      this.url = Global.url;
    }
    registrarDescarga(descarga: Descarga): Observable<any> {
        let params = JSON.stringify(descarga);
        let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.post(`${this.url}descarga`, params, { headers: headers });
      }
      obtenerDescarga(id:string): Observable<any> {
          let headers = new HttpHeaders().set("Content-Type", "application/json");
          return this._http.get(`${this.url}descarga/${id}`, { headers: headers });
      }
      // eliminarDescarga(id: string): Observable<any> {
      //     let headers = new HttpHeaders().set("Content-Type", "application/json");
      //     return this._http.delete(`${this.url}descarga/${id}`, { headers: headers });
      // }
      
      obtenerDescargasUsuario(id:string): Observable<any> {
        let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.get(`${this.url}descargasUsuario/${id}`, { headers: headers });
    }
    obtenerDescargas(): Observable<any> {
      let headers = new HttpHeaders().set("Content-Type", "application/json");
      return this._http.get(`${this.url}AllDescargas}`, { headers: headers });
  }
      
    }