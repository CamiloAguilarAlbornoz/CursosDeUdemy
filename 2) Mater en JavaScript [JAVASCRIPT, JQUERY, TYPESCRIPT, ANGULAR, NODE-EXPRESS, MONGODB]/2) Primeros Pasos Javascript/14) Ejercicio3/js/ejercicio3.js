'use strict'

let num1 = 0;
let num2 = 0;
let i = 0;
let final = 0;

do {
    num1 = parseInt(prompt("Ingrese el primer numero."));
    num2 = parseInt(prompt("Ingrese el segundo numero."));
} while(isNaN(num1) && isNaN(num2));
if (num1 > num2) {
    i = num2;
    final = num1;
} else if (num2 > num1){
    i = num1;
    final = num2;
} else {
    alert("Los números son iguales");
}
while(i <= final) {
    document.writeln("Actual = " + i + "<br>");
    i++;
}