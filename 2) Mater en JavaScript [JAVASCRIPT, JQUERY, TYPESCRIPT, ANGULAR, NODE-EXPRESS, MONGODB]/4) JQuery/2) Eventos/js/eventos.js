'use strict'

$(() => {

    let idBox = $('#box');
    // MOUSEOVER cuando entra en mouse
    idBox.mouseover(backgroundRed);

    // MOUSEOUT cuando sale el mouse
    idBox.mouseout(backgroundGreen);

    // HOVER parecido al de css
    let secondBox = $('#secondBox');
    secondBox.hover(backgroundRed, backgroundGreen);

    // CLICK, Doble Click
    idBox.click(function() {
        $(this)
            .css('background', 'blue')
            .css('color', 'white');
    });

    secondBox.dblclick(function() {
        $(this)
            .css('background', 'pink')
            .css('color', 'yellow');
    });

    // FOCUS y BLUR
    let inputIdName = $('#id_name');
    inputIdName.focus(function() {
        $(this).css('border', '2px solid green');
    });

    let divData = $('#idData');

    inputIdName.blur(function() {
        $(this).css('border', '2px solid #ccc');
        divData.text($(this).val()).show();
    });

    // MOUSEDOWN
    divData.mousedown(function () { 
        $(this).css('border-color', 'gray');
    });

    // MOUSEUP
    divData.mouseup(function () { 
        $(this).css('border-color', 'black');
    });

    let ball = $('#idFollowMe');

    // MOUSEMOVE
    $(document).mousemove(function (e) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        $('body').css('cursor', 'none');
        ball
            .css('left', e.clientX)
            .css('top', e.clientY);
    });
    
    // ================================ FUNCIONES ===============================
    function backgroundRed() {
        $(this).css('background', 'red');
    }

    function backgroundGreen() {
        $(this).css('background', 'green');
    }
});