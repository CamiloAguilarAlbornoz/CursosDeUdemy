'use strict'

$(() => {

    // SELECTOR DE ID
    $("#idRed")
        .css("background", "red")
        .css("color", "white");
    $("#idYellow")
        .css("background", "yellow")
        .css("color", "green");
    $("#idGreen")
        .css("background", "green")
        .css("color", "blue");
    
    // SELECTOR DE CLASES
    $(".zebra").css("padding", "50px");

    $('.sin_borde').click(function() {
        $(this).addClass('zebra');
    });
    
    // SELECTOR DE ETIQUETA
    let parrafo = $("p").css('cursor' , 'pointer');

    parrafo.click((function() {
        let that = $(this);
        if (!that.hasClass('big')) {
            that.addClass('big');
        } else {
            that.removeClass('big');
        }
    }));

    // SELECTOR DE ATRIBUTO
    $('[title = "Google"]').css("background", "#ccc");
    $('[title = "Facebook"]').css("background", "blue");

    // OTROS
    //$('p, a').addClass('marginTop');
    //let busqueda = $('#box').find('.resaltado');
    //let busqueda = $('#box .resaltado'); TAMBIEN SIRVE
    let busqueda = $('#box').find('.resaltado'); // BUSCAR resaltado que esta en box
    let busqueda2 = $('#idElemento2').parent().parent().find('.resaltado'); // SALE UNO O MAS NIVEL con parent
    console.log(busqueda2);
});