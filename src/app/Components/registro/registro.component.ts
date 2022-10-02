import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public usuario: Usuario;
  public usuarioGuardado: Usuario;
  public status: string;
  public passwordConfirmacion:string;
  public seleccionado : any;
  public iguales  = false;
  public InvalidEmail = false 
  public cargo = ''
  public cargos = [{nombre:'Elige un cargo',value:0},{nombre:'Administrador',valor:1},{nombre:'Editor',valor:2}]
  constructor(
    private _ServicioUsuario: UsuarioService
  ) {
    this.status = "";
    this.usuario = new Usuario('','','','',0)
    this.usuarioGuardado = new Usuario('','','','',0)
    this.passwordConfirmacion= ''
  }

  ngOnInit(): void { 
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
  confirmarPass(){
    if (this.usuario.password==this.passwordConfirmacion) {
      this.iguales=true
    }
    else{
      this.iguales = false
    }
    
  }


  registar(userForm: any) { 
    
    this.usuario.cargo = this.seleccionado.valor
    this.usuarioGuardado = this.usuario
    this._ServicioUsuario.obtenerExistencia(this.usuario.correo).subscribe(
      repuesta=>{
        if(repuesta.Existe){
          this.status = "Existe"
          return;
        }
        this._ServicioUsuario.registrarUsuario(this.usuarioGuardado).subscribe(
      
          response => {
           if (response.USUARIO) {
             this.status = "Success";
           }
           else {
             this.status = "Failed";
           }
           userForm.reset()
         }
       )
      }
    )
  }
 
}
