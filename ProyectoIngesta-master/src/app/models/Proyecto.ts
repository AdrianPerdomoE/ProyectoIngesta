export class Proyecto {
    constructor(
        public _id: string,
        public etiquetas: Array<string>,
        public nombre: string,
        public descripcion: String,
        public camarografos: Array<string>,
        public ubicacionArchivo: String,
        public formato: String,
        public tipoArchivo:String,
        public fechaCreacion: Date,
        public usosDescarga:Array<string>,
        public descargas:Number,
        public creador:String,
       public creadorId:String
    ) { }
}//Modelo de las propiedades que contiene un producto