'use strict'

let result = confirm("¿Estas seguro de querer continuar?");

if (result) {
    document.writeln(prompt("Ingresa lo que pienses de ti"));
} else {
    document.writeln("Aun no me acostumbro a ser tu novia");
}