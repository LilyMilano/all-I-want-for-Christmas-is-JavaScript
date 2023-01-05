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
		return (this._name = name);
	}
	get price() {
		return this._price;
	}
	set price(price) {
		return (this._price = price);
	}
	toString() {
		return `idProduct: ${this._idProduct}, name: ${this._name}, price: $${this._price} `;
	}
}

class Order {
	static orderCounter = 0;

	static get MAX_PRODUCTS() {
		return 5;
	}
	constructor() {
		this._idOrder = ++Order.orderCounter;
		this._products = [];
		// this._addedProductCounter = 0;
	}
	get idOrder() {
		return this._idOrder;
	}
	addProduct(product) {
		if (this._products.length < Order.MAX_PRODUCTS) {
			this._products.push(product);
			// this._products[this._addedProductCounter++] = product;
		} else {
			console.log('Reached maximum number of products allowed'); //  Reached maximum number of products allowed
		}
	}
	calculateTotal() {
		let totalSale = 0;

		for (let product of this._products) {
			totalSale += product.price;
		}
		return totalSale;
	}
	showOrder() {
		let productsPerOrder = '';
		for (let product of this._products) {
			productsPerOrder += '\n{' + product.toString() + '}';
		}

		console.log(
			`Order: ${
				this._idOrder
			} Total: ${this.calculateTotal()}, Products: ${productsPerOrder}`
		);  //  Order: 1 Total: 300, Products: 
			// {idProduct: 1, name: Trouser, price: $200 }
			// {idProduct: 2, name: T-shirt, price: $100 } 
			// Order: 2 Total: 350, Products: 
			// {idProduct: 3, name: Belt, price: $50 }
			// {idProduct: 1, name: Trouser, price: $200 }
			// {idProduct: 2, name: T-shirt, price: $100 }
	}
}

let product1 = new Product('Trouser', 200);
let product2 = new Product('T-shirt', 100);
console.log(product1.toString()); //  idProduct: 1, name: Trouser, price: $200
console.log(product2.toString()); //  idProduct: 2, name: T-shirt, price: $100

let order1 = new Order();
order1.addProduct(product1);
order1.addProduct(product2);
order1.showOrder();
// Order: 1 Total: 300, Products:
// {idProduct: 1, name: Trouser, price: $200 }
// {idProduct: 2, name: T-shirt, price: $100 }

let order2 = new Order();
let product3 = new Product('Belt', 50);
order2.addProduct(product3);
order2.addProduct(product1);
order2.addProduct(product2);
order2.showOrder();
// Order: 2 Total: 350, Products:
// {idProduct: 3, name: Belt, price: $50 }
// {idProduct: 1, name: Trouser, price: $200 }
// {idProduct: 2, name: T-shirt, price: $100 }
order2.addProduct(product3);
order2.addProduct(product1);
order2.addProduct(product2); // Reached maximum number of products allowed
