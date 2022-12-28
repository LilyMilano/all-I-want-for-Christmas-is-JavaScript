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
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    get surname(){
        return this._surname;
    }
    set surname(surname){
        this._surname = surname;
    }
    get age(){
        return this._age;
    }
    set age(age){
        this._age = age;
    }
    toString(){  // Template String
        return `
                ${this._personId}
                ${this._name} 
                ${this._surname} 
                ${this._age}`;
    }
}
