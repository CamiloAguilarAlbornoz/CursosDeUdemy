'use strict'

console.log("Altura = ".concat(window.innerHeight));
console.log("Anchura = ".concat(window.innerWidth));
console.log("Anchura Pantalla = ".concat(screen.width));
console.log("Altura Pantalla = ".concat(screen.height));
console.log("URL Aactual = ".concat(window.location.href));

function redirect(url) {
    window.location.href = url;
}

function openWindow(url) {
    window.open(url, "", "width = 400, height= 200");
}

//redirect("https://google.com");

openWindow("https://google.com");