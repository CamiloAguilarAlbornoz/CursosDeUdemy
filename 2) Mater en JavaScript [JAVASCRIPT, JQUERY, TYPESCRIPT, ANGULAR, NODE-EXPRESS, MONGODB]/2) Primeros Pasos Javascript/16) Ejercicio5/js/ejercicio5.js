'use strict'

let num = 0;

do {
    num = parseInt(prompt("Ingrese el numero."));
} while(isNaN(num));

for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        document.writeln("Divisor actual de " + num + " : " + i + "<br>");
    }
}