'use strict'

$(() => {

    $('form input[name="lblBirthDate"]').datepicker({
        dateFormat : 'dd-mm-yy'
    });

    // ERRORES
    $.validate({
        lang: 'es',
        errorMessagePosition: 'top',
        scrollToTopOnError: true
    });
});