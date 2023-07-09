//Ejercicio: Sistema de Gestión de Aeropuertos en Colombia.

//En este ejercicio, se te solicita desarrollar un sistema de gestión de aeropuertos en Colombia utilizando programación orientada a objetos en TypeScript. El sistema debe permitir realizar las siguientes operaciones:

//Agregar un aeropuerto: El sistema debe permitir agregar un nuevo aeropuerto con la siguiente información: nombre, ubicación (ciudad y departamento), código IATA y número de pistas.

//Mostrar información de un aeropuerto: El sistema debe ser capaz de mostrar la información completa de un aeropuerto específico, incluyendo todos sus atributos.

//Buscar aeropuertos por ubicación: El sistema debe permitir buscar y mostrar todos los aeropuertos que se encuentren en una ubicación específica (ciudad o departamento).

//Actualizar información de un aeropuerto: El sistema debe permitir actualizar la información de un aeropuerto, incluyendo el nombre, ubicación, código IATA y número de pistas.

//Eliminar un aeropuerto: El sistema debe permitir eliminar un aeropuerto de la lista.

//Se te pide implementar el sistema de gestión de aeropuertos utilizando programación orientada a objetos. Debes definir una clase Aeropuerto que represente un aeropuerto y contenga los atributos mencionados anteriormente, así como los métodos necesarios para realizar las operaciones mencionadas.

//Además, debes implementar una clase GestorAeropuertos que actúe como una colección de aeropuertos. La clase GestorAeropuertos debe tener métodos para agregar un aeropuerto, mostrar la información de un aeropuerto, buscar aeropuertos por ubicación, actualizar la información de un aeropuerto y eliminar un aeropuerto.

//Finalmente, debes crear instancias de la clase GestorAeropuertos y utilizar sus métodos para probar el sistema de gestión de aeropuertos en Colombia.

//Recuerda aplicar los principios de la programación orientada a objetos, como encapsulación, abstracción, herencia o polimorfismo, según sea necesario para construir una solución estructurada y modular.

class Aeropuerto{
    private Nombre : string;
    private Ubicacion : string;
    private CodigoIATA : string;
    private Numeropista : number;

    constructor(){
        this.Nombre = Nombre;
        this.Ubicacion = Ubicacion;
        this.CodigoIATA = CodigoIATA;
        this.Numeropista = Numeropista;

    }
public getNombre(): string{ 
    return this.Nombre;
}

public getUbicacion(): string{ 
    return this.Ubicacion;
}
public getCodigoIATA(): string{ 
    return this.CodigoIATA;
}
public getNumeropista(): string{ 
    return this.Numeropista;
}
}
class Aeropuerto{
    private nombre: string;
    private ubicacion: {ciudad: string, departamento: string};
    private codigoIATA: string;
    private numeroPistas: number;

    constructor (nombre: string, ubicacion:{ciudad: string, departamento: string}, codigoIATA: string, numeroPistas: number){
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.codigoIATA = codigoIATA;
        this.numeroPistas = numeroPistas;
        }

        public getNombre(): string {
            return this.nombre;
        }
        public getUbicacion():{ciudad : string, departamento: string}{
            return this.ubicacion;
        }
        public getCodigoIATA(): string{
            return this.codigoIATA
        }
        public getNumeroPistas(): number{
            return this.numeroPistas
        }

        public actualizarNombre(nombre: string): void{
            this.nombre = nombre;
        }
        public actualizarUbicacion(ubicacion:{ciudad : string, departamento: string}): void{
            this.ubicacion = ubicacion;
        }
        public actualizarCodigoIATA(codigoIATA: string): void{
            this.codigoIATA = codigoIATA;
        }
        public actualizarNumeroPistas(numeroPistas: number): void {
            this.numeroPistas = numeroPistas
        }
}
class GestorAeropuertos {
    private aeropuertos: Aeropuerto[];
  
    constructor() {
      this.aeropuertos = [];
    }
  
    public agregarAeropuerto(aeropuerto: Aeropuerto): void {
      this.aeropuertos.push(aeropuerto);
    }
  
