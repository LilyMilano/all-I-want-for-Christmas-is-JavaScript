// Control Statement (If - Else):

let condition = true;

if (condition) {
	console.log('True condition');  //  True condition
} else {
	console.log('False condition');
}

//__________________________________________________________________________

let number = 3;

if (number == 1) {
	console.log('Number one');
} else if (number == 2) {
	console.log('Number two');
} else if (number == 3) {
	console.log('Number three'); // Number three
} else if (number == 4) {
	console.log('Number four');
} else {
	console.log('Unknown number');
}

//__________________________________________________________________________

// Given the month of the year, develop a program that determines the season to which it corresponds.

let month = 4;
let season;

if ( month == 1 || month == 2 || month == 12 ){
    season = "Winter";
} else if ( month == 3 || month == 4 || month == 5 ){
    season = "Spring";
} else if ( month == 6 || month == 7 || month == 8 ){
    season = "Summer";
} else if ( month == 9 || month == 10 || month == 11 ){
    season = "Autumn";
} else {
    season = "Wrong value";
}

console.log(season);    // Spring