class Employee extends Person {
	static employeeCounter = 0;

	constructor(salary) {
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
