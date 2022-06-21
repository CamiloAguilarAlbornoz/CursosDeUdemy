'use strict'

var numberOne = 7;
var numberTwo = 12;
var operation = numberOne * numberTwo;

document.writeln("El resultado de la operación es = " + operation);

// Tipos de Datos
var int_number = 44;
var string_text = "Camilo 'Aguilar' Albornoz";
document.writeln("<br>" + string_text);
var true_or_false_boolean = false;

var numberText = "26";
var sum = (Number(numberText) + 4);
var sum_parseInt = (parseInt(numberText) + 4);
document.writeln("<br>" + true_or_false_boolean);
document.writeln("<br>Numero con cualquier tipo = " + sum);
document.writeln("<br>Numero entero en especifico = " + sum_parseInt);
var div_parseFloat = (parseFloat(numberText) / 4);
document.writeln("<br>Numero Float en especifico = " + div_parseFloat);
document.writeln("<br>" + String(sum) + 10);
document.writeln("<br><br>" + typeof numberText);
document.writeln("<br>" + typeof sum);
document.writeln("<br>" + typeof true_or_false_boolean);
document.writeln("<br>" + typeof div_parseFloat);