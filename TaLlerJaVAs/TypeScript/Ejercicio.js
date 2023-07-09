"use strict";
//Ejercicio: Calculadora.
//Implementar la interfaz de mi Calculadora.
class CalculadoraBasica {
    constructor() {
        this.resultado = 0;
    }
    sumar(a, b) {
        this.resultado = a + b;
        return this.resultado;
    }
    restar(a, b) {
        this.resultado = a - b;
        return this.resultado;
    }
    multiplicar(a, b) {
        this.resultado = a * b;
        return this.resultado;
    }
    dividir(a, b) {
        if (b !== 0) {
            this.resultado = a / b;
            return this.resultado;
        }
        else {
            console.log("Error: No se puede dividir entre cero.");
        }
        return this.resultado;
    }
}
