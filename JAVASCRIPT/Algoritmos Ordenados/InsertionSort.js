//Insertion sirve para Arrays pequeños.
function InsertionSort(array) {
    let arrayLength = array.length; // Largo del Array.

    for(let i = 0; i <arrayLength;i++){ //Recorrer el Array.
        //console.log(array[i]);
       let dato = array[i];//Guardamos el dato para comparar.
       let j = i-1; //Guardo el Indice anterior.

       while(j>=0 && array[j]>dato){//Mientras j sea mayor a 0 y el valor sea mayor al dato.
array[j+1]= array[j]; //Intercambia el valor.
j--;  //Restamos j para que salga del While.
  } 
  array[j+1]= dato; //Guardamos el dato en su lugar.
}
return array;    
}
let array1 = [10,5,3,21,17,2];

console.log(InsertionSort (array1));


//console.log(arra1[4]);