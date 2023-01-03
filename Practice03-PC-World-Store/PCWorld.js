// 1.  Create Input Device class

class InputDevice {
	constructor(inputType, brand) {
		this._inputType = inputType;
		this._brand = brand;
	}

	// Getters and Setters:
	get inputType() {
		return this._inputType;
	}
	set inputType(inputType) {
		return (this._inputType = inputType);
	}
	get brand() {
		return this._brand;
	}
	set brand(brand) {
		return (this._brand = brand);
	}
	toString() {
		return `inputType: ${this._inputType}, brand: ${this._brand} `;
	}
}

let inputdevice1 = new InputDevice('mouse', 'dell');
console.log(inputdevice1.toString()); //  inputType: mouse, brand: dell

// ____________________________________________________________________________

// 2.  Create Mouse class (child class from InputDevice)

class Mouse extends InputDevice {
	static mouseCounter = 0;

	constructor(inputType, brand) {
		// Needs parent class constructor parameters
		super(inputType, brand); // Calls parent class parameters
		this._idMouse = ++Mouse.mouseCounter;
	}
	get idMouse() {
		return this._idMouse;
	}
	toString() {
		return `Mouse: [idMouse: ${this._idMouse}, inputType: ${this._inputType}, brand: ${this._brand} ]`;
	}
}

let mouse1 = new Mouse('USB', 'HP');
console.log(mouse1.toString()); //  Mouse: [idMouse: 1, inputType: USB, brand: HP ]

let mouse2 = new Mouse('Bluetooth', 'Dell');
console.log(mouse2.toString()); //  Mouse: [idMouse: 2, inputType: Bluetooth, brand: Dell ]

mouse2.brand = 'HP'; // Calls set brand() method.
console.log(mouse2.toString()); //  Mouse: [idMouse: 2, inputType: Bluetooth, brand: HP ]

// ____________________________________________________________________________

// 3.  Create Keyboard class (child class from InputDevice)

class Keyboard extends InputDevice {
	static keyboardCounter = 0;

	constructor(inputType, brand) {
		super(inputType, brand);
		this._idKeyboard = ++Keyboard.keyboardCounter;
	}
	get idKeyboard() {
		return this._idKeyboard;
	}
	toString() {
		return `Keyboard: [idKeyboard: ${this._idKeyboard}, inputType: ${this._inputType}, brand: ${this._brand} ]`;
	}
}

let keyboard1 = new Keyboard('Wireless', 'Dell');
console.log(keyboard1.toString()); //  Keyboard: [idKeyboard: 1, inputType: Wireless, brand: Dell ]

let keyboard2 = new Keyboard('Wireless', 'HP');
console.log(keyboard2.toString()); //  Keyboard: [idKeyboard: 2, inputType: Wireless, brand: HP ]

keyboard2.inputType = 'Ergonomic'; //  Calls set inputType() method.
console.log(keyboard2.toString()); //  Keyboard: [idKeyboard: 2, inputType: Ergonomic, brand: HP ]

// ____________________________________________________________________________

// 4.  Create Monitor class (has no dependencies)

class Monitor {
	static monitorCounter = 0;

	constructor(brand, size) {
		this._idMonitor = ++Monitor.monitorCounter;
		this._brand = brand;
		this._size = size;
	}

	// Getters and Setters:
	get idMonitor() {
		return this._idMonitor;
	}
	get brand() {
		return this._brand;
	}
	set brand(brand) {
		return (this._brand = brand);
	}
	get size() {
		return this._size;
	}
	set size(size) {
		return (this._size = size);
	}
	toString() {
		return `Monitor: [idMonitor: ${this._idMonitor}, brand: ${this._brand}, size: ${this._size}]`;
	}
}

let monitor1 = new Monitor('Samsung', '32"');
let monitor2 = new Monitor('Dell Alienware', '34"');
console.log(monitor1.toString()); //  Monitor: [idMonitor: 1, brand: Samsung, size: 32"]
console.log(monitor2.toString()); //  Monitor: [idMonitor: 2, brand: Dell Alienware, size: 34"]

// ____________________________________________________________________________

// 5.  Create Computer class:

class Computer {
	static computerCounter = 0;

	constructor(name, monitor, mouse, keyboard) {
		this._idComputer = ++Computer.computerCounter;
		this._name = name;
		this._monitor = monitor;
		this._mouse = mouse;
		this._keyboard = keyboard;
	}

