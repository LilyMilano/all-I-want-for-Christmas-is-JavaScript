//? Polymorphism:
//  In Polymorphism, multiple objects can have the same methods but with different implementations, and an object and its related method are selected based on the user preferences.

//? instanceof:
// The JavaScript instanceof operator is used to check the type of an object at the run time. It returns a boolean value(true or false).
// If the returned value is true, then it indicates that the object is an instance of a particular class and if the returned value is false then it is not.

class Employee {
	constructor(name, salary) {
		this._name = name;
		this._salary = salary;
	}
	// Getters and Setters:
	get name() {
		return this._name;
	}
	set name(name) {
		return (this._name = name);
	}
	get salary() {
		return this._salary;
	}
	set salary(salary) {
		return (this._salary = salary);
	}
	getDetails() {
		return `Employee: name: ${this._name}, salary: ${this._salary}`;
	}
}

class Manager extends Employee {
	constructor(name, salary, department) {
		super(name, salary);
		this._department = department;
	}
	get department() {
		return this._department;
	}
	set department(department) {
		return (this._department = department);
	}
	getDetails() {
		return `Manager: ${super.getDetails()}, department: ${this._department}`;
	}
}

function determineType(type) {
	//? Polymorphism
	console.log(type.getDetails());
	//    Employee: name: Adriana, salary: 100000
	//     Manager: Employee: name: Mariana, salary: 100000, department: IT

    //? instanceof: Useful to know the class to which an object belongs. It is first tested with the lowest hierarchy class.
    
    if(type instanceof Manager){
        console.log('It is an object of type Manager'); //   It is an object of type Manager // (manager1)
        console.log(type.department);    //  IT (Belongs to the child class)
    }
    else if (type instanceof Employee) {
		console.log('It is an object of type Employee'); //  It is an object of type Employee // (employee1)
        console.log(type.department);   //  undefined
	}
    else if(type instanceof Object){
        console.log('It is an Object type') 
    }
}

let employee1 = new Employee('Adriana', 100000);
let manager1 = new Manager('Mariana', 100000, 'IT');

//? Polymorphism: Same function with 2 different behaviors:
determineType(employee1); 
determineType(manager1); 
