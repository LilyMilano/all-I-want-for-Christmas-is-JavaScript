//Concatenación de cadenas:

let nombre = 'Juan';
let apellido = 'Perez';
let nombreCompleto = nombre + ' ' + apellido;

console.log(nombreCompleto);

// Sin almacenar los parámetros en variables:
let nombreCompleto2 = 'Carlos' + ' ' + 'Lara';
console.log(nombreCompleto2);

// En JavaScript se evalúa de izquierda a derecha, así:

let x = nombre + 2 + 4;
console.log(x);  // Juan24

x = nombre + (2 + 4);
console.log(x);  // Juan6

x = 2 + 4 + nombre;
console.log(x); // 6Juan
console.log(typeof x); // string