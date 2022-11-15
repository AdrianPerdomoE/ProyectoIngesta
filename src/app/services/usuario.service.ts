import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from './Global';
import { Usuario } from '../models/Usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url: string;
  constructor(private _http: HttpClient) {
      this.url = Global.url;
  }
  registrarUsuario(usuario: Usuario): Observable<any> {
    let params = JSON.stringify(usuario)
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(`${this.url}usuario`, params, { headers: headers })
  } 

  obtenerNombreUsuarios(): Observable<any> {
      let headers = new HttpHeaders().set("Content-Type", "application/json");
      return this._http.get(`${this.url}NombreUsuarios`, { headers: headers });
  }

  obtenerUsuario(correo: string): Observable<any> {
      let headers = new HttpHeaders().set("Content-Type", "application/json");
      return this._http.get(`${this.url}usuario/${correo}`, { headers: headers });
  }

  obtenerExistencia(correo: string): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(`${this.url}Existencia/${correo}`, { headers: headers });
}

  actualizarUsuario(usuario: Usuario): Observable<any> {
      let params = JSON.stringify(usuario)
      let headers = new HttpHeaders().set("Content-Type", "application/json");
      return this._http.put(`${this.url}usuario/${usuario._id}`, params, { headers: headers });
  }
  eliminarUsuario(usuario: Usuario): Observable<any> {
    let params = JSON.stringify(usuario)
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.delete(`${this.url}usuario/${usuario._id}`,{ headers: headers });
}

}
