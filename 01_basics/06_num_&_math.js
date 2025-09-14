// =============== Numbers in JavaScript ===============

const score = 400;
console.log(score); 
// → 400 (just a normal number)

// Creating a number using the Number object
const balance = new Number(100);
console.log(balance); 
// → [Number: 100]

// Convert number to string
console.log(balance.toString()); 
// → '100'

// Format number to 2 decimal places
console.log(balance.toFixed(2)); 
// → '100.00'

// Set precision (total number of digits)
const otherNum = 53.34;
console.log(otherNum.toPrecision(3)); 
// → '53.3' (3 significant digits)

// Format number using Indian number system
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); 
// → '10,00,000' (Indian format)

// =============== Math Methods ===============

console.log(Math.abs(-34)); 
// → 34 (absolute value, removes minus sign)

console.log(Math.round(4.6)); 
// → 5 (rounds to nearest integer)

console.log(Math.ceil(4.2)); 
// → 5 (rounds UP to next integer)

console.log(Math.floor(4.8)); 
// → 4 (rounds DOWN to previous integer)

console.log(Math.min(4, 6, 1, -3, 9)); 
// → -3 (returns the smallest value)

console.log(Math.max(3, 6, 1, -3, 9)); 
// → 9 (returns the largest value)

// Random number between 0 and 1
console.log(Math.random()); 
// → something like 0.54321

// Random number between 0 and 100 (not whole number)
console.log(Math.random() * 100); 
// → something like 73.8943

// Random whole number between 0 and 99
console.log(Math.floor(Math.random() * 100)); 
// → something like 87

// Random whole number between min and max (inclusive)
const min = 1;
const max = 100;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
// → Random number between 1 and 100 (inclusive)
