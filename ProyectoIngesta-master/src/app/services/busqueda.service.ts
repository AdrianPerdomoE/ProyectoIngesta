import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "./Global";

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {
  public url: string;
  constructor(private _http: HttpClient) {
      this.url = Global.url;
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
obtenerProyectosEtiquetas(etiqueta:string): Observable<any> {
  
  let headers = new HttpHeaders().set("Content-Type", "application/json");
  return this._http.get(`${this.url}proyectosEtiquetas/${etiqueta}`, { headers: headers });
}
obtenerProyectosNombre(nombre:string): Observable<any> {
  let headers = new HttpHeaders().set("Content-Type", "application/json");
  return this._http.get(`${this.url}proyectosNombre/${nombre}`, { headers: headers });
}
}
