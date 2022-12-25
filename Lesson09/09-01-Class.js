//?Classes: are a template for creating objects.
/*They encapsulate data with code 
to work on that data. The class defines the attributes and methods common to 
objects of that type, but then, each object will have its own values and share 
the same functions.

We must create a class before we can create objects (instances) of that class. 
When you create an object of a class, you are said to create an instance of the 
class or an object itself.
*/

//.............................................................................
//? Method Overriding is an OOPs concept closely knit with inheritance.
//When a child class method overrides the parent class method of the same name, parameters and return type, it is termed as method overriding.
// Allows a subclass or child class to provide a specific implementation of a method that is already provided by one of its superclasses or parent classes.
//.............................................................................
//? Polymorphism is one of the core concepts of object-oriented programming language.
//Polymorphism means the same function with different signatures is called many times. The method is executed depending on whether it is called from the parent or child reference. In real life, for example, a boy at the same time may be a student, class monitor, etc. So a boy can perform different operations at the same time.
//.............................................................................

//!let person2 = new Person('Karla', 'Juarez');    //  Cannot access 'Person' before initialization
//! Hoisting concept does not apply

//* class Person extends Object (The Object class is the parent class of all classes in JavaScript. Therefore, inherits all of its methods -e.g.toString-).
class Person {
	constructor(name, surname) {
		this._name = name;
		this._surname = surname;
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
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//? constructor, get, set, fullName and toString are different Methods of the Person Class, so they are not separated by commas.

let person1 = new Person('Juan', 'Perez');
console.log(person1); //  Person { _name: 'Juan', _surname: 'Perez' }

//Get:
console.log(person1.name); //  Juan

//Set:
person1.name = 'Juan Carlos';
console.log(person1.name); //  Juan Carlos

let person2 = new Person('Karla', 'Juarez');
console.log(person2); //  Person { _name: 'Karla', _surname: 'Juarez' }
console.log(person2.toString()); //! Karla Juarez (Polymorphism: Called from Parent Class)
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//? Class Inheritance:
/*
class Employee extends Person {
	constructor(department) {
		this._department = department;
	}

	get department() {
		return this._department;
	}

	set department(department) {
		this._department = department;
	}
}
*/

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

let employee1 = new Employee('Mary', 'Smith', 'IT');
console.log(employee1); //  Employee { _name: 'Mary', _surname: 'Smith', _department: 'IT' }
console.log(employee1.name); // Mary (Inheritance)
console.log(employee1.fullName()); //  Mary Smith, IT  (Method inherited and Override from parent class)
console.log(employee1.toString()); //!  Mary Smith, IT  (Polymorphism: Called from Child Class, contains Department)
