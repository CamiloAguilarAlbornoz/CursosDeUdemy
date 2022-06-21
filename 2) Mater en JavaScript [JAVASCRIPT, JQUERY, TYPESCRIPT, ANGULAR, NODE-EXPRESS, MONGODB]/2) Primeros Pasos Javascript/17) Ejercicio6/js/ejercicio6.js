'use strict'

let num = 0;

do {
    num = parseInt(prompt("Ingrese el numero."));
} while(isNaN(num));

alert("El número " +  num + " es " + (num % 2 == 0 ? "par" : "impar"));