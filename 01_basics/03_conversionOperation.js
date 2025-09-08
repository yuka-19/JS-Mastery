// let score = "45";
// let score = "45abc";
// let score = true;
// let score = false;
let score = null;

console.log(typeof score);

let valueinNumber = Number (score);
console.log(typeof valueinNumber);
console.log(valueinNumber);



// "45" => 45
// "45abc" => NaN 
// true => 1 / false => 0 


let isLoggedIn = 1 
// let isLoggedIn = ""
// let isLoggedIn = "Yuka"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "Yuka" => true

let someNumber = 21

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)


// *********************** Operations ***********************

let value = 6
let negValue = -value

// console.log(negValue)


let str1 = "Hello"
let str2 = " Yuka"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log("2" + 1);
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);



console.log(+true);
console.log(+"");

let gameCounter = "100"
gameCounter++;
console.log(gameCounter);
