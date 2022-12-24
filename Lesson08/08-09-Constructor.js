/*
The Constructor Method is a special method of a class for creating and initializing an object instance of that class.
*/

//TODO: Person Object Constructor Function:
function Person(name, surname, email){
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.fullName = function(){
        return this.name + ' ' + this.surname;
    }
};

let father = new Person( 'Juan', 'Perez', 'jperez@gmail.com');
console.log(father);    //  Person { name: 'Juan', surname: 'Perez', email: 'jperez@gmail.com' }
console.log(father.fullName());   //  Juan Perez

let mother = new Person('Laura', 'Quintero', 'lquintero@gmail.com');
console.log(mother);    //  Person { name: 'Laura', surname: 'Quintero', email: 'lquintero@gmail.com' }
console.log(mother.fullName());   //  Laura Quintero

// Modifying father Object:
father.name = 'Carlos';
console.log(father);    //  Person { name: 'Carlos', surname: 'Perez', email: 'jperez@gmail.com' }

// Mother Object remains the same:
console.log(mother);    //   Person { name: 'Laura', surname: 'Quintero', email: 'lquintero@gmail.com' }

let myObject = new Object();    //!Formal sintaxis
let myObject2 = {};    // Another but informal way to create Objects

let myString1 = new String('Hola');     // Not used
let myString2 = 'Hola';

let myNumber = new Number(1);       // Not used
let myNumber2 = 1;

let myBoolean1 = new Boolean(false);        // Not used
let myBoolean2 = false;

let myArray1 = new Array();
let myArray2 = [];      // Simplified syntax

let myFunction1 = new Function();
let myFunction2 = function(){};     // Simplified syntax

