'use strict'

$(() => {

    // LOAD
    //$('#idDivData').load('https://reqres.in/'); // INCRUSTA EN EL div todo lo obtenido en el link puesto en load

    // Peticiones Get
    $.get("https://reqres.in/api/users", {page: 2},
        function (response) {
            response.data.forEach((element, index) => {
                $('#idDivData').append(`<p>${element.first_name} ${element.last_name}</p>`);
            });
        }
    );

    // Peticiones Post
    $('#idForm').submit(function(e) { 
        e.preventDefault(); // para que no me redirija
        let user = {
            first_name : $('input[name = "first_name"]').val(),
            web : $('input[name = "web"]').val()
        }
        console.log(user); // Los datos obtenidos del formulario
        $.post($(this).attr('action'), user,
            function (response) {
                console.log(response); // Los datos de response
            }
        ).done(() => alert('usuario añadido correctamente'));
        return false;
    });

    // Metodo ajax
    $('#idFormAjax').submit(function(e) {
        e.preventDefault(); // para que no me redirija
        let user = {
            first_name : $('input[id = "idFirstName"]').val(),
            web : $('input[id = "idWeb"]').val()
        }
        console.log(user); // Los datos obtenidos del formulario
        $.ajax({
            type: "post",
            url: $(this).attr('action'),
            data: user,
            beforeSend : function() {
                console.log('enviando usuario...');
            },
            success: function (response) {
                console.log(response);// Los datos de response
            },
            error : function() {
                console.log('Ha ocurrido un error...');
            },
            timeout: 2000
        });
        return false;
    });
});