import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from './Global.api';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  public url: string;
  constructor(private _http: HttpClient) {
      this.url = Global.url;
  }
  
}
