var nombres = document.getElementById("nombres");
var lista = document.getElementById("uList");

function agregarNombres(){
    var item = document.createElement("li");
    item.innerHTML = nombres.value;
    lista.appendChild(item);
}