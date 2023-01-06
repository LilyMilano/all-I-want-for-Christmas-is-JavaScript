'use strict';

/*
The throw statement allows you to create a custom error.
The throw statement throws (generates) an error.
The technical term for this is: The throw statement throws an exception.
The exception can be a JavaScript String, a Number, a Boolean or an Object.
Using throw with try and catch, lets you control program flow and generate custom error messages.
*/

let result = 'hi';

try {
	x = 5;
	if (isNaN(result)) throw 'It is not a number';
} catch (error) {
	console.log(error); //	[ReferenceError: x is not defined]
	console.log(error.name); //	ReferenceError
	console.log(error.message); //	x is not defined
}
// _________________________________________________________________________

let response = '-1';

try {
	if (isNaN(response)) throw 'It is not a number';
	else if(response === '') throw 'Empty string';
	else if(response >= 0) throw 'Positive value';
	else if(response < 0) throw 'Negative value';
} 
catch (err) {
	console.log(err); //  It is not a number
}
finally{
	console.log('Error review completed')	//	Error review completed
};
