import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Proyecto } from "../models/Proyecto";
import { Global } from "./Global";

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  public url: string;
  constructor(private _http: HttpClient) { 
    this.url = Global.url;
  }
  registrarProyecto(proyecto: Proyecto): Observable<any> {
    let params = JSON.stringify(proyecto);
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(`${this.url}proyecto`, params, { headers: headers });
  }
  obtenerProyecto(id:string): Observable<any> {
      let headers = new HttpHeaders().set("Content-Type", "application/json");
      return this._http.get(`${this.url}proyecto/${id}`, { headers: headers });
  }
  eliminarProyecto(id: string): Observable<any> {
      let headers = new HttpHeaders().set("Content-Type", "application/json");
      return this._http.delete(`${this.url}proyecto/${id}`, { headers: headers });
  }
  actualizarProyecto(proyecto: Proyecto): Observable<any> {
      let params = JSON.stringify(proyecto);
      let headers = new HttpHeaders().set("Content-Type", "application/json");
      return this._http.put(`${this.url}proyecto/${proyecto._id}`, params, { headers: headers });
  }
}