	// Getters and Setters:
	get idComputer() {
		return this._idComputer;
	}
	get name() {
		return this._name;
	}
	set name(name) {
		return (this._name = name);
	}
	get monitor() {
		return this._monitor;
	}
	set monitor(monitor) {
		return (this._monitor = monitor);
	}
	get mouse() {
		return this._mouse;
	}
	set mouse(mouse) {
		return (this._mouse = mouse);
	}
	get keyboard() {
		return this._keyboard;
	}
	set keyboard(keyboard) {
		return (this._keyboard = keyboard);
	}
	toString() {
		return `Computer ${this._idComputer}: ${this._name} \n ${this._monitor} \n ${this._mouse} \n ${this._keyboard}`;
	}
}

let computer1 = new Computer('HP', monitor1, mouse1, keyboard1);
console.log(computer1.toString());
// Computer 1: HP
//  Monitor: [idMonitor: 1, brand: Samsung, size: 32"]
//  Mouse: [idMouse: 1, inputType: USB, brand: HP ]
//  Keyboard: [idKeyboard: 1, inputType: Wireless, brand: Dell ]

console.log(`${computer1}`); // Another way: Automatically calls toString method:
// Computer 1: HP
//  Monitor: [idMonitor: 1, brand: Samsung, size: 32"]
//  Mouse: [idMouse: 1, inputType: USB, brand: HP ]
//  Keyboard: [idKeyboard: 1, inputType: Wireless, brand: Dell ]

let computer2 = new Computer('Assembled', monitor2, mouse2, keyboard2);
console.log(`${computer2}`);
// Computer 2: Assembled
//  Monitor: [idMonitor: 2, brand: Dell Alienware, size: 34"]
//  Mouse: [idMouse: 2, inputType: Bluetooth, brand: HP ]
//  Keyboard: [idKeyboard: 2, inputType: Ergonomic, brand: HP ]

// ____________________________________________________________________________

// 6.  Create Order class:

class Order {
	static orderCounter = 0;

	constructor() {
		this._idOrder = ++Order.orderCounter;
		this._computers = [];
	}
	get idOrder() {
		return this._idOrder;
	}
	addComputer(computer) {
		this._computers.push(computer);
	}
	showOrder() {
		let computersPerOrder = '';
		for (let computer of this._computers) {
			computersPerOrder += `\n${computer}`;
		}

		console.log(`Order: ${this._idOrder}, Computers: ${computersPerOrder}`);
	}
}

let order1 = new Order();
order1.addComputer(computer1);
order1.addComputer(computer2);
order1.addComputer(computer2);
order1.showOrder();

// Order: 1, Computers:
// Computer 1: HP
//  Monitor: [idMonitor: 1, brand: Samsung, size: 32"]
//  Mouse: [idMouse: 1, inputType: USB, brand: HP ]
//  Keyboard: [idKeyboard: 1, inputType: Wireless, brand: Dell ]
// Computer 2: Assembled
//  Monitor: [idMonitor: 2, brand: Dell Alienware, size: 34"]
//  Mouse: [idMouse: 2, inputType: Bluetooth, brand: HP ]
//  Keyboard: [idKeyboard: 2, inputType: Ergonomic, brand: HP ]
// Computer 2: Assembled
//  Monitor: [idMonitor: 2, brand: Dell Alienware, size: 34"]
//  Mouse: [idMouse: 2, inputType: Bluetooth, brand: HP ]
//  Keyboard: [idKeyboard: 2, inputType: Ergonomic, brand: HP ]

let order2 = new Order();
order2.addComputer(computer2);
order2.addComputer(computer1);
order2.showOrder();

// Order: 2, Computers:
// Computer 2: Assembled
//  Monitor: [idMonitor: 2, brand: Dell Alienware, size: 34"]
//  Mouse: [idMouse: 2, inputType: Bluetooth, brand: HP ]
//  Keyboard: [idKeyboard: 2, inputType: Ergonomic, brand: HP ]
// Computer 1: HP
//  Monitor: [idMonitor: 1, brand: Samsung, size: 32"]
//  Mouse: [idMouse: 1, inputType: USB, brand: HP ]
//  Keyboard: [idKeyboard: 1, inputType: Wireless, brand: Dell ]
