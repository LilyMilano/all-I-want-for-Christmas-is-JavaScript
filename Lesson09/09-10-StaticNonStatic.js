//* class Person extends Object (The Object class is the parent class of all classes in JavaScript. Therefore, inherits all of its methods -e.g.toString-).

class Person {

	static personObjectCounter = 0; //! Static- Class Attribute

    email =  'Default email'; //! Objects Attribute

	constructor(name, surname) {
		this._name = name;
		this._surname = surname;
		Person.personObjectCounter++;
		console.log('Increases counter: ' + Person.personObjectCounter);
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
		return this._name + ' ' + this._surname;
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

console.log(person1.toString()); //? Karla Juarez (Polymorphism: Called from Parent Class)

// ...........................................................................

let employee1 = new Employee('Mary', 'Smith', 'IT');

console.log(employee1); //  Employee { _name: 'Mary', _surname: 'Smith', _department: 'IT' }

console.log(employee1.fullName()); //  Mary Smith, IT  (Method inherited and Override from parent class)

console.log(employee1.toString()); //?  Mary Smith, IT  (Polymorphism: Called from Child Class, contains Department)

// ...........................................................................
//TODO You cannot call a static method or property on an object, only on an object class.
//TODO person1.hello(); 		//	person1.hello is not a function

Person.hello(); //  greetings from static method
Person.hello2(person1); //  Karla Juarez (A static method can receive an Object as argument)

Employee.hello(); //  greetings from static method
Employee.hello2(employee1); //  Mary Smith

//TODO static properties:
console.log(person1.personObjectCounter); // undefined
console.log(Person.personObjectCounter); // 2
console.log(Employee.personObjectCounter); // 2 - Child classes inherit the static variables

console.log(person1.email);     //!  Default email
console.log(employee1.email);   //!  Default email

console.log(Person.email);      //! undefined: New static variable
console.log(Employee.email);    //! undefined: New static variable