    public mostrarInformacionAeropuerto(nombre: string): void {
      const aeropuertoEncontrado = this.buscarAeropuertoPorNombre(nombre);
  
      if (aeropuertoEncontrado) {
        console.log(`Nombre: ${aeropuertoEncontrado.getNombre()}`);
        console.log(`Ubicación: ${aeropuertoEncontrado.getUbicacion().ciudad}, ${aeropuertoEncontrado.getUbicacion().departamento}`);
        console.log(`Código IATA: ${aeropuertoEncontrado.getCodigoIATA()}`);
        console.log(`Número de pistas: ${aeropuertoEncontrado.getNumeroPistas()}`);
      } else {
        console.log(`No se encontró el aeropuerto ${nombre}`);
      }
    }
  
    public buscarAeropuertosPorUbicacion(ciudad: string, departamento: string): void {
      const aeropuertosEncontrados = this.aeropuertos.filter(aeropuerto => aeropuerto.getUbicacion().ciudad === ciudad && aeropuerto.getUbicacion().departamento === departamento);
  
      if (aeropuertosEncontrados.length > 0) {
        console.log(`Aeropuertos encontrados en ${ciudad}, ${departamento}:`);
        aeropuertosEncontrados.forEach(aeropuerto => console.log(aeropuerto.getNombre()));
      } else {
        console.log(`No se encontraron aeropuertos en ${ciudad}, ${departamento}`);
      }
    }
  
    public actualizarInformacionAeropuerto(nombre: string, nuevaInformacion: { nombre?: string, ubicacion?: { ciudad: string, departamento: string }, codigoIATA?: string, numeroPistas?: number }): void {
        const aeropuertoEncontrado = this.buscarAeropuertoPorNombre(nombre);
        if (aeropuertoEncontrado) {
            if (nuevaInformacion.nombre) {
              aeropuertoEncontrado.actualizarNombre(nuevaInformacion.nombre);
            }
            if (nuevaInformacion.ubicacion) {
              aeropuertoEncontrado.actualizarUbicacion(nuevaInformacion.ubicacion);
            }
            if (nuevaInformacion.codigoIATA) {
              aeropuertoEncontrado.actualizarCodigoIATA(nuevaInformacion.codigoIATA);
            }
            if (nuevaInformacion.numeroPistas) {
              aeropuertoEncontrado.actualizarNumeropista(nuevaInformacion.numeropista);
            }
          } else {
            console.log(`No se encontró el aeropuerto ${nombre}`);
          }
        }

        public eliminarAeropuerto(nombre: string): void {
        const indiceAeropuerto = this.aeropuertos.findIndex(aeropuerto => aeropuerto.getNombre() === nombre);
        if (indiceAeropuerto !== -1) {
            this.aeropuertos.splice(indiceAeropuerto, 1);
            console.log(`Se eliminó el aeropuerto ${nombre}`);
          } else {
            console.log(`No se encontró el aeropuerto ${nombre}`);
          }
        }

        private buscarAeropuertoPorNombre(nombre: string): Aeropuerto | undefined {
        return this.aeropuertos.find(aeropuerto => aeropuerto.getNombre() === nombre);
        }
        }
        // Crear instancias del gestor de aeropuertos y probar el sistema

const gestorAeropuertos = new GestorAeropuertos();

// Agregar aeropuertos
const aeropuerto1 = new Aeropuerto('Aeropuerto Internacional El Dorado', { ciudad: 'Bogotá', departamento: 'Cundinamarca' }, 'BOG', 3);
const aeropuerto2 = new Aeropuerto('Aeropuerto José María Córdova', { ciudad: 'Medellín', departamento: 'Antioquia' }, 'MDE', 2);
gestorAeropuertos.agregarAeropuerto(aeropuerto1);
gestorAeropuertos.agregarAeropuerto(aeropuerto2);

// Mostrar información de un aeropuerto
gestorAeropuertos.mostrarInformacionAeropuerto('Aeropuerto Internacional El Dorado');

// Buscar aeropuertos por ubicación
gestorAeropuertos.buscarAeropuertosPorUbicacion('Medellín', 'Antioquia');

// Actualizar información de un aeropuerto
gestorAeropuertos.actualizarInformacionAeropuerto('Aeropuerto Internacional El Dorado', { nombre: 'Nuevo Nombre', codigoIATA: 'NVO' });
gestorAeropuertos.mostrarInformacionAeropuerto('Nuevo Nombre');

// Eliminar un aeropuerto
gestorAeropuertos.eliminarAeropuerto('Aeropuerto José María Córdoba');