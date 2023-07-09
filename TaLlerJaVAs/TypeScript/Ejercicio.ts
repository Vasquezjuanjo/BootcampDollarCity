//Ejercicio: Calculadora.

//-Crea una calculadora sencilla en TypeScript que pueda realizar operaciones básicas como suma, resta, multiplicación y división. La calculadora debe tener una función para cada operación.

//Suma, Resta, Multiplicacion y Division debe tener una funcion para cada operacion.

interface Calculadora { //creamos la interfaz para mi Calculadora.
    resultado: number; //Propiedad para almazenar.
    sumar(a:number,b:number):number;//Metodo1.
    restar(a:number,b:number):number;//Metodo2.
    multiplicar(a:number,b:number):number;//Metodo3.
    dividir(a:number,b:number):number;//Metodo4.

}

//Implementar la interfaz de mi Calculadora.
class CalculadoraBasica  implements Calculadora{
    resultado: number = 0;

    sumar(a:number,b:number):number {
        this.resultado = a + b;

        return this.resultado;
    }
    restar(a:number,b:number):number {
        this.resultado = a - b;

        return this.resultado;
    }
    multiplicar(a:number,b:number):number {
        this.resultado = a * b;

        return this.resultado;
    }
    dividir(a:number,b:number):number {
        if (b !== 0){
            this.resultado = a / b;
            return this.resultado; 
        }else{
            console.log("Error: No se puede dividir entre cero.");
            
            
        }

        return this.resultado;
    }

}