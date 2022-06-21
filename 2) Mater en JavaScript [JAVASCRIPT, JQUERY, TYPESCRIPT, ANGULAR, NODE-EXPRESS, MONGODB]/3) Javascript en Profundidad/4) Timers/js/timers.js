'use strict'

window.addEventListener('load', () => {
    
    // TIMERS
    // setInterval se ejecuta siempre
    function interval() {
        return setInterval(() => {
            let header = document.querySelector("h1");
            header.style.fontSize = header.style.fontSize == "50px" ? "20px" : "50px";
        }, 500);
    }

    let time = interval();

    // setTimeout se ejecuta solo una vez
    let timeout = setTimeout(() => {
        document.querySelector("h1").style.border = "2px dashed black";
    }, 3000);

    // DETENER EL TIMER CUANDO SE DE CLICK
    let btnStop = document.querySelector("#btn-stop");
    btnStop.addEventListener('click', () => {
        clearInterval(time);
        alert("DETUVISTE EL BUCLIE");
    });

    // INICIAR EL TIMER CUANDO SE DE CLICK
    let btnStart = document.querySelector("#btn-start");
    btnStart.addEventListener('click', () => {
        interval();
        alert("INICIASTE EL BUCLIE");
    });
    
});