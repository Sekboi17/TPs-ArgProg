// La función Math.random devuelve un número aleatorio mayor que cero y menor que uno.
// var num = Math.random();
//Resultados posibles: 0.5, 0.12, 0,7, 0.99

// La función Math.floor() redondea al entero inferior.
// var num = 4.65;
// var num2 = Math.floor(num);
//num2 vale ahora 4


// combinando las 2 funciones obtengo un numero random
// var num = Math.floor(Math.random() * ((máximo+1) - mínimo) + mínimo); 

// var numSecreto = Math.floor(Math.random() * ((5 + 1) - 0) + 0);
var numSecreto = 2;
var intento = 0;

const numero = document.getElementById("number");
const btnJugar = document.getElementById("botonJugar");
const parrafoEstado = document.getElementById("parrafoEstado");
const divRestart = document.getElementById("divBtnRestart");

const btnRestart = document.createElement("button");
btnRestart.innerHTML = "Reintentar";

function jugar() {
    intento++;
    if (numero.value == numSecreto && intento <= 3) {
        parrafoEstado.innerHTML = "Ganaste";
    }
    if ( numero.value != numSecreto && intento >= 3) {
        parrafoEstado.innerHTML = "Perdiste";
    }
    if (parrafoEstado.innerHTML != "") {
        divRestart.appendChild(btnRestart);
        btnJugar.disabled = true;
    }
    
}
btnRestart.onclick = function(){
    intento = 0;
    btnJugar.disabled = false;
    parrafoEstado.innerHTML = "";
    numero.value = null;
    btnRestart.remove();
    // numSecreto = Math.floor(Math.random() * ((5 + 1) - 0) + 0);
}

const form = document.getElementById("formJuego");

form.onsubmit = function () {
    jugar();
    return false;
};