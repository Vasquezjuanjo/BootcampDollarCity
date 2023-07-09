function BubbleSort(array) {
    resulArr = array;

arrLength = resulArr.length; //Largo Array.
flag = true; //Bandera auxiliar, si esta en True, hay que realizar cambios.

while(flag){ //Mientras haya cambios que realizar, ejecuta While.
flag = false; //Cambiamos a False, por si no encuentra mas cambios.

for(let i = 0; i<arrLength; i++){

if(resulArr[i] > resulArr[i+1]){
  let aux = resulArr[i];

  resulArr[i] = resulArr[i+1];
  resulArr[i+1] = aux;
  flag = true;
}

}

}
return resulArr;
}
let arrayJ = [9,38,25,14,60,7,47];
console.log(BubbleSort(arrayJ));