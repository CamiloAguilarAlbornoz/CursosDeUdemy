'use strict'

window.addEventListener('load', () => {

    let formMovies = document.querySelector("#idFormMovies");

    formMovies.addEventListener('submit', () => {
        let titleMovie = document.querySelector("#idTitleMovie");
        titleMovie.addEventListener('focus', () => titleMovie.style.border = "1px solid #767676");
        if (titleMovie.value.length > 0) {
            localStorage.setItem(titleMovie.value, titleMovie.value);
            titleMovie.value = "";
        } else {
            titleMovie.style.border = "2px solid red";
        }
    });

    // ================================================================

    let formDelete = document.querySelector("#idFormDelete");
    formDelete.addEventListener('submit', () => {
        let titleDeleteMovie = document.querySelector("#idTitleDeleteMovie");
        titleDeleteMovie.addEventListener('focus', () => titleDeleteMovie.style.border = "1px solid #767676");
        if (titleDeleteMovie.value.length > 0) {
            localStorage.removeItem(titleDeleteMovie.value);
            titleDeleteMovie.value = "";
        } else {
            titleDeleteMovie.style.border = "2px solid red";
        }
    });
    
    let table = document.querySelector("#idTableShowMovies");
    for (let index in localStorage) {
        if (typeof localStorage[index] == 'string') {
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            td.innerHTML = localStorage[index];
            tr.appendChild(td);
            table.appendChild(tr);
        }
    }
});