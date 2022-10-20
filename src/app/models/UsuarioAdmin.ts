import { Usuario } from "./Usuario";

export class UsuarioAdmin extends Usuario{
    public get permisos(): Array<string> {
        return this._permisos;
    }
    constructor(
        public override _id: string,
        public override nombre: string,
        public override correo: string,
        public override password: string,
        public override cargo: Number,
        private _permisos: Array<string>
        ){
        super(_id,nombre,correo,password,cargo);
    }

}