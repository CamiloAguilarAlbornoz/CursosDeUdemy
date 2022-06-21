'use strict'

$(() => {

    reloadLinks();

    $('#addButton')
        .removeAttr('disabled') // ELIMINA UN ATRIBUTO DE UN BOTON
        .click(function () {
        let linkInput = $('#addLink');
        $('#menu').append(`<li><a href = "${linkInput.val()}"></a></li>`);
        //$('#menu').prepend(`<li><a href = "${$('#addLink').val()}"></a></li>`); // AÑADE AL PRINCIPIO DE LA LISTA
        //$('#menu').before(`<li><a href = "${$('#addLink').val()}"></a></li>`); // AÑADE ANTES DE LA LISTA SELECCIONADA, O SEA MENU
        linkInput.val('');
        reloadLinks();
    });
});

function reloadLinks() {
    $('a').each(function () { 
        let that = $(this);
        let link = that.attr('href');
        that.attr('target', '_blank'); // Para que al dar click en un link, lo abra en una pestaña nueva
        that.text(link);
    });
}