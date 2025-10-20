"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Calculadora_js_1 = require("./Calculadora.js");
function main() {
    //creamos primera calculadora usamos constante
    let n1 = 0;
    let n2 = 0;
    const calc = new Calculadora_js_1.Calculadora(n1, n2);
    console.log("Suma:", calc.suma(5, 2));
    console.log("Resta:", calc.resta(4, 8));
    console.log("Multiplicación:", calc.multiplicacion(3, 5));
    console.log("División:", calc.division(4, 8));
}
main();
