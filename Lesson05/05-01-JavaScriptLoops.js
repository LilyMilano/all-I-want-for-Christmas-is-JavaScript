// While Loop:
/**
* * let counter = 0;

* * while( counter < 3 ){
* * console.log( counter ); // 0, 1, 2
* * counter++
* * }
* * console.log( "End of While Loop"); //  End of While Loop


//__________________________________________________________________________
// Do While Loop:

* * do{
    * * console.log( counter ); // 0, 1, 2
    * * counter++
* * }while( counter < 3 );
* * console.log( "End of Do-While Loop" );  //  End of Do-While Loop
*/

//__________________________________________________________________________
// For Loop:

/**
* * for( let counter = 0; counter < 3; counter++){
* *     console.log( counter ); // 0, 1, 2
* * }
* * console.log( "End of For-Loop" );   //End of For-Loop
*/

//__________________________________________________________________________
/**
The break statement: terminates the current loop, switch, or label statement and transfers program control to the statement following the
terminated statement.
*/

//For-Loop Exercise: Find the first even number between 0 and 10.

for(let counter = 0; counter <= 10; counter++ ){
    if( counter % 2 == 0 ){
        console.log( counter ); // 0
        break; 
    }
}
console.log( "End of For-Loop" );   //End of For-Loop

// Workaround:
/**
* * for( let counter = 0; counter <= 10; counter+=2 ){
* * console.log( counter ); // 0
* * break; 
* * }
*/

//__________________________________________________________________________
/**
continue statement: breaks one iteration (in the loop) if a specified condition occurs, and continues with the next iteration in the loop. The difference between continue and the break statement, is instead of "jumping out" of a loop, the continue statement "jumps over" one iteration in the loop.
*/

//For-Loop Exercise: Find the even and odd numbers between 0 and 10.

top: // 'top' is a label that tells the program where to continue or break.
for( let number = 0; number <= 10; number++){
    if( number % 2 !== 0){
        continue top;   // jump to next iteration
    }
    console.log( number );  //  Logs: 0, 2, 4, 6, 8,  10
}

