class Client extends Person {
	static clientCounter = 0;

	constructor(registerDate) {
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
    toString(){
        return `${super.toString()} ${this._clientId} ${this._registerDate}`;
    }
}
