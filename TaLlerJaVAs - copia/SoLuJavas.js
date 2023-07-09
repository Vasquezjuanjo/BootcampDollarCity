 //-----Taller-----

//Necesitamos saber si las plantillas de jugadores estan complletas.
//Dado un numero entero de 1 a 24 averiguar:
//-Si el numero es menor a 11 mostrar: Te faltan Jagadores titulares.
//-Si el numero es mayor a 11 y menor a 24 mostrar: Te faltan jugadores suplentes.
//-Si el numero es mayor a 24 mostrar: No se puede llevar tantos jugadores.
let numero = 15;



if(numero < 11){
    console.log("Te faltan jugadores titulares.");}
    if(numero > 11  < 24){
    console.log("Te faltan jugadores suplentes.");}
    if(numero > 24){
        console.log("No se puede llevar tantos jugadores.");
    }



 //Este programa te ayuda a viajar.
 //El programa recibe informacion de si va a viajar con Coche, Tren, Bicicleta o Autobus.
 //-Si va en Tren o Autobus le recordara que lleve dinero para el tiquete.
 //-Si va en Coche le recordara que lleve los documentos y dinero para el parqueadero.
"let informacion = coche"; 
let mensaje = 0; 
 if("informacion Tren,Autobus")
 {
    mensaje = informacion = ("resultado = Tren,Autobus")
 console.log( "Llevar dinero para el tiquete.")}

 if("informacion Coche")
 {
    mensaje = informacion = ("informacion  Coche")
    console.log("Llevar documentos y dinero para el parqueadero.");
 }


 

 //Una tienda necesita un programa para facturar.
 //La tienda "La Bendicion" aplica un descuento del 15% para las compras, coyu precio sea mayor a 50 Dolares.
 //Aplica 10% si es mayor a 30 Dolares y menor a 50 Dolares.
 let compras = 64;
 let resultado = 0;
 if( "compras > 30 && < 50"){
    resultado = compras - ( compras* 0.15);
    console.log("Obtuviste un 15% de descuento: "+resultado);
 }else if(compras < 50){
    resultado = compras - (compras*0.15);
    console.log("Obtuviste un 10% de descuento: "+resultado);
 }else{
    console.log("Tu compra no aplica descuento: "+compras);
 }

 
