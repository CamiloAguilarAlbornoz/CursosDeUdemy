'use strict'

window.addEventListener('load', () => {

    // EVENTOS DEL RATON

    let btn_presioname = document.querySelector("#btn-presioname");
    let input_name = document.querySelector("#campo-nombre");

    // CLICK
    btn_presioname.addEventListener('click', () => changeColor());

    // MOUSE OVER
    btn_presioname.addEventListener('mouseover', () =>
        btn_presioname.style.border = "5px dashed blue"
    );

    // MOUSE OUT
    btn_presioname.addEventListener('mouseout', () =>
        btn_presioname.style.border = "2px solid orange"
    );

    // FOCUS
    input_name.addEventListener('focus', () =>
        console.log("[focus] Estas dentro del input")
    );

    // BLUR
    input_name.addEventListener('blur', () =>
        console.log("[blur] Estas fuera del input")
    );

    // KEY DOWN
    input_name.addEventListener('keydown', (event) => {
        let teclaCapturada = String.fromCharCode(event.keyCode);
        console.log("[keydown] Estas pulsando esta tecla", teclaCapturada);
    });

    // KEY PRESS
    input_name.addEventListener('keypress', (event) => {
        let teclaCapturada = String.fromCharCode(event.keyCode);
        console.log("[keypress] Pulso la tecla", teclaCapturada);
    });

    // KEY UP
    input_name.addEventListener('keyup', (event) => {
        let teclaCapturada = String.fromCharCode(event.keyCode);
        console.log("[keyup] Pulso la tecla", teclaCapturada);
    });

    function changeColor() {
        let background = btn_presioname.style.background;
        if (background == "green") {
            btn_presioname.style.background = "red";
        } else {
            btn_presioname.style.background = "green";
        }
    }
});