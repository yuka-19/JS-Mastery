// ===========================
// Variable Declarations
// ===========================
const name = "yuka";   // Constant for name (string)
let age = 19;          // Variable for age (number)


// ===========================
// String Manipulation Methods
// ===========================


// 1. Logging name and age using different methods
console.log("Name:" + name, "age:" + age);   // Old way: string concatenation
console.log(`Name:${name} Age:${age}`);      // Modern way: Template literals


// 2. Accessing and manipulating string characters
console.log(name[2]);                        // Access character at index 2 (Output: "k")
console.log(name.length);                    // Get length of string (Output: 4)
console.log(name.toUpperCase());             // Convert to uppercase (Output: "YUKA")
console.log(name.toLowerCase());             // Convert to lowercase (Output: "yuka")
console.log(name.indexOf("k"));              // Find index of "k" (Output: 2)
console.log(name.charAt(3));                 // Get character at index 3 (Output: "a")
console.log(name.endsWith("a"));             // Check if string ends with "a" (Output: true)


// 3. Extracting parts of the string
const newstr = name.substring(1, 3);         // Extract from index 1 to 3 (Output: "uk")
console.log(newstr);

const anotherName = name.slice(-3, -1);      // Extract using negative indexes (Output: "uk")
console.log(anotherName);


// ===========================
// Trimming Whitespace and URL Manipulation
// ===========================


// 4. Removing extra spaces from a string
const newString1 = "   Yuka bhai   ";        
const trimmedString1 = newString1.trim();    // Trim spaces (Output: "Yuka bhai")
console.log(trimmedString1);


// 5. URL manipulation: Replace part of a URL and check for substring
const url = "https://www.youtube.com/watch?v=12345";
console.log(url.replace("12345", "872378"));  // Replace video ID (Output: "https://www.youtube.com/watch?v=872378")
console.log(url.includes("www.youtube.com")); // Check if URL contains "www.youtube.com" (Output: true)


// 6. Splitting a URL into an array of segments
const url2 = "https://www.youtube.com/watch?v=12345";
const urlArr = url2.split("/");  // Split URL by "/"
console.log(urlArr);
/* Output:
[
  'https:',
  '',
  'www.youtube.com',
  'watch?v=12345'
]
*/


// ===========================
// Additional String Methods (Optional)
// ===========================
 

// More string methods you can experiment with:
console.log(name.startsWith("y"));  // Check if string starts with "y" (Output: true)
console.log(name.repeat(2));        // Repeat the string twice (Output: "yukayuka")
console.log(name.padStart(6, "*")); // Pad string with "*" at the start (Output: "**yuka")
console.log(name.padEnd(6, "-"));   // Pad string with "-" at the end (Output: "yuka--")

 
