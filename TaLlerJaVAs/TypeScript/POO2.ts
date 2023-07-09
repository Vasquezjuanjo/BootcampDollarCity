class Persona {
    protected Nombre: string;
    protected Edad: number;
    protected Sexo: string;

   constructor(Nombre: string, Edad:number, Sexo:string){
    this.Nombre = Nombre;
    this.Edad = Edad;
    this.Sexo = Sexo;
   }
   Saludar(){
    console.log(`Me presento soy ${this.Nombre}`); 
   }
   ObtenerEdad(){
    console.log(`Tengo ${this.Edad} años de vida`);
    
   }
}

class Marginados extends Persona{
private Ciudad: string;

constructor(nombre :string, edad:number, sexo:string, ciudad:string){
    super(nombre, edad, sexo);
    this.Ciudad = ciudad;
}
Saludos(){
    super.Saludar();
    console.log(`Vengo de ${this.Ciudad},mi so'`);    
}
}



const Marginado = new Marginados("El vasquez",20,"Macho baro","Metrallo city");

Marginado.Saludar();