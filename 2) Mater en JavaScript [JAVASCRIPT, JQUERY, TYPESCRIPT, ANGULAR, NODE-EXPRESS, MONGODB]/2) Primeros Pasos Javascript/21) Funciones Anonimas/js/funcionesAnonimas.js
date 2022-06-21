'use strict'

//FUNCIONES ANONIMAS 
let pelicula = function(movie) {
    let title = " La película es : ";
    return  title.concat(movie);
} 

let mov = pelicula("The Silence of the Lambs. Silence ");

document.writeln(mov);
document.writeln("<br/>La primer aparecion de la palabra esta en la posición : " + mov.indexOf("Silence"));
document.writeln("<br/>La ultima aparecion de la palabra esta hasta la posición : " + mov.lastIndexOf("Silence"));
document.writeln("<br/>La primer aparecion de la palabra esta en la posición : " + mov.search("Silence"));
document.writeln("<br/>Todas las palabras : " + mov.match(/Silence/g)); // TODAS LAS MENCIONES A LA PABRA
document.writeln("<br/>Texto indicado : " + mov.substring(14,4)); // 14 letras desde el caracter 5.
document.writeln("<br/>Inicia con : " + mov.startsWith("La"));
document.writeln("<br/>Termina con : " + mov.endsWith("La"));
document.writeln("<br/>Incluye la palabra : " + mov.includes("of"));
let oldWord = prompt(mov + "\n\nIngrese la palabra que desea reemplazar");
let newWorld = prompt(mov + "\n\nIngrese la nueva palabra");
document.writeln("<br/>La nueva película es : " + mov.replace(oldWord, newWorld));
document.writeln("<br/>Conservamos desde el caracter 17 al 42 : " + mov.slice(17, 42));
document.writeln("<br/>Eliminamos los espacios : " + mov.trim()); // ELIMINA ESPACIOS DE ADELANTE Y ATRAS

document.writeln("<h2>TOP PELICULAS UCM</h2>");

// FLECHA
let topUCM = [
    "Captain America And The Winter Soldier",
    "Avengers : Infinity War",
    "BlackPanther",
    "Guardians of the Galaxy Volume 1",
    "Avengers",
    "Iron Man",
    "Avengers Endgame",
    "Doctor Strange",
    "Captain America : The First Avenger",
    "Captain America : Civil War",
    "Spider-Man : No way Home",
    "Spider-Man : Homecoming",
    "Avengers : Age of Ultron",
    "Guardians of the Galaxy Volume 2",
    "Thor Ragnarok",
    "Ant-Man",
    "Thor",
    "The Incredible Hulk",
    "Spider-Man : Far From Home",
    "Ant-Man And the Wasp",
    "Iron Man 2",
    "Thor : The Dark World",
    "Iron Man 3",
    "Capitana Marvel"
];

topUCM.forEach((movie, actualPosition) => {
    document.writeln((actualPosition + 1 ) + ". " + movie + "<br/>");
});

// CALLBACK

let topSpiderman = [
    "Spider-Man : Into the Spider-Verse",
    "Spider-Man 2",
    "Spider-Man",
    "Spider-Man : No Way Home",
    "Spider-Man : Homecoming",
    "The Amazing Spider-Man",
    "Spider-Man 3",
    "The Amazing Spider-Man : The Rise of Electro",
    "Spider-Man : Far From Home"
];

printTopSpiderMan(function(moviesList) {
    for (let i = 0; i < moviesList.length; i++) {
        document.writeln((i+1) + ". " + moviesList[i] + "<br/>");
    }
});

function printTopSpiderMan(printMovies) {
    document.writeln("<h2>TOP SPIDER-MAN</h2>");
    printMovies(topSpiderman);
}