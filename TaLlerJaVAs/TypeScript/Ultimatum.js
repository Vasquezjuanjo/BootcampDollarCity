"use strict";
class Leyends {
    constructor(Nombre, Canciones) {
        this.Nombre = Nombre;
        this.Canciones = Canciones;
    }
    Industria() {
        return `El Gran ${this.Nombre} y su temazo ${this.Canciones}.`;
    }
}
class Legendary extends Leyends {
    constructor() {
        super(...arguments);
        this.Clasicos = 'Hip Hop 90s.';
    }
    Industria() {
        return `Me gusta escuchar ${this.Clasicos}.`;
    }
}
class Nuevo extends Legendary {
    constructor() {
        super(...arguments);
        this.Baile = 'BreakDance';
    }
    Industria() {
        return `Me encanta hacer ${this.Baile}.`;
    }
}
const Letra = new Nuevo('Snoop Dogg', 'New Episode');
console.log(Letra.Industria());
