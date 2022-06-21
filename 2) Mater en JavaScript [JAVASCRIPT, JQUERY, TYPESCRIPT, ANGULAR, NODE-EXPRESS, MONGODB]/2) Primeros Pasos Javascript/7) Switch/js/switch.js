'use strict'

var age = 100;
var showText = "";

switch (age) {
    case 18: 
    showText = "Acabas de cumplir la mayoria de edad.";
    break;
    case 25: 
    showText = "Ya eres un adulto.";
    break;
    case 40: 
    showText = "Crisis de los 40.";
    break;
    case 75: 
    showText = "Eres ya un anciano.";
    break;
    default:
    showText = "Tu edad es neutra";
    break;
}
document.writeln(showText);