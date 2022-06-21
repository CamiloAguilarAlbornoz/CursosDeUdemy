'use strict'

let result = 0;
let count = 0;
let num = 0;

do {
    num = parseInt(prompt("Introduce números hasta que ingreses uno negativo"));
    if (isNaN(num)) {
        num = 0;
    } else if (num >= 0) {
        result += num;
        count++;
    } else {
        break;
    }
} while(true);

alert("La suma total es = " + result + "\nLa media es = " + (result / count));