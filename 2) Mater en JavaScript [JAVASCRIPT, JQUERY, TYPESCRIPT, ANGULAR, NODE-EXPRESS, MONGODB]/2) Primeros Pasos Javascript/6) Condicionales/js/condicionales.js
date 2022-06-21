'use strict'

var age = 70;
var nameUser = "Camilo Aguilar";

if (age >= 18) {
    document.writeln(nameUser + " es mayor de edad porque tiene " + age + " años");
    if (age <= 33) {
        document.writeln(" y todavia es milenial");
    } else if (age >= 70) {
        document.writeln(" y ya es anciano");
    } else {
        document.writeln(" y ya no es milenial");
    }
} else {
    document.writeln(nameUser + " es menor de edad porque tiene " + age + " años");
}

var year = 2050;
if (year != 2016) {
    document.writeln("<br>El año no es 2016, es " + year);
}
if (year >= 2000 && year <= 2023) {
    document.writeln("<br>El año se encuentra en el rango y es " + year);
} else {
    document.writeln("<br>El año no se encuentra en el rango y es " + year);
}
if (year == 2011 || (year >= 2021 && year <= 2031)) {
    document.writeln("<br>El año esta registrado y es " + year);
} else {
    document.writeln("<br>Año no registrado");
}