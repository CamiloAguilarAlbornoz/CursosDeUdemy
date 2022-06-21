'use strict'

$(() => {

    setInterval(() => {
        let clock = moment().format('h:mm:ss');
        $('#idDivClock').html(clock);
    }, 1000);
});