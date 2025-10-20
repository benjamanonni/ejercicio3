"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculadora {
    constructor(n1, n2) {
        this.n1 = n1;
        this.n2 = n2;
    }
    //metodos
    //suma no se usa function
    suma(n1, n2) {
        return n1 + n2;
    }
    //resta
    resta(n1, n2) {
        return n1 - n2;
    }
    //multiplicacion
    multiplicacion(n1, n2) {
        return n1 * n2;
    }
    //division
    division(n1, n2) {
        if (n2 === 0) {
            console.log("error,no se puede dividir por 0");
            return;
        }
        return n1 / n2;
    }
}
exports.Calculadora = Calculadora;
