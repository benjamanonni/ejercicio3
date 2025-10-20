"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TareaCtor = TareaCtor;
//le decimos que this es de tipo tarea,si esto no lo hicieramos haria error
//creamos una funcion contructora ya que no usamso class
//se accede a tarea a traves de this
function TareaCtor(titulo, descripcion, estado, vencimiento, dificultad) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.estado = estado;
    this.fechaCreacion = new Date();
    this.fechaEdicion = new Date();
    this.vencimiento = vencimiento;
    this.dificultad = dificultad;
}
