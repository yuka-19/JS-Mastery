// ✅ Function: sayMyName
// This function prints each letter/number on a new line
function sayMyName() {
    console.log("Y");
    console.log("U");
    console.log("K");
    console.log("A");
    console.log("1");
    console.log("9");
}

// sayMyName(); // Uncomment this line to run the function


// ✅ Function: addTwoNumbers
// This function takes 2 numbers, adds them, and returns the result
function addTwoNumbers(number1, number2) {
    // You can store the result in a variable like this:
    // let result = number1 + number2
    // return result

    // Or return directly like this:
    return number1 + number2;
}

// We are calling the function and storing the result in a variable
const result = addTwoNumbers(3, 5);

// console.log("Result: ", result); // This will print: Result: 8


// ✅ Function: loginUserMessage
// This function shows a login message. It also has a default username.
function loginUserMessage(username = "yuka") {
    // If no username is passed, show a message and exit
    if (!username) {
        console.log("Please enter a username");
        return;
    }

    // Return a message saying the user logged in
    return `${username} just logged in`;
}

// console.log(loginUserMessage("yuka")); // Output: yuka just logged in
// console.log(loginUserMessage());       // Output: yuka just logged in (default username)


// ✅ Function: calculateCartPrice
// This function uses rest parameters (...num1) to collect extra values into an array
function calculateCartPrice(val1, val2, ...num1) {
    // val1 = first value, val2 = second value
    // num1 = rest of the values in an array
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));
// Output: [500, 2000] → because first 2 go to val1 & val2, rest go into num1 array


// ✅ Object: user
// A simple object with username and prices
const user = {
    username: "yuka",
    prices: 399
};

// ✅ Function: handleObject
// This function takes an object as argument and prints its values
function handleObject(anyobject) {
    // Accessing properties from the object using dot notation
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// Example usage with a new object passed directly
handleObject({
    username: "yuka",
    price: 699
});


// ✅ Array: myNewArray
// An array of numbers
const myNewArray = [200, 400, 100, 600];

// ✅ Function: returnSecondValue
// This function returns the second element from the array
function returnSecondValue(getArray) {
    return getArray[1]; // Remember: Arrays start at index 0
}

// Example usage:
console.log(returnSecondValue([200, 400, 500, 1000])); // Output: 400
