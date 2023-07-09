"use strict";
class Vehiculo {
    constructor(cantRuedas, Chasis, Frenos, Marca, Precio, Color) {
        this.Ruedas = number;
        this.Chasis = string;
        this.Frenos = string;
        this.Marca = string;
        this.Precio = number;
        this.Color = string;
        this.Ruedas = cantRuedas;
        this.Chasis = Chasis;
        this.Frenos = Frenos;
        this.Marca = Marca;
        this.Precio = Precio;
        this.Color = Color;
    }
    getMarca() {
        return this.Marca;
    }
    setColor(Color) {
        if (Color === "White") {
            this.Color = Color;
        }
        else {
            console.log("Hoy no se trabaja, mi Ppa.");
        }
        getColor();
        {
            return this.Color;
        }
    }
}
let Coche = new Vehiculo(4, "Fibra de Carbono", "Disco", "PAGANI", 300000, "Negro");
Coche.setColor("White");
console.log(Coche.getMarca());
console.log(Coche.getColor());
