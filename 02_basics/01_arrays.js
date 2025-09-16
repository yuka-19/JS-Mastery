// ===== Array Basics =====

// Creating arrays in different ways
const myArr = [0, 1, 2, 3, 4, 5];              // Normal array
const myHeors = ["shaktiman", "naagraj"];     // Array of strings

const myArr2 = new Array(1, 2, 3, 4);          // Using Array constructor

// Accessing array elements
// console.log(myArr[1]);                      // Output: 1


// ===== Array Methods =====

// Add elements to the end
// myArr.push(6);                              // Adds 6 at the end
// myArr.push(7);                              // Adds 7 at the end

// Remove last element
// myArr.pop();                                // Removes the last element

// Add element to the beginning
// myArr.unshift(9);                           // Adds 9 at the beginning

// Remove the first element
// myArr.shift();                              // Removes the first element

// Check if an element exists in array
// console.log(myArr.includes(9));            // true or false

// Find index of an element
// console.log(myArr.indexOf(3));             // Index of value 3 (output: 3)

// Convert array to string (comma separated)
// const newArr = myArr.join();               
// console.log(myArr);                        // Original array
// console.log(newArr);                       // Converted string


// ===== slice vs splice =====

console.log("A ", myArr);                      // Original array: [0, 1, 2, 3, 4, 5]

// ----- slice(start, end) -----
// ✅ Non-destructive: Does NOT change original array
// ✅ Returns a portion of the array from start to (end - 1)
const myn1 = myArr.slice(1, 3);                // Returns elements at index 1 and 2 -> [1, 2]

console.log(myn1);                             // Output: [1, 2]
console.log("B ", myArr);                      // Original array is unchanged: [0, 1, 2, 3, 4, 5]

// ----- splice(start, deleteCount) -----
// ❌ Destructive: Changes the original array
// ✅ Removes elements starting from index 1, total 3 elements
const myn2 = myArr.splice(1, 3);               // Removes elements at index 1, 2, 3 -> [1, 2, 3]

console.log("C ", myArr);                      // Modified array: [0, 4, 5]
console.log(myn2);                             // Removed elements: [1, 2, 3]
