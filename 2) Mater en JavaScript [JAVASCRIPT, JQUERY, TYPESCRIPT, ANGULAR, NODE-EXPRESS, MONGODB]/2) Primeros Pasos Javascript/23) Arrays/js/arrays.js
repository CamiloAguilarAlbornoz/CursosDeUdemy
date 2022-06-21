'use strict'

let movies = Array("X-MEN", "X-MEN 2", "X-MEN The Last Stand", "The Wolverine", "Logan");
let index = 0;
let list = "";
do {
    movies.forEach((actual, position) => {
        list += position + ". " + actual + "\n";
    });
    index = parseInt(prompt(list.concat("\nIngresa el indice que deseas eliminar.")));
} while(index >= movies.length && index < 0);

movies.splice(index, 1);
movies.sort();
document.write(`<h2>Ordenado del menor a mayor</h2><ol>`);
movies.forEach((actual) => {
    document.write(`<li>${actual}</li><br/>`);
});
document.write(`</ol>`);
// INVERSO
movies.reverse();
document.write(`<h2>Ordenado del mayor a menor</h2><ol>`);
for (let actualIndex in movies) {
    document.write(`<li>${movies[actualIndex]}</li><br/>`);   
}
document.write(`</ol>`);


let textArray = movies.join(",");
document.write(`<h2>Array como String</h2>${textArray}`);

// BUSQUEDA
let movieToSearch = prompt(list.concat("\nIngrese la pelicula que desea buscar."));
let movieFind = movies.find((movieToSearch) => movieToSearch == "X-MEN 2");
let movieIndex = movies.findIndex((movieToSearch) => movieToSearch == "X-MEN 2");
let movieSome = movies.some((movieToSearch) => movieToSearch == "X-MEN 2");

alert(movieFind.concat(`\nIndice = ${movieIndex}\nExiste? = ${movieSome}`));