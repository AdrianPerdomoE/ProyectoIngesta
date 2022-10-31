import { Usuario } from "./Usuario";

export class UsuarioEditor extends Usuario{
    
    constructor(
        public override _id: string,
        public override nombre: string,
        public override correo: string,
        public override password: string,        
        ){
        super(_id,nombre,correo,password,2);
    }
}