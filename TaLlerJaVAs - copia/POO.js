class Vehiculo{

constructor(cantruedas,chasis,frenos,marca){
    this.ruedas = cantruedas;
    this.chasis = chasis;
    this.frenos = frenos;
    this.marca = marca;
}

mover(){
    console.log("Voy en movimiento, Rum Rum Rummm");
}

}
let auto = new Vehiculo(4,"Fibra de Carbono","Doble caliper","Pagani");
console.log(auto);
let moto = new Vehiculo(2,"Tubular","ABS","YAMAHA");
console.log(moto);

auto.mover();
moto.mover();
console.log(auto.marca);

class Persona{
      constructor(nombre, edad, sexo){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
      }
   comer(){
    console.log("Tehgo hambre, Ñam Ñam Ñam");
   }
}
let alumno = new Persona("Benito Camelas", 22,"Hombre");
console.log(alumno);
alumno.comer;


class Animal {

    constructor(especie){
        this.especie= especie;
        
    }
    
    Sonido(){
        console.log("El",+this.especie,Sonido);
    }
    
    }
    let Mascota = new Animal("perro hace Guaw GuaW GuaW",);
    console.log(Mascota);
    

    class Animal {
        constructor(especie) {
        this.especie = especie;
    }
    
    hacerSonido() { //mi metodo #1
        return "Este animal hace un sonido desconocido.";
    }
    }
    
    class Perro extends Animal { // herencia 
        constructor() {
        super("perro");
    }
    
    hacerSonido() { // metodo #2
        return "¡Guau!";
    }
    }
    
    class Gato extends Animal { // herencia #2 
    constructor() {
        super("gato");
    }
    
        hacerSonido() { // metodo #3
            return "¡Miau!";
        }
    }
     // instanciar
    const perro1 = new Perro(); 
    const gato1 = new Gato();
    
    
    console.log(perro1.hacerSonido());
    console.log(gato1.hacerSonido());