'use strict'

let num = 0;

do {
    num = parseInt(prompt("Ingrese el numero."));
} while(isNaN(num));

for (let i = 1; i <= num; i++) {
    document.writeln("<h2>Tabla del " + i + "</h2>");
    for (let j = 1; j <= 10; j++) {
        document.writeln(i + " x " + j + " = " + (j * i) + "<br>");
    }
    document.writeln("<hr>");
}