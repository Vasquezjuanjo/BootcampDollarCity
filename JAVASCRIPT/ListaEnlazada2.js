class Cancion {
    constructor(nombre, artista) {
        this.nombre = nombre;
        this.artista = artista;
        this.siguiente = null;
    }
}

class ListaReproduccion {
    constructor() {
        this.cabeza = null;
        this.tamaño = 0;
    }

agregarCancion(nombre, artista) { // me permite añadir canciones, al final de la lista
    const NuevaCancion = new Cancion(nombre, artista);

    if(!this.cabeza) {
        this.cabeza = NuevaCancion;
    }else {
        let actual = this.cabeza;

        while (actual.siguiente) {
            actual = actual.siguiente;
        }
        actual.siguiente = NuevaCancion;
    }
    this.tamaño++;
    }

    reproducir() {
        if (!this.cabeza) {
            console.log("La lista de reproduccion esta vacia");
            return;
        }

        console.log("Reproduciendo " + this.cabeza.nombre + " - " + this.cabeza.artista);
        this.cabeza = this.cabeza.siguiente;
        this.tamaño--;
    }
}

const MyMusic = new ListaReproduccion();
MyMusic.agregarCancion("Tesis", "El Vasquez");
MyMusic.agregarCancion("Otros Mun2","El Vasquez");
MyMusic.agregarCancion("Concejo de Oro", "Hector Lavoe");

MyMusic.reproducir();
MyMusic.reproducir();
MyMusic.reproducir();