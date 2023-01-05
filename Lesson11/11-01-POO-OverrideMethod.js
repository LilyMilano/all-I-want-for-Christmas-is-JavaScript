//? Method Overriding
//Is an OOPs concept closely knit with inheritance. When a child class method overrides the parent class method of the same name, parameters and return type, it is termed as method overriding.

class Employee{

    constructor(name, salary){
        this._name = name;
        this._salary = salary
    }
    // Getters and Setters:
    get name(){
        return this._name;
    }
    set name(name){
        return this._name = name;
    }
    get salary(){
        return this._salary;
    }
    set salary(salary){
        return this._salary = salary;
    }
    getDetails(){
        return `Employee: name: ${this._name}, salary: ${this._salary}`;
    }
}

class Manager extends Employee{

    constructor(name, salary, department){
        super(name, salary);
        this._department = department;
    }
    get department(){
        return this._department;
    }
    set department(department){
        return this._department = department;
    }
    getDetails(){
        return `Manager: ${super.getDetails()}, department: ${this._department}`
    }
}

let employee1 = new Employee('Adriana', 100000);
console.log(employee1.getDetails());    //  Employee: name: Adriana, salary: 100000 

let manager1 = new Manager('Mariana', 100000, 'IT');
console.log(manager1);  //  Manager { _name: 'Mariana', _salary: 100000, _department: 'IT' }

console.log(manager1.getDetails()); // Manager: Employee: name: Mariana, salary: 100000, department: IT 
