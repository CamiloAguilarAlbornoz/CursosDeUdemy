'use strict'

let num1 = 0;
let num2 = 0;

do {
    num1 = parseInt(prompt("Ingrese un número"));
    num2 = parseInt(prompt("Ingrese otro número"));
} while((num1 <= 0 && num2 <= 0) || (isNaN(num1) && isNaN(num2)));

if (num1 == num2) {
    alert("Los números son iguales : " + num1 + " y " + num2 + ".");
} else if (num1 > num2) {
    alert("El primer número es mayor : " + num1 + " y " + num2 + ".");
} else if (num1 < num2) {
    alert("El segundo número es mayor : " + num1 + " y " + num2 + ".");
} else {
    alert("Introduzca números correctos.");
}