"use strict";

// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables.

let x = 10;  // x is not defined (without let)
console.log(x);   // 10

myFunction();   // y is not defined (without let)
function myFunction(){
    "use strict";

    let y= 15;
    console.log(y); //  15
}