// Convertir un string a tipo Number / Validación isNaN:

let miString = "17";
console.log( miString ); // 17
console.log (typeof miString ); // string

// _______________________________________________________________

// Conversión:
let edad = Number( miString );
console.log( typeof edad ); // number

// _______________________________________________________________

// Ejercicio de mayoría de edad:

if( isNaN( edad )){
    console.log( "No es un número");
}
else{
    if( edad >= 18 ){
        console.log( "Puede votar" );
    }
    else{
        console.log( "Muy joven para votar" ); // Muy joven para votar
    }
}


// _______________________________________________________________

// Usando el operador ternario:
if( isNaN( edad )){
    console.log( "No es un número");
}
else{
    let resultado = ( edad >= 18 ) ? "Puede votar" : "Muy joven para votar";
    console.log( resultado ); // Muy joven para votar
}
