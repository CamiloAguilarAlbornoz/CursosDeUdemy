'use strict'

// REST
function listadoFrutas(fruta1, fruta2, ...todasLasFrutas) {
    document.writeln("Fruta 1 : " + fruta1 + "<br/>");
    document.writeln("Fruta 2 : " + fruta2 + "<br/>");
    let count = 3;
    for(let i = 0; i < todasLasFrutas.length; i++) {
        document.writeln("Fruta " + count + " : " + todasLasFrutas[i] + "<br/>");
        count++;
    }
}
listadoFrutas("Manzana", "Papaya", "Durazno", "Cerezas", "Arepa");
document.writeln("<br/>");
// SPREAD
var demas = ["Durazno", "Cerezas", "Mi Platano"];
listadoFrutas("Mango", "Uba", ...demas);