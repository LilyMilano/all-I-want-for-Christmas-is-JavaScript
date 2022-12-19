// let cars = new Array('BMW','Mercedes Benz','Volvo');

const cars = [ 'BMW', 'Mercedes Benz', 'Volvo' ];
console.log( cars ); // Log: ['BMW','Mercedes Benz','Volvo']

// To access elements of an array:
console.log( cars[0] );   // Log: BMW
console.log( cars[1] );   // Log: Mercedes Benz
console.log( cars[2] );   // Log: Volvo

// Navigate an Array with For-Loop:
for( let i = 0; i < cars.length; i++ ){
    console.log( i + ' : ' + cars[i] );    // Logs: 0 : BMW, 1 : Mercedes Benz, 2 : Volvo
}
