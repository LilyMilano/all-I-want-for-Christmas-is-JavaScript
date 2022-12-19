// Control Statement (If - Else):

let condition = true;

if (condition) {
	console.log('True condition'); //  True condition
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

if (month == 1 || month == 2 || month == 12) {
	season = 'Winter';
} else if (month == 3 || month == 4 || month == 5) {
	season = 'Spring';
} else if (month == 6 || month == 7 || month == 8) {
	season = 'Summer';
} else if (month == 9 || month == 10 || month == 11) {
	season = 'Autumn';
} else {
	season = 'Wrong value';
}

console.log(season); // Spring

//__________________________________________________________________________

// Send a message by time of day, given:
/*
6 am - 11 am => Good morning
12 pm - 18 pm => Good afternoon
19 pm - 24 pm => Good evening
0 am - 6 am => Have a good night
*/

let hour = 12;
let message;

if (hour >= 6 && hour <= 11) {
	message = 'Good morning';
} else if (hour > 11 && hour <= 18) {
	message = 'Good afternoon';
} else if (hour > 18 && hour <= 24) {
	message = 'Good evening';
} else if (hour >= 0 && hour < 6) {
	message = 'Have a good night';
} else {
	message = 'Wrong value';
}

console.log(message); // Good afternoon

//__________________________________________________________________________

// Control Statement (Switch):

number = 3;
let letterNumber = 'Unknown value';

switch (number) {
	case 1:
		letterNumber = 'Number one';
		break;
	case 2:
		letterNumber = 'Number two';
		break;
	case 3:
		letterNumber = 'Number three';
		break;
	case 4:
		letterNumber = 'Number four';
		break;
	default:
		letterNumber = 'Unknown value';
		break;
}
console.log(letterNumber);

//__________________________________________________________________________

// Given the month of the year, develop a program that determines the season to which it corresponds.
// Note: Switch use strict comparison

month = 4;
season = 'Wrong value';

switch(month){
    case 1: case 2: case 12:
        season = "Winter";
        break;
    case 3: case 4: case 5:
        season = "Spring";
        break;
    case 6: case 7: case 8:
        season = "Summer";
        break;
    case 9: case 10: case 11:
        season = "Autumn";
        break;
    default:
        season = "Wrong value";
        break;
}
console.log( season );  // Spring