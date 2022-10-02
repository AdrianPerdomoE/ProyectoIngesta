export class Usuario {
    constructor(
        public _id: string,
        public nombre: string,
        public correo: string,
        public password: string,
        public cargo: Number
    ) { }
}//Modelo de las propiedades de un usuario