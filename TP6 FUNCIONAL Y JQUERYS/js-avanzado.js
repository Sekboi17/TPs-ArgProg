// EJERCICIO 1
// var arrayRandom = [];

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// };

// for (i = 1; i <= 10; i++) {
//     arrayRandom.push(getRandomInt(1, 11));
// }
// console.log(arrayRandom);

// let arrayOrdenado = arrayRandom.slice().sort((a, b) => {
//     if (a > b) {
//         return 1;      // el valor B va antes que A
//     }
//     if (a < b) {
//         return -1;     // el valor A va antes que el valor B
//     }
//     return 0;
// })
// console.log(arrayOrdenado);

// var listaUnd = document.getElementById("numeroOrdenados");

// for (i = 0; i < arrayOrdenado.length; i++) {

//     var item = document.createElement("li");
//     item.innerHTML = arrayOrdenado[i]
//     listaUnd.appendChild(item);
// }


// EJERCICIO 2
// var numeros = [1,2,3,4,5,6];

// var iteracion = 0;
// while(iteracion<6){
//     console.log(numeros[iteracion]);
//     iteracion++;
// }

// parte b
// var numeros = [1,2,3,4,5,6];

// for (i=0; i<6;i++){
//     console.log(numeros[i]);
// }

// parte c
// var numeros = [1,2,3,4,5,6];
// numeros.forEach(numero => console.log(numero));

//  parte d
//  var numeros = [1,2,3,4,5,6];

// for (i=0; i<numeros.length;i++){
//     // numeros[i] ;
//      console.log(numeros[i]+1);
//  }

//  parte e
//  var numeros = [1,2,3,4,5,6];
//  var numeros1 = numeros.map ( function(numero){
//     return numero+1;
//  })
//  console.log(numeros);
//  console.log(numeros1);

//  parte f
// var numeros = [1,2,3,4,5,6];
// var total = numeros.reduce((acumulador,numero) => {
//     return acumulador + numero;
// }, 0);
// console.log(total/2)


// EJERCICIO 3
// var numeros = [1,2,3,4,5,6];
// var numerosCuadrados = numeros.map(numero => numero *numero);
// console.log(numerosCuadrados)


// EJERCICIO 4
// Dado el array [ 1, -4, 12, 0, -3, 29, -150], hacer la suma solo de sus números positivos.

// var num = [1, -4, 12, 0, -3, 29, -150];
// var totalPositivos = num.reduce((acumulador, numero) => {
//     if (numero >= 0) {
//         return acumulador + numero;
//     }
//     return acumulador
// }, 0);
// console.log(num)
// console.log("el total es: " + totalPositivos)

// let suma = num.reduce((acc,numero) =>{
//     return numero > 0 ? acc + numero : acc;
// },0);
// numero es mayor a 0? si es mayor retorna la suma entre el acumulador y el numero. Si no es mayor retorna unicamente el acumulador
// console.log("suma: " + suma);


// EJERCICIO 5
// var nombres = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];

// var nombresSeis = nombres.filter(producto => producto.length >= 6); // filtrar los nombres con menos de 6 letras
// console.log(nombresSeis);

// var nombresM = nombres.filter(nombre => nombre[0].toLocaleLowerCase() == "m");  // filtras los nombres que comienzen con M
// console.log(nombresM);


// var nombresOrdenados = nombres.slice().sort((a, b) => {         //ordenar alfabeticamente
//     if (a > b) {
//         return 1;      // el valor B va antes que A
//     }
//     if (a < b) {
//         return -1;     // el valor A va antes que el valor B
//     }
//     return 0;
// })
// console.log(nombresOrdenados);

// var nombresIniciales = nombres.map((nombre) => nombre[0]);     // generar un array con solo las iniciales
// console.log(nombresIniciales);

// var nombresMayusculas = nombres.map((nombre) => nombre.toLocaleUpperCase())   // generar un array con los nombres en mayusculas nombre.toLocaleUpperCase;
// console.log(nombresMayusculas);

// var nombresJ = nombres.some(nombre => nombre[0].toLocaleLowerCase() == "j");   // queremos saber si exixte algun nombres con J
// if (nombresJ === true) {
//     console.log("Hay al menos un nombre con J");
// }
// else {
//     console.log("No hay ningun nombre con J");
// }

// EJERCICIO 6
// determinar si el color introducido por el usuario esta dentro del array
var colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];     
var colorUsuario = prompt("Escribi un color");

var colorMatch = colores.some(color => color === colorUsuario.toLocaleLowerCase());

if (colorMatch === true) {
    console.log("El color introducido esta dentro del array");
}
else {
    console.log("El color introducido NO esta dentro del array");
}

// EJERCICIO 7  
// Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con solo los números pares
var numeros = [1,6,4,2,3,7,9,10,52,41];
var numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log(numeros);
console.log(numerosPares);

// EJERCICIO 8 
//Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que contenga sólo las palabras que empiezan con una vocal.
var palabras = ["una","te","los","se","con","para","mi","está","porque","dios","allí"]
var vocales = ["a","e","i","o","u"]
var palabrasVocal = palabras.filter(palabra => vocales.includes(palabra[0]));
console.log(palabrasVocal);

// EJERCICIO 9
//Crear un método que permite intercambiar las posiciones de dos elementos de un arreglo en base a sus índices.
var pais = ['Mexico', 'España', 'Argentina', 'Chile', 'Colombia', 'Venezuela'];
var paisModificado  = swap(pais,0,5);


function swap(array,index1,index2){
    let arrayClonado = array.slice()
    let aux= arrayClonado[index1];
    arrayClonado[index1] = arrayClonado[index2];
    arrayClonado[index2] = aux;
    return arrayClonado
}
console.log(pais);
console.log(paisModificado);

