// return the sum of two numbers: a, b

function addition(a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
		return "Sorry but you didn't pass two numbers."
	} else {
		return a + b;
	}
}

console.log();
console.log(addition(2,3));
console.log(addition(2,-3));
console.log(addition(1,0));

const additionEs6 = (a, b) => a + b;

console.log(additionEs6(2,3));
console.log(additionEs6(2,-3));
console.log(additionEs6(1,0));


// Concatenate First and Last Name into One String
// Given two strings, firstName and lastName, return a single string in the format "last, first".

function concatName(firstName, lastName) {
	if(firstName.length <= 0 || lastName.length <= 0){
		return "You may not enter empty values";
	} else {
		return lastName + ', ' + firstName;
	}
}

function concatName(firstName, lastName) {
	return `${lastName}, ${firstName}`;
}

const concatName = (first, last) => `${last}, ${first}`;

// Is the Number Less than or Equal to Zero?
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function lessThanOrEqualToZero1(num) {
	if(num <= 0){
		return true;
	} else {
		return false;
	}
}

function lessThanOrEqualToZero2(num) {
	return (num <=0 ? true : false);
}

const lessThanOrEqualToZero3 = n => n <= 0;



// Profitable Gamble
// Create a function that takes in 3 parameters (probability of winning,
// prize value, and cost of playing) and returns whether or not the 
// gamble is profitable.

// A profitable gamble is a game that yields a positive net profit, 
// where net profit is calculated in the following manner: net_outcome = 
// probability_of_winning * prize - cost_of_playing.

// For instance, profitableGamble(0.2, 50, 9) should yield true,
// since the net profit is 0.2 * 50 - 9 = 1 and 1 > 0.
// Equation: net_outcome = probability_of_winning * prize - cost_of_playing

function profitableGamble(prob, prize, pay) {
	// let net_outcome;
	// prob * (prize - pay) > 0 ? true : false;
	if ((prob * (prize - pay)) > 0) {
		return true;
	} else {
		return false;
	}
}


// Is the Number Even or Odd?
// Create a function that takes a number as an argument and 
// returns "even" for even numbers and "odd" for odd numbers.

function isEvenOrOdd1(num) {
	return ( num % 2 === 0 ? "even" : "odd");
}

function isEvenOrOdd2(num) {
	if( num % 2 === 0){
		return "even";
	} else {
		return "odd";
	}
}

// Return the Last Element in an Array
// Create a function that accepts an array and 
// returns the last item in the array.

function getLastItem(arr) {
	// determine which item is last in the array
	let last = arr[arr.length - 1];
	return last;
}

function getLastItem(arr) {
	// determine which item is last in the array
  return arr[arr.length - 1]
}

// Return the Next Number from the Integer Passed
// Create a function that takes a number as an argument, 
// increments the number by +1 and returns the result.

function addition(num) {
	return num + 1;
}