import { Usuario } from "./Usuario";

export class Sesion{
    constructor(
        public estadoSesionAbierta:boolean = false,
        public usuario:Usuario
    ){}
}