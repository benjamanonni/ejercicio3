import { Calculadora } from "./Calculadora.js";

function main() :void{
//creamos primera calculadora usamos constante
let n1:number=0;
let n2:number=0;
const calc=new Calculadora( n1 ,n2);
 console.log("Suma:", calc.suma(5,2));
  console.log("Resta:", calc.resta(4,8));
  console.log("Multiplicación:", calc.multiplicacion(3,5));
  console.log("División:", calc.division(4,8));
}
main();