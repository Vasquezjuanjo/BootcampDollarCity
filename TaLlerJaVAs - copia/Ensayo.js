                //---TALLER EN CLASE---//
//---EJERCICIO #01---//
//Realizar una funcion la cual reciba 2 numeros, a y b. Determine que numero es mayor.

function determinarNumeroMayor(a, b) {
    if (a > b) {
      return a + " es mayor que " + b;
    } else if (b > a) {
      return b + " es mayor que " + a;
  }
}

//llamar a la funcion
console.log(determinarNumeroMayor(5, 10)); // 10 es mayor que 5
console.log(determinarNumeroMayor(25, 12)); // 25 es mayor que 12


//---EJERCICIO #02---//
//Realizar una funcion la cual reciba 3 notas de alumnos, con ellas me devuelva la suma total, me muestre las 3 notas y el promedio del alumno.

function calcularPromedio(nota1, nota2, nota3){
    let suma = nota1 + nota2 + nota3;
    let promedio = suma / 3;
    console.log("Las notas del alumno son: "+ nota1 +", " +nota2 +", " + nota3)
    console.log("La suma total de las notas es: "+suma)
    console.log("El promedio del alumno es: "+promedio)
    return promedio;
}

calcularPromedio(4, 5, 8);


