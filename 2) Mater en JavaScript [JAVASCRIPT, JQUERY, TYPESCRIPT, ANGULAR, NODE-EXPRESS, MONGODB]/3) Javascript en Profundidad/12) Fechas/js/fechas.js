'use strict'

window.addEventListener('load', () => {

    // FECHAS

    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dayFromMonth = date.getDate();
    let hours = date.getHours();

    let textHour = `
        Año : ${year}
        Mes : ${month}
        Día del més : ${dayFromMonth}
        La hora es : ${hours}
    `;
    console.log(textHour);

    // FUNCIONES MATEMATICAS
    console.log(Math.ceil(Math.random() * 10000000));
});