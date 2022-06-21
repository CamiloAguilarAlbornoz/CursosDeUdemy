'use strict'

window.addEventListener('load', () => {

    let movieList = Array();
    let formMovies = document.querySelector("#id_form_peliculas");
    let table = document.querySelector("#movieTab");
    formMovies.addEventListener('submit', () => {
        let newTitle = document.querySelector("#id_titulo_pelicula");
        let newYear = document.querySelector("#id_anio_estreno_pelicula");
        let newCountry = document.querySelector("#id_pais_pelicula");
        movieList.push({
            titleMovie : newTitle.value,
            yearMovie : newYear.value,
            countryMovie : newCountry.value
        });
        showMovieList();
        newTitle.value = "";
        newYear.value = "";
        newCountry.value = "";
    });
    
    function showMovieList() {
        let movie = movieList[movieList.length - 1];
        let tr = document.createElement("tr");
        let tdNumber = document.createElement("td");
        let tdTitle = document.createElement("td");
        let tdYear = document.createElement("td");
        let tdCountry = document.createElement("td");
        tdNumber.innerHTML = movieList.length;
        tdTitle.innerHTML = movie.titleMovie;
        tdYear.innerHTML = movie.yearMovie;
        tdCountry.innerHTML = movie.countryMovie;
        tr.appendChild(tdNumber);
        tr.appendChild(tdTitle);
        tr.appendChild(tdYear);
        tr.appendChild(tdCountry);
        table.appendChild(tr);
    }
});