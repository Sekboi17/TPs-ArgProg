//1

// var numero = 6;
// var nombre = "Jose";
// var booleano = true

// function funcionUno (variable){
//    return typeof(variable);
//  }
// console.log(funcionUno(booleano));


//2

// var num1 = parseInt(prompt("Introduzca el primer numero"));
// var num2 = parseInt(prompt("Introduzca el segundo numero"));

// function funcionSuma (a,b) {
//     return  a - b;
// }
// console.log(funcionSuma(num1,num2));

//3

// var datoA = prompt ("Introduzca el dato A");
// var datoB = prompt("Introduzca el dato B");
// function intercambio(a,b){
//     c = a; 
//     a = b;
//     b = c;
//     return [a,b]
// }
// console.log(intercambio(datoA,datoB));

//4

// var ladoCuadrado = parseInt(prompt("Introduzca el tamaño del lado"));

//  function perimetroSuperficie(lado) {
// perimetro = lado*4;
// superficie = lado*lado;
// return [perimetro,superficie]
//  }
//  console.log(perimetroSuperficie(ladoCuadrado));

//5
//  var temperatura= parseInt(prompt("Introduzca la temperatura en F°"));

//  function convertidorTemperatura(temp){
//     nuevaTemp= (temp - 32)/1.8
//     return nuevaTemp;
//  }
// console.log(convertidorTemperatura(temperatura));

//6
// var num1 = parseInt(prompt("Introduzca el numero"));

// function funcionFactorial(numero) {
//     factorial = 1;
//     for (i=1; i<= numero; i++) {
//          factorial = factorial * i;
//     }


//    return factorial
//    }

// if (num1 <= 10 && num1 > 0) {

//     console.log(funcionFactorial(num1))
// }
// else {
//     console.log("Tenes que poner un valor menor o igual a 10")
// }

//7

// function verificador(textoComparable){
//     textoComparable = textoComparable.toLowerCase().replaceAll(" ", "");
//     let resultado = true;
//     for(i = textoComparable.length-1, primeraLetra=0 ; i>=0 ; i--,primeraLetra++ ){
//         if(textoComparable[i] != textoComparable[primeraLetra]){

//         resultado = false;
//         }
//     }
//     return resultado;
// }

// var texto= prompt ("Introduzca su texto aqui");

// if(verificador(texto)){
//     console.log("El texto ingresado es palindromo");
// }
// else{
//     console.log("El texto ingresado no es palindromo");
// }

//8

// function mayusculas (text){
//    text = text.toUpperCase();
//    return text;
// }
// function minusculas (text){
//     text = text.toLowerCase();
//     return text;
// }

// var texto = prompt("Ingrese su texto aqui");
// console.log(mayusculas(texto));
// console.log(minusculas(texto));

// 9

// var nota = parseInt(prompt("Introduzca la nota aqui"));

//  if (nota>=0 && nota<=3){
//      console.log("La calificacion es MUY DEFICIENTE");
//  }
//  else if (nota>3 && nota<=5){
//      console.log("La calificacion es INSUFICIENTE");
//  }
//  else if (nota>5 && nota<=7){
//      console.log("La calificacion es SUFICIENTE");
//  }
//  else if (nota>7 && nota<=9){
//      console.log("La calificacion es NOTABLE");
//  }
//  else if (nota == 10){
//      console.log("La calificacion es SOBRESALIENTE");
//  }
//  else {
//      console.log("Por favor ingresar una nota valida");
//  }

//10
// var mes = parseInt(prompt("Introduzca el numero del mes"));

// switch (mes) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("El mes tiene 31 dias");
//         break;

//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("El mes tiene 30 dias");
//         break;

//     case 2:
//         console.log("El mes tiene 28 dias");
//         break;

//     default:
//         console.log("Por favor introducir un mes correcto");

// }

//11
var tamañoPiramide = prompt("Elige el tamaño de tu piramide (Debe ser menos de 10 y mayor a 0):");
var piramide = "";

if (tamañoPiramide < 11 && tamañoPiramide > 0) {
    for (let i = 1; i <= tamañoPiramide; i++) {
        piramide += i;                                          // es igual a poner piramide = piramide + i
        console.log(piramide);
    }
} else {
    console.log("El tamaño de la piramide debe ser menor o igual a 10 y mayor a 0");
}

//12

// var bultos = parseInt(prompt("Ingrese la cantidad de bultos"));
// var bultosEnCajas = parseInt(prompt("Ingrese la cantidad de bultos que entran por caja"));

// var cajas = parseInt( bultos / bultosEnCajas);
// console.log("Van a haber "+ cajas + " cajas completas");
// var bultosSueltos = bultos - bultosEnCajas* cajas;
// console.log("Van a sobrar " + bultosSueltos + " bultos");

//13
// var precioFiesta = 650000; //5% descuento
// var precioFocus  = 850000;  //10% descuento

// alert("El precio del modelo Ford Fiesta es de $" + precioFiesta + " (Posee un descuento del 5%). \nEl precio del modelo Ford Focus es de $" + precioFocus + " (Posee un descuento del 10%).");
// var codigo = prompt("Introduzca el modelo que desea comprar");
// codigo = codigo.toLocaleLowerCase();

// if(codigo == "fiesta"){
//     descuentoFiesta = precioFiesta / 100 * 5;
//     precioFiesta = precioFiesta - descuentoFiesta;
//     console.log("El importe total de su vehiculo Fiesta sera de $" + precioFiesta + ".");

// }

// else if(codigo == "focus"){


//     descuentoFocus = precioFocus / 100 * 10;
//     precioFocus = precioFocus- descuentoFocus;
//     console.log("El importe total de su vehiculo Focus sera de $" + precioFocus + ".");
// }

// else{
//     console.log("Por favor introducir un modelo correcto");
// }
