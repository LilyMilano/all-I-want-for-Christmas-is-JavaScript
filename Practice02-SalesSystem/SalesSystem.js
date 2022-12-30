class Product {
	static productCounter = 0;

	constructor(name, price) {
		this._idProduct = ++Product.productCounter;
		this._name = name;
		this._price = price;
	}

	// Getters and Setters:
	get idProduct() {
		return this._idProduct;
	}
	get name() {
		return this._name;
	}
	set name(name) {
		return this._name = name;
	}
    get price(){
        return this._price;
    }
    set price(price){
        return this._price = price;
    }
    toString(){
        return `idProduct: ${this._idProduct}, name: ${this._name}, price: $${this._price} `;
    }
}

let product1 = new Product('Trouser', 200);
let product2 = new Product('T-shirt', 100);
console.log(product1.toString());   //  idProduct: 1, name: Trouser, price: $200
console.log(product2.toString());   //  idProduct: 2, name: T-shirt, price: $100   