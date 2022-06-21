'use strict'

calculator();

function calculator() {
    let numOne = 0;
    let numTwo = 0;
    let option = 0;
    do {
        option = parseInt(prompt("1) Sumar \n2) Restar \n3) Multiplicar \n4) Dividir \n5) Modulo \n\n0) Salir"));
        switch(option) {
            case 1 : sum(numOne, numTwo);
            break;
            case 2 : rest(numOne, numTwo);
            break;
            case 3 : mult(numOne, numTwo);
            break;
            case 4 : div(numOne, numTwo);
            break;
            case 5 : module(numOne, numTwo);
            break;
            case 0 :
            break;
            default :
            alert("OPCIÓN NO EXISTENTE");
            break;
        }
    } while(option != 0);
    document.writeln("LA CALCULADORA TERMINO SU EJECUCIÓN<br/>HASTA LA VISTA, BABY.");
}

function getNumber(num1 = 4, num2 = 5) {
    if (num1 == 4 && num2 == 5) {
        do {
            numOne = parseInt(prompt("Ingrese el primer numero."));
            numTwo = parseInt(prompt("Ingrese el segundo numero."));
        } while(isNaN(numOne) && isNaN(numTwo));
    } else {
        numOne = num1;
        numTwo = num2;
    }
}

function sum(numOne, numTwo) {
    getNumber(numOne, numTwo);
    alert("La suma de " + numOne + " con " + numTwo + " es = " + (numOne + numTwo));
}

function rest(numOne, numTwo) {
    getNumber(numOne, numTwo);
    alert("La resta de " + numOne + " con " + numTwo + " es = " + (numOne - numTwo));
}

function mult(numOne, numTwo) {
    getNumber(numOne, numTwo, 6, 7);
    alert("La multiplicacion de " + numOne + " con " + numTwo + " es = " + (numOne * numTwo));
}

function div() {
    getNumber(numOne, numTwo, 4, 2);
    alert("La division de " + numOne + " con " + numTwo + " es = " + (numOne / numTwo));
}

function module() {
    getNumber(numOne, numTwo);
    alert("El modulo de " + numOne + " con " + numTwo + " es = " + (numOne % numTwo));
}

