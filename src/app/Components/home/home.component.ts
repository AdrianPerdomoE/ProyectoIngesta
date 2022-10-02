import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public existe = true
  public Inicio = ''
  public usuario = new Usuario('','','','',0)
  public InvalidEmail = false 
  constructor(private _servicioUsuario: UsuarioService, private _router: Router) { }

  ngOnInit(): void {
    let usuarioLocal = localStorage.getItem("USUARIO")
    if(usuarioLocal!= null){
      this.usuario = JSON.parse(usuarioLocal)
    }
  }
  
  ingresar(usuario: any){
    localStorage.setItem('USUARIO',JSON.stringify(usuario))
    this._router.navigate(['/Panel principal'])
  }
  ValidarEmail() {
    let patron = new RegExp("^[a-z]+[a-z0-9._-]+@[a-z]+\.[a-z.]{2,5}$");

    return patron.test(this.usuario.correo);
  }
  ValidarDatos(form:any) {

      if (!this.ValidarEmail()) {
        this.InvalidEmail = true;
        return false;
      }
      this.InvalidEmail = false;
      return form.form.valid
  }
  onSubmit(){
    this._servicioUsuario.obtenerExistencia(this.usuario.correo).subscribe(
      respuesta=>{
        if(!respuesta.Existe){
          this.existe = false
          return
        }
        this._servicioUsuario.obtenerUsuario(this.usuario.correo).subscribe(response => {
          if (response) {
              if (response.USUARIO.password== this.usuario.password) {
                
                  this.ingresar(response.USUARIO)
              }
              else {    
                  this.Inicio = "FailedPassword"
              }
          }
          else {
    
              this.Inicio = "Failed"
          }
    
        })
      }
    )
  }    
}


