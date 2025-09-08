// Primitive data types
// 1. String
// 2. Number
// 3. BigInt
// 4. Boolean
// 5. Undefined
// 6. Symbol
// 7. Null

const score = 100;
const scoreValue = 10.3;

const isLoggedIn1 = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

// const bigNumber = 123456781234567890n;
// console.log(bigNumber);



// Reference (Non primitive)
// 1. Object
// 2. Array
// 3. Function

const heros = ["ironman", "john wick", "batman"]; // array

const profile = {
    name: "Yuka",          // object
    age: 19,
    isLoggedIn: false,
}

function sayHello(name) {          // function
    console.log("Hello " + name);
}
sayHello("Yuka");   

console.log(typeof sayHello);    // function object
