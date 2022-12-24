//TODO. With the call() method, you can write a method that can be used on different objects.

// Object1:
let person1 = {
	name: 'Juan',
	surname: 'Perez',
	fullName: function (title, phone) {   //!: Passing arguments to the call function
		return title + ': ' + this.name + ' ' + this.surname + ', ' + phone;
	},
};

// Object2:
let person2 = {
	name: 'Carlos',
	surname: 'Lara',
};

//TODO Let's use the 'Call' method to apply the person1.fullName function to person2:
console.log(person1.fullName('Lic.','11223344' )); //  Lic.: Juan Perez, 11223344

console.log(person1.fullName.call(person2, 'Eng.', '55443322')); //  Eng.: Carlos Lara, 55443322

//______________________________________________________________________________

