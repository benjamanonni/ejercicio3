
//creamos la funcion contructora tarea,si yo uso this sin interface tira erorr porque no le asigno el tipo
export interface TareaTipo{
    titulo:string;
    descripcion:string;
    estado: number;
    fechaCreacion:Date;
    fechaEdicion: Date;
    vencimiento:string;
    dificultad:string
}

//le decimos que this es de tipo tarea,si esto no lo hicieramos haria error
//creamos una funcion contructora ya que no usamso class
//se accede a tarea a traves de this
export function TareaCtor(this:TareaTipo,titulo:string, descripcion:string, estado:number, vencimiento:string, dificultad:string) {
  this.titulo = titulo;
  this.descripcion = descripcion;
  this.estado = estado;
  this.fechaCreacion = new Date();
  this.fechaEdicion = new Date();
  this.vencimiento = vencimiento;
  this.dificultad = dificultad;
}
