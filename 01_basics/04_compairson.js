//comparison

// Comparing string numbers
console.log("5" > 2);      // true → "5" becomes 5, and 5 > 2

console.log("05" > 2);     // true → "05" becomes 5, and 5 > 2

// Comparing null with number
console.log(null > 0);     // false → null becomes 0 → 0 > 0 → false

console.log(null == 0);    // false → null is only loosely equal to undefined, not 0

console.log(null >= 0);    // true → null becomes 0 → 0 >= 0 → true

// Comparing undefined with number
console.log(undefined == 0);   // false → undefined is only equal to null, not 0

console.log(undefined > 0);    // false → undefined becomes NaN → NaN > 0 → false

console.log(undefined < 0);    // false → undefined becomes NaN → NaN < 0 → false


// "==="

// Loose equality (==) allows type conversion
console.log("2" == 2);   // true   // "2" (string) is converted to 2 (number), then compared → 2 == 2 → true

// Strict equality (===) does NOT allow type conversion
console.log("2" === 2);  // false    // "2" is a string, 2 is a number → types are different → false