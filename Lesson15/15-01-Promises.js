//? What is a Promise?
//? First of all, a Promise is an object.
//? https://www.youtube.com/watch?v=OXpZfyVXeI8&t=4s
//? https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
//  Promises are the foundation of asynchronous programming in modern JavaScript. A promise is an object returned by an asynchronous function, which represents the current state of the operation. At the time the promise is returned to the caller, the operation often isn't finished, but the promise object provides methods to handle the eventual success or failure of the operation.

//?__________________________________________________________________________
//? Example 1:
//* let myPromise = new Promise((resolve, reject) => {
//* let expression = false; // Execution error: rejected way

//* if (expression) resolve('Executed successfully');
//* else reject('Execution error');
//* });
//............................................................................
//* myPromise.then( value => console.log(value), error => console.log(error));
//* Another way:
//* myPromise
//* 	.then((value) => console.log(value))
//* 	.catch((error) => console.log(error));

//?__________________________________________________________________________
//? setTimeout using Promises:

//* let promise = new Promise((resolve) => {

//* 	console.log('starts promise');	//	starts promise

//* 	setTimeout(()=>resolve('Greetings with promise and timeout'), 3000);

//* 	console.log('ends promise');	//	ends promise
//* });
//............................................................................

//* promise.then(value => console.log(value));	// Greetings with promise and timeout

//............................................................................
//? async function:
//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// The async function declaration declares an async function where the await keyword is permitted within the function body.
// The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
// Async functions may also be defined as expressions.

//* let promise =  new Promise(( resolve)=> {
//* 	setTimeout( ()=> resolve('Greetings with promise and timeout'), 3000);
//* });

//* promise.then(value => console.log(value));	// Greetings with promise and timeout

//............................................................................
// async function: Indicates a function returns a promise.

async function myFunctionWithPromise() {
	return 'Greetings with promise and Async';
}

//* myFunctionWithPromise().then((value) => console.log(value)); //	Greetings with promise and Async

//............................................................................
//? The await operator: is used to wait for a Promise and get its fulfillment value.
//? 'Await' can only be used inside a function declared with 'Async'.
// Await is usually used to unwrap promises by passing a Promise as the expression.

async function functionWithPromiseAwait() {
	let myPromise = new Promise((resolve) => {
		resolve('Promise with Await');
	});

	console.log(await myPromise); //	Promise with Await
}
//* functionWithPromiseAwait();
//............................................................................

//TODO: Use of Promises, Async, Await and setTimeout:

async function functionWithPromiseAwaitTimeout() {
	console.log('starts function'); //	start function

	let myPromise = new Promise((resolve) => {
		setTimeout(() => resolve('Promise with await and timeout'), 3000);
	});
	console.log(await myPromise); //	Promise with await and timeout

	console.log('ends function'); // ends function
}
functionWithPromiseAwaitTimeout();

//__________________________________________________________________________
