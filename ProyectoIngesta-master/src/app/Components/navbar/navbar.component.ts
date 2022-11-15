import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/Sesion';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 public usuario = new Usuario('','','','',0);
 public sesion = new Sesion(false,this.usuario);
 public cargo? = ''
 public cargos = [{nombre:'Elige un cargo',value:0},{nombre:'Administrador',valor:1},{nombre:'Editor',valor:2}]
  constructor(private _router: Router) { }

  ngOnInit(): void {
    let localValor = sessionStorage.getItem('SESION')
    if(localValor!=null){
      this.sesion = JSON.parse(localValor)
    this.cargo = this.cargos.find(x=>x.valor==this.sesion.usuario.cargo)?.nombre
    }
    else{
      this._router.navigate(['/Inicio'])
    }
    

  }
  cerrarSesion(){
    localStorage.clear()
  }
}
