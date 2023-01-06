'use strict';

function myFunction() {
	console.log('Greetings from Venezuela'); //  Greetings from Venezuela
}
myFunction(); // Calling the function

// _________________________________________________________________________
//? Arrow Function:

const myArrowFunction = () => {
	console.log('Greetings from Maturín, Venezuela'); //  Greetings from Maturín, Venezuela
};
myArrowFunction();

// ........................................................................
// If the function body is a single line:

const myArrowFunction1 = () => console.log('Greetings from home');
myArrowFunction1();

// ........................................................................

const greet = () => {
	return 'Hello, everyone!';
};
console.log(greet()); //  Hello, everyone!

// ........................................................................
// If the function body is a single line:

const sayHello = () => 'Hello, everyone!';
console.log(sayHello()); //  Hello, everyone!
// ........................................................................

const retrieveObject = () => ({ name: 'Juan', lastname: 'Lara' });
console.log(retrieveObject()); //  { name: 'Juan', lastname: 'Lara' }

// ........................................................................
