import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 public usuario = new Usuario('','','','',0)
 public cargo? = ''
 public cargos = [{nombre:'Elige un cargo',value:0},{nombre:'Administrador',valor:1},{nombre:'Editor',valor:2}]
  constructor() { }

  ngOnInit(): void {
    let localValor = localStorage.getItem('USUARIO')
    if(localValor!=null)
    this.usuario = JSON.parse(localValor)
    this.cargo = this.cargos.find(x=>x.valor==this.usuario.cargo)?.nombre
  }
  cerrarSesion(){
    localStorage.clear()
  }
}
