'use strict'

let theName = prompt("Ingresa tu nombre");
let theLastName = prompt("Ingresa tu apellido");

let plantillaJavascript = `
    <table border = "2">
        <tr>
           <th>Nombre</th> 
           <th>Apellido</th> 
        </tr>
        <tr>
           <td>${theName}</td> 
           <td>${theLastName}</td> 
        </tr>
    </table>
    `;
document.write(plantillaJavascript);