//? With the apply() method, you can write a method that can be used on different objects.
//? The apply() method is similar to the call() method.The difference is:
//?	The call() method takes arguments separately.
//?	The apply() method takes arguments as an array.

// Object1:
let person1 = {
	name: 'Juan',
	surname: 'Perez',
	fullName: function (title, phone) {   //!: Passing arguments 
		return title + ': ' + this.name + ' ' + this.surname + ', ' + phone;
		// return this.name + ' ' + this.surname;
	},
};

// Object2:
let person2 = {
	name: 'Carlos',
	surname: 'Lara',
};

//TODO Let's use the 'Apply' method from person1.fullName function to person2:
console.log(person1.fullName('Lic.','11223344' )); //  Lic.: Juan Perez, 11223344

let argumentsArray = ['Eng.', '77665544'];
console.log(person1.fullName.apply(person2, argumentsArray)); //  Eng.: Carlos Lara, 77665544

// Same: Instead of the variable we can use the array, directly:
console.log(person1.fullName.apply(person2, ['Eng.', '77665544']));  //  Eng.: Carlos Lara, 77665544


