/*
Primitive Literal/Variable: doesn't have neither properties nor methods
let x = 10;
console.log(x.length);  // undefined
*/

let person = {      //? person is an Object
    name:'Juan',
    surname: 'Perez',
    email: 'jperez@gmail.com',
    age: 28,
    fullName: function(){   //? Adding a Method to an Object as a property
        return this.name + ' ' + this.surname;
    }
}

// Accessing Object attributes:

console.log(person.name); // Juan
console.log(person.surname);    // 
console.log(person.email); // jperez@gmail.com
console.log(person.age);    // 28
console.log(person.fullName());   // Juan Perez
//..........................................................................
console.log(person['name']);    // Juan
console.log(person['surname']);     // Perez
console.log(person['email']);    // jperez@gmail.com
console.log(person['age']);    // 28
//__________________________________________________________________________

// Print Object:
console.log(person);
/* 
Log:
{ name: 'Juan',
surname: 'Perez',
email: 'jperez@gmail.com',
age: 28 }
*/
console.log(typeof person); // object

//__________________________________________________________________________

// Create a new Object:
let person2 = new Object();
person2.name = 'Carlos';
person2.address = 'Saturn 15';
person2.phone = '55443322';

// Accessing Object attributes:
console.log(person2.phone);     // 55443322
console.log(person2['phone']);  // 55443322

//__________________________________________________________________________
/* For in: The for...in statement iterates over all enumerable string properties 
of an Object (ignoring properties keyed by symbols), including inherited 
enumerable properties.
*/

for(propertyName in person){
    console.log(propertyName);      //  name, surname, email, age, fullName
    console.log(person[propertyName]);      // Juan, Perez, jperez@gmail.com,28,[λ: fullName] 
}

//__________________________________________________________________________
// Adding properties to an Object:
person.phone = '88776655';
console.log(person);
/*
Log:
{ name: 'Juan',
surname: 'Perez',
email: 'jperez@gmail.com',
age: 28,
fullName: [λ: fullName],
phone: '88776655' }
*/

//__________________________________________________________________________
// Delete properties of an Object:
delete person.phone;
console.log(person);
/*
Log:
{ name: 'Juan',
surname: 'Perez',
email: 'jperez@gmail.com',
age: 28,
fullName: [λ: fullName] }
*/