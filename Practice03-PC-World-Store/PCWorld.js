// 1.  Create Input Device class

class InputDevice {

    constructor(inputType, brand) {
        this._inputType = inputType;
        this._brand = brand;
    }

    // Getters and Setters:
    get inputType(){
        return this._inputType;
    }
    set inputType(inputType){
        return (this._inputType = inputType);
    }
    get brand(){
        return this._brand;
    }
    set brand(brand){
        return (this._brand = brand);
    }
    toString(){
        return `inputType: ${this._inputType}, brand: ${this._brand} `;
    }
}

let inputdevice1 = new InputDevice('mouse', 'dell');
console.log(inputdevice1.toString());   //  inputType: mouse, brand: dell 

// ____________________________________________________________________________

// 2.  Create Mouse class (child class from InputDevice)

class Mouse extends InputDevice {

    static mouseCounter = 0;

    constructor(inputType, brand){  // Needs parent class constructor parameters
        super(inputType, brand);    // Calls parent class parameters
        this._idMouse = ++Mouse.mouseCounter;
    }
    get idMouse(){
        return this._idMouse;
    }
    toString(){
        return `Mouse: [idMouse: ${this._idMouse}, inputType: ${this._inputType}, brand: ${this._brand} ]`;
    }
}

let mouse1 = new Mouse('USB', 'HP');
console.log(mouse1.toString());     //  Mouse: [idMouse: 1, inputType: USB, brand: HP ]

let mouse2 = new Mouse('Bluetooth', 'Dell');
console.log(mouse2.toString());     //  Mouse: [idMouse: 2, inputType: Bluetooth, brand: Dell ]

mouse2.brand = 'HP';    // Calls set brand() method.
console.log(mouse2.toString());     //  Mouse: [idMouse: 2, inputType: Bluetooth, brand: HP ]

// ____________________________________________________________________________

// 2.  Create Keyboard class (child class from InputDevice)

class Keyboard extends InputDevice {

    static keyboardCounter = 0;

    constructor(inputType, brand){
        super(inputType, brand);
        this._idKeyboard = ++Keyboard.keyboardCounter;
    }
    get idKeyboard(){
        return this._idKeyboard;
    }
    toString(){
        return `Keyboard: [idKeyboard: ${this._idKeyboard}, inputType: ${this._inputType}, brand: ${this._brand} ]`;
    }
}

let keyboard1 = new Keyboard('Wireless', 'Dell');
console.log(keyboard1.toString());  //  Keyboard: [idKeyboard: 1, inputType: Wireless, brand: Dell ]

let keyboard2 = new Keyboard('Wireless', 'HP');
console.log(keyboard2.toString());  //  Keyboard: [idKeyboard: 2, inputType: Wireless, brand: HP ]

keyboard2.inputType = 'Ergonomic';  //  Calls set inputType() method.
console.log(keyboard2.toString());  //  Keyboard: [idKeyboard: 2, inputType: Ergonomic, brand: HP ]

// ____________________________________________________________________________
