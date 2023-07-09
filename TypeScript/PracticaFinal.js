"use strict";
class Participante {
    constructor(Nombre, Profecion) {
        this.Nombre = Nombre;
        this.Profecion = Profecion;
    }
    Presentarse() {
        return `QUEN LON QUE, Me Conocen Como ${this.Nombre} y soy ${this.Profecion}.`;
    }
    Interactuar() {
        return `Estamos ReMelos!!!`;
    }
}
class NuevoParticipante extends Participante {
    constructor() {
        super(...arguments);
        this.GeneroMusicalFavorito = 'Hip Hop 90s.';
    }
    Canciones() {
        return `Me Gusta Escuchar ${this.GeneroMusicalFavorito}.`;
    }
}
class NewParticipante extends Participante {
    constructor() {
        super(...arguments);
        this.BaileFavorito = 'BreakDance';
    }
    HablarDeBailes() {
        return `Me encanta hacer ${this.BaileFavorito}.`;
    }
}
const Primeriso = new NuevoParticipante('El VasQueZ', 'Rapero');
console.log(Primeriso.Presentarse());
console.log(Primeriso.Canciones());
console.log(Primeriso.Interactuar());
