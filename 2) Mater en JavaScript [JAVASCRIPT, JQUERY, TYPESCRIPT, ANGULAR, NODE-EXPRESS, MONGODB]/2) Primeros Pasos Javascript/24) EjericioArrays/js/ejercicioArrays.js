'use strict'

let numberList = Array();

for (let i = 0; i < 6; i++) {
    numberList.push(getNumber());
}

// NUMEROS INGRESADOS
show("Números Ingresados");

// NUMEROS ORDENADOS
numberList.sort((numberOne, numberTwo) =>  numberOne - numberTwo);
show("Números Ordenados");

// NUMEROS INVERTIDOS
numberList.reverse((numberOne, numberTwo) =>  numberOne - numberTwo);
show("Números Invertidos");

// CANTIDAD DE ELEMENTOS DEL ARRAY
document.write(`<h2>El array tiene ${numberList.length} elementos.</h2><hr/>`);
console.log(`El array tiene ${numberList.length} elementos.`);

// BUSQUEDA DE UN VALOR INTRODUCIDO POR EL USUARIO,
// SABER SI EXISTE Y LA POSICIÓN
findNumber();

function findNumber() {
    let number = getNumber();
    let index = numberList.indexOf(number);
    let exist = index != -1 ? `
            El número existe y está en la posición 
            ${index}` : `El número no existe`;
    document.write(`<h2>${exist}</h2>`);
    console.log(exist);
}

function show(message) {
    document.write(`<h2>${message}</h2>
                    <table border = "2">
                    <tr>
                        <th>Posición</th>
                        <th>Numero</th>
                    </tr>`);
    console.log(message);
    numberList.forEach((number, position) => {
        document.write(`<tr>
                            <td>${position}</td>
                            <td>${number}</td>
                        </tr>`);
        console.log(position.toString().concat(". "), number);
    });
    document.write(`</table><hr/>`);
}

function getNumber() {
    let number = 0;
    do {
        number = parseInt(prompt("Ingrese un número."));
    } while (isNaN(number));
    return number;
}