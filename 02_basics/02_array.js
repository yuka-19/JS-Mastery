// ===== Combining Arrays =====

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// ❌ This will add the whole dc_heros array as a single element
// marvel_heros.push(dc_heros);

// console.log(marvel_heros);        // Output: ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
// console.log(marvel_heros[3][1]);  // Output: "flash" (accessing nested array element)


// ✅ Using concat to merge arrays (returns a new array)
const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);            // ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]


// ✅ Using spread operator (more modern way)
const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);       // ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]


// ===== Flattening Nested Arrays =====

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// ✅ flat(Infinity) flattens deeply nested arrays into a single-level array
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); 
// Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


// ===== Array Utility Methods =====

// ✅ Check if a variable is an array
console.log(Array.isArray("yuka"));  
// Output: false (because "yuka" is a string)

// ✅ Convert string into array (splits each character)
console.log(Array.from("yuka"));     
// Output: ["y", "u", "k", "a"]

// ⚠️ Trying to create array from an object (no direct mapping unless it’s array-like or has a length property)
console.log(Array.from({name: "yuka"}));  
// Output: []  (Empty array because it can’t convert plain objects like this)


// ===== Create Array from Individual Values =====

let score1 = 100;
let score2 = 200;
let score3 = 300;

// ✅ Array.of creates a new array from individual values
console.log(Array.of(score1, score2, score3));  
// Output: [100, 200, 300]
