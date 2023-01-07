'use strict';

//? What is a Promise?
//? First of all, a Promise is an object.
// When we make a promise in real life, it is a guarantee that we are going to do something in the future. Because promises can only be made for the future.
// This is also the same for promises in JavaScript. When we define a promise in JavaScript, it will be resolved when the time comes, or it will get rejected.

let myPromise = new Promise((resolved, rejected) => {
	let expression = false; // Execution error: rejected way

	if (expression) resolved('Executed successfully');
	else rejected('Execution error');
});

//* myPromise.then( value => console.log(value), error => console.log(error));
//* Another way:
myPromise
	.then((value) => console.log(value))
	.catch((error) => console.log(error));
