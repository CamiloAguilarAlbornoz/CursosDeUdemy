'use strict'

// CONSEGUIR ELEMENTOS CON DETERMINADO ID
//let mi_caja = document.getElementById("mi-caja");
let mi_caja = document.querySelector("#mi-caja");
mi_caja.style.background = "red";

// CONSEGUIR ELEMENTOS POR SU ETIQUETA
let allDivs = document.getElementsByTagName("div");
console.log(allDivs);

console.log(allDivs[2].textContent);
allDivs[3].style.border = "2px dashed black";


for (let index in allDivs) {
    let element = allDivs[index];
    if (typeof element.textContent == "string") {
        let paragraph = document.createElement("p");
        let text = document.createTextNode(element.textContent);
        paragraph.append(text);
        document.querySelector("#my-section").append(paragraph);    
    }
}
document.querySelector("#my-section").style.border = "2px dashed black";

let redDivs = document.getElementsByClassName("red");

for (let index in redDivs) {
    let redDiv = redDivs[index];
    if (redDiv.className == "red") {
        redDiv.style.background = "blue";
    }
}

let idTitle = document.querySelector("#titulo");
let classRed = document.querySelector("div.red");

console.log(idTitle);
console.log(classRed);