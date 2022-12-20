// let cars = new Array('BMW','Mercedes Benz','Volvo');

const cars = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(cars); // Log: ['BMW','Mercedes Benz','Volvo']

// To access elements of an array:
console.log(cars[0]); // Log: BMW
console.log(cars[1]); // Log: Mercedes Benz
console.log(cars[2]); // Log: Volvo

// Navigate an Array with For-Loop:
for (let i = 0; i < cars.length; i++) {
	console.log(i + ' : ' + cars[i]); // Logs: 0 : BMW, 1 : Mercedes Benz, 2 : Volvo
}

//________________________________________________________________________

// Modify an array element:
cars[1] = 'MercedesBenz';
console.log(cars[1]); // Log: MercedesBenz

//________________________________________________________________________

// 1.- Add a new array element:
cars.push('Audi');
console.log(cars); // Log: ['BMW', 'MercedesBenz', 'Volvo', 'Audi' ]

//........................................................................

// 2.- Workaround: Considering -> cars.length = 4
console.log(cars.length); // Log: 4
cars[cars.length] = 'Cadillac';

console.log(cars); // Log: ['BMW', 'MercedesBenz', 'Volvo', 'Audi','Cadillac' ]

//________________________________________________________________________

// 3.- Empty Indexes: (this is not a good practice yet is possible):
cars[6] = 'Porshe';
console.log(cars); // Log: ['BMW', 'MercedesBenz', 'Volvo', 'Audi','Cadillac', , 'Porshe' ]

//________________________________________________________________________

// Ensure that it is an array:
console.log(typeof cars);   // Log: object
//........................................................................

// So, the proper ways:

//1.- .isArray
console.log(Array.isArray(cars));   // Log: true

// 2.- instanceof:
console.log(cars instanceof Array); // Log: true
//________________________________________________________________________

