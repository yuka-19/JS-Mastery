// --- Working with Dates in JavaScript ---

// Create a Date object with the current date and time
let currentDate = new Date();

// Different ways to display the current date:
// console.log(currentDate.toString());        // Full date and time
// console.log(currentDate.toDateString());    // Only the date part
// console.log(currentDate.toLocaleString());  // Local format date/time
// console.log(typeof currentDate);            // Type: object

// Creating a specific date (MM-DD-YYYY format)
let customDate = new Date("01-14-2023");
// console.log(customDate.toLocaleString());   // Local format of the custom date

// Get the current timestamp in milliseconds since Jan 1, 1970
let currentTimestamp = Date.now();

// You can compare timestamps like this:
// console.log(currentTimestamp);                // Current time in ms
// console.log(customDate.getTime());            // Time of custom date in ms
// console.log(Math.floor(Date.now() / 1000));   // Current time in seconds

// Get today's date again for further use
let today = new Date();

console.log(today);                  // Print full date/time
console.log(today.getMonth() + 1);  // Print current month (add 1, since Jan = 0)
console.log(today.getDay());        // Print day of the week (0 = Sunday)

// Format the day of the week (like "Monday")
let formattedDay = today.toLocaleString('default', {
    weekday: "long",
});

console.log(`Today is ${formattedDay}`);
