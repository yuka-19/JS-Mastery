const user = {
    username: "yuka19",
    price: 1999,

    welcomeMessage: function() {
        // 'this' points to the 'user' object here
        console.log(`${this.username} , welcome to website`); // Prints username with message
        console.log(this);  // Prints entire user object
    }
}

// user.welcomeMessage()  // Call method to see message and object
// user.username = "unk"  // Change username
// user.welcomeMessage()  // Call again to see updated username

// console.log(this); 
// In global scope, 'this' refers to global object (window in browser)

// function coffee(){
//     let username = "yuka19"
//     console.log(this.username); 
//     // In normal function, 'this' depends on call context
// }

// coffee()

// const coffee = function () {
//     let username = "yuka19"
//     console.log(this.username);
// }

// Arrow function example:

const coffee = () => {
    let username = "yuka19"
    console.log(this);  
    // Arrow functions don't have their own 'this'
    // 'this' here is inherited from the surrounding scope (likely global)
}

// coffee()

// Arrow functions with return values:

// Regular syntax with return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Shorter implicit return (no return keyword needed)
// const addTwo = (num1, num2) => num1 + num2

// Same as above, just wrapped in parentheses
// const addTwo = (num1, num2) => (num1 + num2)

// Return an object literal (needs parentheses to avoid confusion)
const addTwo = (num1, num2) => ({username: "yuka19"})

console.log(addTwo(3, 4))  // Outputs: { username: 'yuka19' }

// Array example (commented out)
// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()  // Use forEach to loop over array elements
