'use strict'

$(() => {

    let divBox = $('#idDivBox');
    let divBox2 = $('#idDivBox2');
    let divBox3 = $('#idDivBox3');
    let btnShow = $('#idMostrar');
    let btnHide = $('#idOcultar');
    btnShow.hide();

    btnHide.click(function () {
        //divBox.fadeOut('slow'); // SE PUEDE CON MÁS VELOCIDADES
        divBox.slideUp('slow', function() {
            console.log('CAJA ESCONDIDA');
        });
        btnShow.show();
        btnHide.hide();
    });

    btnShow.click(function () {
        //divBox.fadeIn('slow'); // hace aparecer el elemento divBox, fadeOut sirve para esconder
        divBox.fadeTo('slow', 0.4); // jugando con la opacidad, o sea el numero, puede determinarce que tan opaco se vea el boton
        btnShow.hide();
        btnHide.show();
    });

    // PARA EL BOTON TODO EN UNO
    $('#idTodoEnUno').click(function () {
        divBox2.toggle('fast'); // HACE LAS DOS COSAS CON EL MISMO BOTON
        //divBox.fadeToggle('fast'); // IGUAL QUE USAR fade
        //divBox.slideToggle('fast'); // Para dar la animacion de que el elemento divBox se recoge hacia arriba
    });

    // ANIMACIONES
    $('#idAnimame').click(function () {
        divBox3
            .animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '150px'
            }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '80px'
            }, 'slow')
            .animate({
                marginRight : '0px',
                marginLeft: '0px'
            }, 'slow')
            .animate({
                borderRadius : '100px',
                marginTop: '0px'
            }, 'slow')
            .animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '150px'
            });
    })
});