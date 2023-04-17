$(document).ready(function () {

    //declaro variables
    var input = $("#input");
    var contenido = $("#contenido");

    //evento keyup
    input.keyup(function () {
        console.log(input.val());
        contenido.html(input.val());


        if (input.val() === '') {
            contenido.html("dale te estoy esperando");
        }
    });

    $("#formulario").submit(function (evento) {
        evento.preventDefault();
        console.log("Hiciste click")
        var nombre = $("#nombre").val();
        console.log("Tu nombre es " + nombre);

    });
});

// EJERCICIO TP
// 10
$(document).ready(function () {
    var parrafo1 = $("#p1");
    parrafo1.click(function () {
        parrafo1.css({ background: "#4FB1FF" })

    });

});

// 11
$(document).ready(function () {
    var tabla = $("#tabla");
    tabla.click(function () {
        tabla.css({ background: "#F9F69D" })

    });
});

// 12
$(document).ready(function () {
    var items = $("#lista li");
    items.click(function () {
        $(this).hide();            // hace que se seleccione item por item en vez de todo junto
    });

});

// 13
$(document).ready(function () {
    var filaColor = $("#filaColor tr");
    filaColor.click(function () {
        $(this).css({ background: "#BB81F8" })

    });

});

//14
$(document).ready(function () {
    var noticia1 = $(".noticia1 p");
    var noticia2 = $(".noticia2 p");
    var noticia3 = $(".noticia3 p");

    $("#boton1").click(function () {
        noticia1.toggleClass("fs-4");
    });
    $("#boton2").click(function () {
        noticia2.toggleClass("fs-4");
    });
    $("#boton3").click(function () {
        noticia3.toggleClass("fs-4");
    });
});

// 15
$(document).ready(function () {
    var filasBody = $(".tablaBody td");
    var botonCambio = $("#btnCambio");

    botonCambio.click(function () {
        filasBody.html("-");

    });
});

// 16
$(document).ready(function () {
    var enlace = $("#enlace16");
    var btnFace = $("#face");
    var btnLink = $("#link");
    var btnYou = $("#you");

    btnFace.click(function () {
        enlace.attr("href", "https://www.facebook.com/")
    });
    btnLink.click(function () {
        enlace.attr("href", "https://www.linkedin.com/feed/")
    });

    btnYou.click(function () {
        enlace.attr("href", "https://www.youtube.com/")
    });


});
