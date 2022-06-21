'use strict'

window.addEventListener('load', () => {

    try {
        let year = 2022;
        alert(year);
        console.log(decodeURIComponent("https://v&%torroblesweb.es")); // Link erroneo
    } catch (error) {
        alert("Ha ocurrido un error en el codigo");
    }
});