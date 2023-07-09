class Vehiculo{
   
   private Ruedas= number;
   private Chasis= string;
   private Frenos= string;
   private Marca= string;
   private Precio= number;
   private Color= string;
   
   
public constructor(cantRuedas:number,Chasis:string,Frenos:string,Marca:string,Precio:number,Color:string){

this.Ruedas = cantRuedas;
this.Chasis = Chasis;
this.Frenos = Frenos;
this.Marca = Marca;
this.Precio = Precio;
this.Color = Color;   
    }
    getMarca(){
        return this.Marca
    }

    setColor(Color:string){
        if(Color === "White"){
            this.Color = Color;
        }else{
            console.log("Hoy no se trabaja, mi Ppa.");   
        }
        getColor(){
            return this.Color
        }
    }
}
let Coche = new Vehiculo(4,"Fibra de Carbono","Disco","PAGANI",300000,"Negro")
Coche.setColor("White");
console.log(Coche.getMarca());
console.log(Coche.getColor());


