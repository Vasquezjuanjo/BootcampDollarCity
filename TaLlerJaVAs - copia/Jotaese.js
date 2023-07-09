//---Taller de Vacaciones---//

//---EJERCICIO #01---//
//Implementar una funcion la cual permita pasar los graos Celsius a Farenheit.


function convertirAF(Celsius){
    let Farenheit;
    Farenheit = (Celsius * 9/5) + 32;
    return Farenheit
  }
  console.log(convertirAF(-30));

//---EJERCICIO #02---//
//Crear una funcion que reciba 2 parametros, Precio e IVA, y devuelva Precio e IVA incluidos.

//---EJERCICIO #03---//
function calcularPrecioeIVA(p){
    let IVA;
    IVA = p * 0.13;
    console.log("Total a pagar con IVA incluido es:" + IVA);
    return IVA;
   }
   calcularPrecioeIVA(2854);