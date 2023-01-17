class Persona {
	constructor(name, lastname) {
		this._name = name;
		this._lastname = lastname;
	}
	// Getters and Setters:
	get name() {
		return this._name;
	}
	set name(name) {
		return (this._name = name);
	}
	get lastname() {
		return this._lastname;
	}
	set lastname(lastname) {
		return (this._lastname = lastname);
	}
}
