/**
 * * Functions: A JavaScript function is a block of code designed to perform
 * * a particular task. A JavaScript function is executed when "something"
 * * invokes it (calls it).
 */

// Hoisting: Allow us call a function before its declaration.
myFunction(4, 2);

// Function Declaration:
function myFunction(a, b) {
	console.log('Sum: ' + (a + b)); // Log: Sum: 6, Sum: 5
}

// Call the function after declaration:
myFunction(2, 3);

//__________________________________________________________________________
//** The return statement: stops the execution of a function and returns a value.

// Function Declaration:
function fooFunction(a, b) {
	return a + b;
}

// Call the function:
let result = fooFunction(2, 3);
console.log(result);	// Log: 5

//__________________________________________________________________________
/**
* * A function expression: is very similar to and has almost the same syntax as a function declaration (see function statement for details). The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions.

* * A function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined.
*/

// 'Function Expression' Declaration:
let sum = function(a, b){return a + b};
result = sum(1, 2);
console.log(result);	// Log: 3
