/**
 * ? Functions: A JavaScript function is a block of code designed to perform
 * ? a particular task. A JavaScript function is executed when "something"
 * ? invokes it (calls it).
 */

//? Hoisting: Allow us call a function before its declaration.
myFunction(4, 2);

// Function Declaration:
function myFunction(a, b) {
	console.log('Sum: ' + (a + b)); // Log: Sum: 6, Sum: 5
}

// Call the function after declaration:
myFunction(2, 3);

//__________________________________________________________________________
//? The return statement: stops the execution of a function and returns a value.

// Function Declaration:
function fooFunction(a, b) {
	console.log(arguments); // Log:{ [Iterator] 0: 2, 1: 3 }
	console.log(arguments.length); // Log: 2
	return a + b;
}

// Call the function:
let result = fooFunction(2, 3);
console.log(result); // Log: 5

//__________________________________________________________________________
/**
*?  A function expression: The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions.

*  A function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined.
*/

// 'Function Expression' Declaration:
let sum = function (a, b) {
	return a + b;
};
result = sum(1, 2);
console.log(result); // Log: 3

//__________________________________________________________________________

/**
 * ? Self-Invoking Functions: Function expressions will execute automatically if the expression is followed by (). You have to add parentheses around the function to indicate that it is a function expression:
 *  (function () {
 *  let x = "Hello!!";  //! I will invoke myself just once
 *  })();
 */

(function () {
	console.log('executing the function'); // Log: executing the function
})();

// With arguments:
(function (a, b) {
	console.log('executing the function: ' + (a + b)); //Log: executing the function: 7
})(3, 4);

//__________________________________________________________________________
//? Functions define as Objects: They have properties (.length) and methods (.toString)

console.log(typeof fooFunction); // Log: function

var fooTextFunction = fooFunction.toString();
console.log(fooTextFunction);
// Log:
/**
 * function fooFunction(a, b) { 
    var $_$c = $_$wf(1); 
    $_$w(1, 3, $_$c), $_$tracer.log(arguments, 'arguments', 1, 3); 
    $_$w(1, 4, $_$c), $_$tracer.log(arguments.length, 'arguments.length', 1, 4); 
    return $_$w(1, 5, $_$c), a + b; 
} 
 * 
 */

//__________________________________________________________________________

//? Arrow Functions: Let's compare 'function expression' vs 'arrow function'.

/**
* 'Function Expression' Declaration:

let sum = function (a, b) { return a + b };
result = sum(1, 2);
console.log(result); 	// Log: 3
*/

const sumArrowFunction = (a, b) => a + b;
result = sumArrowFunction(3, 5);
console.log(result); // Log: 8

//__________________________________________________________________________

//? Parameters (a, b): are the names listed in the function's definition.
//? Arguments (1, 2): are the real values passed to the function.

let add = function (a = 3, b = 4) { // Default values
	console.log(arguments[0]); // Log: 1
	console.log(arguments[1]); // Log: 2
	console.log(arguments[2]); // Log: 7 (push value)
	return a + b + arguments[2];
};
let response = add(1, 2, 7); 
console.log(response); // Log: 10

// Real arguments re-write default values. If real values are not assigned, JS uses default values and the response would be add = 7

//__________________________________________________________________________

//? example: adding arguments:

let output = addArguments(5, 4, 13, 10, 9);
console.log(output);

function addArguments(){
	sum = 0;
	for(let i = 0; i < arguments.length; i++){
		sum += arguments[i];	// sum = sum + arguments[i]
	}
	return sum;
}

//__________________________________________________________________________
