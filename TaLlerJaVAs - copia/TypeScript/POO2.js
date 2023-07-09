"use strict";
class Persona {
    constructor(Nombre, Edad, Sexo) {
        this.Nombre = Nombre;
        this.Edad = Edad;
        this.Sexo = Sexo;
    }
    Saludar() {
        console.log(`Me presento soy ${this.Nombre}`);
    }
    ObtenerEdad() {
        console.log(`Tengo ${this.Edad} años de vida`);
    }
}
class Marginados extends Persona {
    constructor(nombre, edad, sexo, ciudad) {
        super(nombre, edad, sexo);
        this.Ciudad = ciudad;
    }
    Saludos() {
        super.Saludar();
        console.log(`Vengo de ${this.Ciudad},mi so'`);
    }
}
const Marginado = new Marginados("El vasquez", 20, "Macho baro", "Metrallo city");
Marginado.Saludar();
