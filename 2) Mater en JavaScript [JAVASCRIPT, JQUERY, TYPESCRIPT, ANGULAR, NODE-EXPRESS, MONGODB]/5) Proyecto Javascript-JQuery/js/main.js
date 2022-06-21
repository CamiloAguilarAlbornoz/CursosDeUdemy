'use strict'

$(() => {

    let stylesSheetColor = $('#idLinkTheme');

    // Colocar el tema que esté en localstorage
    let initialTheme = localStorage.getItem('theme');
    if (initialTheme != null) {
        stylesSheetColor.attr('href', initialTheme);
    }

    // SELECTOR DE TEMA
    $('#idDivToGreen').click(function () {
        stylesSheetColor.attr('href', './css/green.css');
        localStorage.setItem('theme', './css/green.css');
    });

    $('#idDivToBlue').click(function () {
        stylesSheetColor.attr('href', './css/blue.css');
        localStorage.setItem('theme', './css/blue.css');
    });

    $('#idDivToRed').click(function () {
        stylesSheetColor.attr('href', './css/red.css');
        localStorage.setItem('theme', './css/red.css');
    });

    // Boton ir arriba
    $('.classAUp').click(function (e) { 
        e.preventDefault(e);
        $('html, body').animate({
            scrollTop : 0
        }, 500);
        return false;
    });

    // Login falso
    $('#idDivLogin form').submit(function () {
        let formName = $('#idInputName').val();
        localStorage.setItem('formName', formName);
    });
    let formNameToShow = localStorage.getItem('formName');
    if (formNameToShow != null && formNameToShow != undefined) {
        let divAboutP = $('#idDivAbout p');
        divAboutP.html(`<br><strong>Bienvenido ${formNameToShow}</strong>`);
        divAboutP.append(`<a href="#" id="idALogout">Cerrar sesión</a>`);
        $('#idDivLogin').hide();

        $('#idALogout').click(function () {
            localStorage.clear();
            location.reload();
        });
    }
});