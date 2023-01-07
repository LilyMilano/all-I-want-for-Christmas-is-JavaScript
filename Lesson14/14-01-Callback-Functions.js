'use strict';

//? "I will call back later!"
//? A callback is a function passed as an argument to another function.
//? This technique allows a function to call another function.
//? A callback function can run after another function has finished.
//..............................................................................

//? Review:
//? JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

function myFunction1() {
	console.log('function 1'); //  function 1
}
function myFunction2() {
	console.log('function 2'); //  function 2
}

myFunction2();
myFunction1();

// Log:
//function 2
//function 1

//______________________________________________________________________________
//? Callback Functions:

function print(message) {
	console.log(message); //  Result: 8
}
function add(op1, op2, callbackFunction) {
	let result = op1 + op2;
	callbackFunction(`Result: ${result}`);
}
add(5, 3, print); //    print() is passed as an argument of add()

//..............................................................................

//? Asynchronous calls using setTimeout function: The setTimeout() method calls a function after a number of milliseconds.  1 second = 1000 milliseconds.
//The setTimeout() is executed only once.If you need repeated executions, use setInterval() instead.

function myCallbackFunction() {
	console.log('Asynchronous greeting after 3 seconds'); //  Asynchronous greeting after 3 seconds
}
setTimeout(myCallbackFunction, 3000);

// Another example:
setTimeout(function () {
	console.log('Asynchronous greeting after 4 seconds');
}, 4000);
// Asynchronous greeting after 4 seconds

// Using Arrow Function:
setTimeout(() => console.log('Asynchronous greeting after 5 seconds'), 5000);

//..............................................................................
//? Asynchronous calls using setInterval function: The setInterval() method calls a function at specified intervals (in milliseconds).
// The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.

let watch = () => {
	let date = new Date();
	console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
};
setInterval(watch, 1000); //TODO: It gives the hour every second as a watch
