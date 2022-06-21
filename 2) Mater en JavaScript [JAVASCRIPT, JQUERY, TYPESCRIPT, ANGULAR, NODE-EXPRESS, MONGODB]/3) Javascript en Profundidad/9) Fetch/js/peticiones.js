'use strict'

window.addEventListener('load', () => {

    let tableUsers = document.querySelector("#idTableUsers");

    /*
    fetch recibe el link que nos devuelve los JSON y
    los convierte a JSON y los guarda en un array
    */
    getUsers() // Promesa total
        .then(data => data.json()) // Da formato json a los datos
        .then(users => {
            listUsers(users.data); // Muestra los objetos
            return getInfo(); // Nueva Promesa
        })
        .then(she => {
            showProfessor(JSON.parse(she));
            return getJaneth(); // Promesa Janeth
        })
        .then(data => data.json())
        .then(janethObject => {
            showUser(janethObject.data);
        })
        .catch(error => alert("Ha ingreado un link erroneo"));

    // Mostrar she
    function showProfessor(she) {
        document.querySelector("#idNameShe").innerHTML = she.nameShe;
        document.querySelector("#idLastNameShe").innerHTML = she.lastShe;
        document.querySelector("#idPowerShe").innerHTML = she.powerShe;

        document.querySelector(".loadingShe").style.display = 'none';        
    }

    // Crear una promesa desde 0
    function getInfo() {
        let she = {
            nameShe : "Silvana",
            lastShe : "Nieto",
            powerShe : "Romperme el corazon"
        };
        return new Promise((resolve, reject) => {
            let sheString = "";
            setTimeout(() => {
                sheString = JSON.stringify(she);
                if (typeof sheString != 'string' || she == "") {
                    return reject('error');
                }
                return resolve(sheString);
            }, 3000);
        })
    }

    function showUser(user) {
        let avatar = document.createElement("img");
        avatar.src = user.avatar;
        avatar.width = '100';
        document.querySelector("#idTdAvatar").appendChild(avatar);
        document.querySelector("#idTdEmail").innerHTML = user.email;
        document.querySelector("#idTdFirstName").innerHTML = user.first_name;
        document.querySelector("#idTdLastName").innerHTML = user.last_name;

        document.querySelector(".loadingJaneth").style.display = 'none';
    }

    function getJaneth() {
        return fetch('https://reqres.in/api/users/2');
    }

    function getUsers() {
        return fetch('https://reqres.in/api/users');
    }

    function listUsers(userList) {
        userList.map((actualUser, i) => {
            let tr = document.createElement("tr");
            tr.style.border = "3px dashed orange";
            
            let tdAvatar = document.createElement("td");
            let imgAvatar = document.createElement("img");
            tdAvatar.style.border = "3px dashed orange";
            let tdEmail = document.createElement("td");
            tdEmail.style.border = "3px dashed orange";
            let tdFirstName = document.createElement("td");
            tdFirstName.style.border = "3px dashed orange";
            let tdLastName = document.createElement("td");
            tdLastName.style.border = "3px dashed orange";

            imgAvatar.src = actualUser.avatar;
            imgAvatar.width = '100';
            tdAvatar.append(imgAvatar);
            tdEmail.innerHTML = actualUser.email;
            tdFirstName.innerHTML = actualUser.first_name;
            tdLastName.innerHTML = actualUser.last_name;

            tr.append(tdAvatar);
            tr.append(tdEmail);
            tr.append(tdFirstName);
            tr.append(tdLastName);

            tableUsers.append(tr);

            document.querySelector(".loading").style.display = 'none';
        });
    }
});