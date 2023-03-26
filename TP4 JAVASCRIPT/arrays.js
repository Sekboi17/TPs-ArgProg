//   1,2,3

// var colores = ["rojo","azul","verde","amarillo","naranja"];

// var colorFav = colores[1];

// console.log(colores[0]);

//   4

// function numeroRamdon (min, max){
//     return Math.random() * (max - min) + min
// }
// console.log(numeroRamdon(1,99))

//  Esta forma es mejor

// function ramdon(){
// return Math.floor(Math.random() * 100);
// }
// console.log(ramdon());

//   5

// var numeros = []
// for (i=1;i<=10;i++){
//     numeros.push(i);
// }
// console.log(numeros);

//   6

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// var numeros = []
// for (i = 1; i <= 10; i++) {
//     numeros.push(getRandomInt(1,99));
// }
// console.log(numeros);

//   7

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// var numeros = []
// for (i = 1; i <= 10; i++) {
//     numeros.push(getRandomInt(1,99));
// }

// var numeros2 = numeros.slice() // esta funcion es para darle una nueva raiz a la copia numeros2 (uno igual pero creado con una nueva referencia)

// console.log("Array 1")
// console.log(numeros);

// console.log("Array 1")
// console.log(numeros2);

//  8

// var cadena = "";
// var input;

// do{
//     input =prompt("Introduzca el texto aqui (escriba cancelar para terminar)");
//     input = input.toLowerCase();
//     if(input != "cancelar"){
//     cadena = cadena + input + " - ";
//     }

// } while(input != "cancelar");
// console.log(cadena);

// Ahora la version pero con array
// var cadena = [];
// var imput;

// do{
//     input = prompt("Introduzca el texto aqui (escriba cancelar para terminar)");
//     input = input.toLowerCase();
//     if(input != "cancelar"){
//     cadena.push(input);
// }
// }
// while (input != "cancelar");
// console.log(cadena);

//  9

function calcular() {
    var dolares = parseInt(document.getElementById("dolares").value);
    var total = dolares * 300;
    document.getElementById("pesos").value = total;
}

// 10
//  function calcular(){
//      var pesos = parseInt(document.getElementById("pesos").value);
//      if (pesos == null){
//          alert("Tiene que llenar el campo de pesos para empezar la conversion.");
//      }
//      else{
//      var total = pesos / 300;
//      total = total.toFixed(2);
//      document.getElementById("dolares").value = total;
//      }
//  }

// 11

function convertir() {
    var celcius = parseInt(document.getElementById("celcius").value);
    var farenheit = celcius * 9 / 5 + 32;
    document.getElementById("farenheit").value = farenheit;
}

// 12

function enviarInformacion() {
    var nombre = document.getElementById("nombre").value;
    var material = document.getElementById("material").value;
    var comentarios = document.getElementById("comentarios").value;

    // aca utilizo los if para que la opcion elegida tome el valor de la variable tamaño, si  no lo hacia se tomaba por defecto el primer valor

    if (document.getElementById("tamaño1").checked) {
        var tamaño = document.getElementById("tamaño1").value;
    }
    else if (document.getElementById("tamaño2").checked) {
        var tamaño = document.getElementById("tamaño2").value;
    }
    else if (document.getElementById("tamaño3").checked) {
        var tamaño = document.getElementById("tamaño3").value;
    }

    document.getElementById("caracteristicas").value = nombre + " ha pedido una caja de " + material + " con una dimension " + tamaño + ". " + comentarios


}