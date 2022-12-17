/*
Ejemplos de tipos de datos en JavaScript
En JavaScript las variables son dinámicas: no se especifica el tipo de variable */

// Tipo de dato string
let nombre = 'Carlos';
console.log(typeof nombre);

nombre = 10;
console.log(typeof nombre );

// Tipo de dato numérico
let numero = 10.00;
console.log(typeof numero);

// Tipo de dato object
let object = {
	nombre: 'Juan',
	apellido: 'Perez',
	telefono: '55443322',
};
console.log(object);
console.log(typeof object);

//Tipo de dato boolean (true, false):

let bandera = false;
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato function:
function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion);

//Tipo de dato Symbol:
let symbol = Symbol("$$$$lili$$$$");
console.log(symbol);
console.log(typeof symbol);

//Tipo clase es una function:
class Persona{
	constructor(nombre, apellido){
		this.nombre;
		this.apellido;
	}
}
console.log(Persona);
console.log(typeof Persona);

//Tipo undefined:
let x;
console.log(x);
console.log(typeof x);

x = undefined;
console.log(x);
console.log(typeof x);

// null= ausencia de valor
let y = null;
console.log(y);
console.log(typeof y);

//Arrays: Los arreglos en js son de tipo 'object':
let autos = ['BMW','Audi','Volvo'];
console.log(autos);
console.log(typeof autos);

//Empty string: Sigue siendo de tipo string.
var z = '';
console.log(z);
console.log(typeof z);



