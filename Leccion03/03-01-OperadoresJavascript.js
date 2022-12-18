let a = 3, b = 2;

// Suma:
let z = a + b;
console.log("Resultado de la suma: " + z); 

//Resta:
z = a - b;
console.log("Resultado de la resta: " + z); 

// Multiplicación:
z = a * b;
console.log("Resultado de la multiplicación: " + z);

// División:
z = a / b;
console.log("Resultado de la división: " + z); // 1.5

// Módulo:
z = a % b;
console.log("Resultado del módulo o residuo: " + z); // 1

// Exponente cuadrado:
z = a ** b;
console.log("Resultado del exponente cuadrado: " + z); // 9

//______________________________________________________________________

// Incremento:
// Pre-incremento (el operador ++ antes de la variable, se incrementa y asigna a la variable en la misma operación, es decir, modifica z):
z = ++a;
console.log( a ); // 4
console.log( z ); // 4

// Post-incremento (el operador ++ despues de la variable. No modifica z hasta la próxima iteración)
z = b++;
console.log( b ); // 3
console.log( z ); // 2

// Decremento:
// Predecremento:
z = --a;
console.log( a ); // 3
console.log( z ); // 3
// Postdecremento:
z = b--;
console.log( b ); // 2
console.log( z ); // 3

//______________________________________________________________________

// Precedencia de operadores: Se evalúa de izquierda a derecha y luego se asigna:
let c = 3, d = 2, e = 1, f = 4;

let x = c * d;
console.log( x ); // 6 => 3*2 y se asigna el resultado a la variable z (de izquierda a derecha, considerando la prioridad)
x = c * d + e;
console.log( x ); // 7

x = c * d + e / f; // => 1.( c*d ) 2.( e/f ) 3.sumar
console.log( x ); // 6.25

x = e + c * d;  
console.log( x ); // 7 (multiplica primero por prioridad c*d=6 + 1 = 7)

x = e + c * d / f;  // => 1.( c*d ) 2.( (c*d)/f ) 3.sumar e
console.log( x ); // 2.5

x = ( e + c ) * d / e;
console.log( x ); // => 1.( e + c ); 2.( (e+c) * d); 3.( (e+c) * d ) / e

//______________________________________________________________________

//Operadores de asignación:

let g = 1;

g += 3; // g = g + 3 => g = 1 + 3;
console.log( g ); // 4

g -= 2; // g = g - 2 => g = 4 - 2;
console.log( g ); // 2

/*
De igual forma para los operadores:

*=
/=
%=
**=  

*/

//______________________________________________________________________
//Operadores de comparación en JS:

let h = 3, i = 2, j = "3";

// Igualdades:

let y = ( h == j ); // revisa la igualdad de valores sin importar su tipo
console.log( y ); // true

y = h === j; // revisa la igualdad de valores y tipos de dato
console.log( y ); // false 

// Desigualdad:

y = h != j;
console.log( y ); // false

y = h !== j;
console.log( y ); // true

//______________________________________________________________________
//Operadores Relacionales en JS:

h = 3, i = 3, j = "3";

y = h < i;
console.log( y ); // false

y = h <= i;
console.log( y ); // true

y = h > i;
console.log( y ); // false

y = h >= i;
console.log( y ); // true
