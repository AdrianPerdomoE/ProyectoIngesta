import { Usuario } from "./Usuario";

export class Sesion{
    constructor(
        estadoSesionAbierta:boolean = false,
        usuario?:Usuario
    ){}
}