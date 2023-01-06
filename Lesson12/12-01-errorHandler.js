'use strict';

/*
When an error occurs, JavaScript will stop and generate an error message.
The try...catch...finally statements combo handles errors without stopping JavaScript.
The try statement defines the code block to run (to try).
The catch statement defines a code block to handle any error.
The finally statement defines a code block to run regardless of the result.
The throw statement defines a custom error.
Both catch and finally are optional, but you must use one of them.
*/

try {
	// x = 10;
	// myFunction();
	throw 'My error';
} catch (error) {
	console.log(error); //  [ReferenceError: x is not defined] [ReferenceError: myFunction is not defined]  //  My error (custom error)
} finally {
	console.log('Error review completed'); //  Error review completed
}

console.log('we continue...'); //  we continue...
