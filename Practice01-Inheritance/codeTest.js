class Person {
	static personCounter = 0;

	constructor(name, surname, age) {
		this._personId = ++Person.personCounter;
		this._name = name;
		this._surname = surname;
		this._age = age;
	}
	get personId() {
		return this._personId;
	}
	get name() {
		return this._name;
	}
	set name(name) {
		this._name = name;
	}
	get surname() {
		return this._surname;
	}
	set surname(surname) {
		this._surname = surname;
	}
	get age() {
		return this._age;
	}
	set age(age) {
		this._age = age;
	}
	toString() {
		// Template String
		return `${this._personId} ${this._name} ${this._surname} ${this._age}`;
	}
}

class Employee extends Person {
	static employeeCounter = 0;

	constructor(name, surname, age, salary) {
        super(name, surname, age);
		this._employeeId = ++Employee.employeeCounter;
		this._salary = salary;
	}
	get employeeId() {
		return this._employeeId;
	}
	get salary() {
		return this._salary;
	}
	set salary(salary) {
		this._salary = salary;
	}
	toString() {
		return `${super.toString()} ${this._employeeId} ${this._salary}`;
	}
}

class Client extends Person {
	static clientCounter = 0;

	constructor(name, surname, age, registerDate) {
        super(name, surname, age);
		this._clientId = ++Client.clientCounter;
		this._registerDate = registerDate;
	}
	get clientId() {
		return this._clientId;
	}
	get registerDate() {
		return this._registerDate;
	}
	set registerDate(registerDate) {
		this._registerDate = registerDate;
	}
	toString() {
		return `${super.toString()} ${this._clientId} ${this._registerDate}`;
	}
}

//TODO: Person Class Test:
let person1 = new Person('Adriana', 'Milano', 27 );
console.log(person1.toString());    //  1 Adriana Milano 27

let person2 = new Person('Laura', 'Esquivel', 35);
console.log(person2.toString());    //  2 Laura Esquivel 35

//TODO: Employee Class Test:
let employee1 = new Employee('Stephen', 'King', 45, 5000);
console.log(employee1.toString())   //  3 Stephen King 45 1 5000

let employee2 = new Employee('Jandy', 'Nelson', 41, 7000);
console.log(employee2.toString());  //  4 Jandy Nelson 41 2 7000

//TODO: Client Class Test:
let client1 = new Client('Miguel', 'Cervantes', 33, new Date());
console.log(client1.toString());    //  5 Miguel Cervantes 33 1 Tue Dec 27 2022 21:45:05 GMT-0400 (hora de Venezuela) 

let client2 = new Client('Jane', 'Austen', 22, new Date());
console.log(client2.toString());    //  6 Jane Austen 22 2 Tue Dec 27 2022 21:48:43 GMT-0400 (hora de Venezuela) 
