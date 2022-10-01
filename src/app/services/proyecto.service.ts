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

  obtenerTodosProyectos(): Observable<any> {
      let headers = new HttpHeaders().set("Content-Type", "application/json");
      return this._http.get(`${this.url}AllProyectos`, { headers: headers });
  }
  obtenerProyectosUsuario(id:string): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(`${this.url}proyectosUsuario/${id}`, { headers: headers });
  }
  obtenerProyectosTipo(tipo:string): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(`${this.url}proyectosTipo/${tipo}`, { headers: headers });
  }
  obtenerProyectosFormato(formato:string): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(`${this.url}proyectosFormato/${formato}`, { headers: headers });
  }
  obtenerProyectosCreador(creador:string): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(`${this.url}proyectosCreador/${creador}`, { headers: headers });
  }
  obtenerProyectosEtiquetas(etiquetas:Array<string>): Observable<any> {
    let etiquetasString = JSON.stringify(etiquetas)
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(`${this.url}proyectosEtiquetas/${etiquetasString}`, { headers: headers });
  }
  obtenerProyectosNombre(nombre:string): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(`${this.url}proyectosNombre/${nombre}`, { headers: headers });
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
