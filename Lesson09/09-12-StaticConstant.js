//* class Person extends Object (The Object class is the parent class of all classes in JavaScript. Therefore, inherits all of its methods -e.g.toString-).

class Person {
	static personCounter = 0; //! Static- Class Attribute

	static get MAX_OBJ() {
		//! Static- Method Call (read-only)
		return 5;
	}

	constructor(name, surname) {
		this._name = name;
		this._surname = surname;
		if (Person.personCounter < Person.MAX_OBJ) {
			this.idPerson = ++Person.personCounter;
		} else {
			console.log(
				'Exceeded the maximum number of objects allowed in the Person class'
			);
		}
	}

	get name() {
		return this._name;
	}

	set name(name) {
		this._name = name;
	}

	get surname() {
		return (this._surname = surname);
	}

	set surname(surname) {
		this._surname = surname;
	}

	fullName() {
		return this.idPerson + ' ' + this._name + ' ' + this._surname;
	}

	// Overriding from Object.prototype.toString:

	toString() {
		return this.fullName();
	}

	static hello() {
		console.log('greetings from static method');
	}

	// A static method can receive an Object as argument:
	static hello2(person) {
		console.log(person.name + ' ' + person._surname); //  Karla Juarez
	}
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//? Class Inheritance:

//let employee1 = new Employee();   //TODO:   Must call super constructor in derived class before accessing 'this' or returning from derived constructor

class Employee extends Person {
	constructor(name, surname, department) {
		super(name, surname); // Call the constructor of the Parent Class
		this._department = department;
	}

	get department() {
		return this._department;
	}

	set department(department) {
		this._department = department;
	}
	// Overriding:
	fullName() {
		//return this._name + ' ' + this._surname + ', ' + this._department;
		return super.fullName() + ', ' + this._department;
	}
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

let person1 = new Person('Karla', 'Juarez');

console.log(person1.toString()); //? 1 Karla Juarez (Polymorphism: Called from Parent Class)

// ...........................................................................

let employee1 = new Employee('Mary', 'Smith', 'IT');

console.log(employee1.toString()); //?  2 Mary Smith, IT  (Polymorphism: Called from Child Class, contains Department)

// ...........................................................................

console.log(Person.personCounter); //  2

// If we create a new person object:

let person2 = new Person('Daniel', 'Sprout');
console.log(person2.toString()); //  3 Daniel Sprout
console.log(Person.personCounter); //  3
// ...........................................................................

console.log(Person.MAX_OBJ); //	5 (MAX_OBJ is a getter)
Person.MAX_OBJ = 10; // Trying to set a new value (without a proper setter method). It seems ok, but:
console.log(Person.MAX_OBJ); //	5

// ...........................................................................
// To reach MAX_OBJ:

let person3 = new Person('Merlina', 'Adams');
let employee2 = new Employee('Marie','Condo','Human Resources');

console.log(Person.personCounter);	//	5

// ...........................................................................
// To exceed MAX_OBJ:

let person4 = new Person('Paris','Jackson');	//  Exceeded the maximum number of objects allowed in the Person class 
console.log(person4.toString());	//	undefined Paris Jackson
