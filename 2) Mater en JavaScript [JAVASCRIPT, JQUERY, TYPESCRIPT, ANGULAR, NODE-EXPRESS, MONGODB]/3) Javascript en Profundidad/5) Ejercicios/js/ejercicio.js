'use strict'

window.addEventListener('load', () => {

    let formDatos = document.querySelector("#form-datos");

    formDatos.addEventListener('submit', () => {
        let inputNamePerson = document.querySelector("#input-nombre");
        let inputLastNamePerson = document.querySelector("#input-apellido");
        let inputAgePerson = document.querySelector("#input-edad");
        inputNamePerson.addEventListener('focus', () => {
            inputNamePerson.style.border = "1px solid #767676";
            inputLastNamePerson.style.border = "1px solid #767676";
            inputAgePerson.style.border = "1px solid #767676";
        });
        inputLastNamePerson.addEventListener('focus', () => {
            inputNamePerson.style.border = "1px solid #767676";
            inputLastNamePerson.style.border = "1px solid #767676";
            inputAgePerson.style.border = "1px solid #767676";
        });
        inputAgePerson.addEventListener('focus', () => {
            inputNamePerson.style.border = "1px solid #767676";
            inputLastNamePerson.style.border = "1px solid #767676";
            inputAgePerson.style.border = "1px solid #767676";
        });
        showInScreen(inputNamePerson, inputLastNamePerson, inputAgePerson);
    });

    function showInScreen(inputNamePerson, inputLastNamePerson, inputAgePerson) {
        let namePerson = inputNamePerson.value;
        let lastNamePerson = inputLastNamePerson.value;
        let agePerson = inputAgePerson.value;
        if (namePerson != "") {
            if (lastNamePerson != "") {
                if (agePerson != "" && !isNaN(agePerson)) {
                    let table = document.querySelector("#tab-show");
                    let tr = document.createElement("tr");
                    let tdNamePerson = document.createElement("td");
                    let tdLastNamePerson = document.createElement("td");
                    let tdAgePerson = document.createElement("td");
                    tdNamePerson.innerHTML = namePerson;
                    tdLastNamePerson.innerHTML = lastNamePerson;
                    tdAgePerson.innerHTML = agePerson;
                    tr.appendChild(tdNamePerson);
                    tr.appendChild(tdLastNamePerson);
                    tr.appendChild(tdAgePerson);
                    table.appendChild(tr);
                    inputNamePerson.value = "";
                    inputLastNamePerson.value = "";
                    inputAgePerson.value = "";
                } else {
                    inputAgePerson.style.border = "1px solid red";
                }
            } else {
                inputLastNamePerson.style.border = "1px solid red";
                if (agePerson == "" || isNaN(agePerson)) {
                    inputAgePerson.style.border = "1px solid red";
                }
            }
        } else {
            inputNamePerson.style.border = "1px solid red";
            if (lastNamePerson == "") {
                inputLastNamePerson.style.border = "1px solid red";
                if (agePerson == "" || isNaN(agePerson)) {
                    inputAgePerson.style.border = "1px solid red";
                }
            } else {
                if (agePerson == "" || isNaN(agePerson)) {
                    inputAgePerson.style.border = "1px solid red";
                }
            }
        }
    }
});