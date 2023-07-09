interface Clasic {
    Industria: () => string;
  }
  
  class Leyends implements Clasic {
    Nombre: string;
    Canciones: string;
  
    constructor(Nombre: string, Canciones: string) {
      this.Nombre = Nombre;
      this.Canciones = Canciones;
    }
  
    Industria(): string {
      return `El Gran ${this.Nombre} y su temazo ${this.Canciones}.`;
    }
  }
  
  class Legendary extends Leyends {
    Clasicos: string = 'Hip Hop 90s.';
  
    Industria(): string {
      return `Me gusta escuchar ${this.Clasicos}.`;
    }
  }
  
  class Nuevo extends Legendary {
    Baile: string = 'BreakDance';
  
    Industria(): string {
      return `Me encanta hacer ${this.Baile}.`;
    }
  }
  
  const Letra = new Nuevo('Snoop Dogg', 'New Episode');
  console.log(Letra.Industria());