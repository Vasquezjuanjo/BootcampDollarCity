
interface Interactivo {
    Interactuar: ()=> string;
}

class Participante implements Interactivo {
    Nombre: string;
    Profecion: string;

    constructor(Nombre:string, Profecion:string){
        this.Nombre = Nombre;
        this.Profecion = Profecion;
    }

    Presentarse(): string {
        return `QUEN LON QUE, Me Conocen Como ${this.Nombre} y soy ${this.Profecion}.`;
    }

    Interactuar(): string {
        return `Estamos ReMelos!!!`;
    }
}

class NuevoParticipante extends Participante {
    GeneroMusicalFavorito: string = 'Hip Hop 90s.';

    Canciones(): string{
        return `Me Gusta Escuchar ${this.GeneroMusicalFavorito}.`
    }
} 

class NewParticipante extends Participante {
    BaileFavorito: string = 'BreakDance';

    HablarDeBailes(): string {
        return `Me encanta hacer ${this.BaileFavorito}.`
    }
}
const Primeriso = new NuevoParticipante ('El VasQueZ','Rapero');
console.log(Primeriso.Presentarse());
console.log(Primeriso.Canciones());
console.log(Primeriso.Interactuar());

