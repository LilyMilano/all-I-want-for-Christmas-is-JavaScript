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

//? const parameterizedFunction = (message) => console.log(message);
// If it is a single parameter we can omit the parenthesis:

const parameterizedFunction = (message) => console.log(message);
parameterizedFunction('Greetings with parameters');

const multipleParameters1 = (op1, op2) => op1 + op2;
console.log(multipleParameters1(3, 8)); //	11

// If the operation is more complex:
const multipleParameters2 = (op1, op2) => {
	let result = op1 + op2;
	return `Result: ${result}`;
};
console.log(multipleParameters2(3, 8)); //	Result: 11
