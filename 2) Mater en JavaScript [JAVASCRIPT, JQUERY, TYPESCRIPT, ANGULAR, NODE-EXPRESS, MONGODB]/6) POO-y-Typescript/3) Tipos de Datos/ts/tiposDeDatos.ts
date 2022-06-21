// String
let chain : string = 'Hola';

// Number
let age : number = 24;

// Booblean
let trueOrFalse : boolean = true;

// Any = Elimina el tipado fuerte
let anyValue : any = 'adsfsdf';
anyValue = 123;

// Arrays
let languages : Array<string> = ['Javascript', 'Typescript', 'Java', 'Kotlin', 'Swift'];
let years : number[] = [1, 2, 3, 4, 5];

// Variables con varios tipos de datos
let another : string | number = 'holaaaa';
alert(`
    ${chain}
    ${age}
    ${trueOrFalse}
    ${anyValue}
    ${languages}
    ${years}
    `);

alert(another);
another = 12;
alert(another);

// Mis tipos de datos
type alphanumeric = string | number;

let test : alphanumeric = 123;
alert(test);
test = 'jfjgjgjgjgjg';
alert(test);