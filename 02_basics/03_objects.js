// ===== Singleton and Object Literals =====

// Singleton Object (created using constructor like Object.create)
// const obj = Object.create(null);   // not used here but just noted

// ===== Symbols in Objects =====

const mySym = Symbol("key1");  // Creating a unique Symbol

// ===== Object Literal Syntax =====

const JsUser = {
    name: "Yuka",                        // simple property
    "full name": "Yuka 19",             // property with space (must use quotes)
    [mySym]: "mykey1",                  // using Symbol as a key (MUST use square brackets)
    age: 18,
    location: "Delhi",
    email: "yuka@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// ===== Accessing Object Properties =====

// Dot notation
// console.log(JsUser.email);           // Output: "yuka@google.com"

// Bracket notation
// console.log(JsUser["email"]);        // Also works
// console.log(JsUser["full name"]);    // Must use bracket for properties with spaces
// console.log(JsUser[mySym]);          // Accessing symbol key (must use bracket notation)


// ===== Modifying Properties =====

JsUser.email = "yuka@chatgpt.com";     // ✅ Updates email
// Object.freeze(JsUser);              // ❄️ Freezes the object to make it immutable
JsUser.email = "yuka@microsoft.com";   // ❌ This will NOT update if object is frozen

// console.log(JsUser);                // To see updated or unchanged email


// ===== Adding Methods to Object =====

JsUser.greeting = function(){
    console.log("Hello JS user");
};

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  // `this` refers to the current object (JsUser)
};


// ===== Calling Methods =====

console.log(JsUser.greeting());         // Output: "Hello JS user" then `undefined` (because console.log of a function that doesn't return anything)
console.log(JsUser.greetingTwo());      // Output: "Hello JS user, Yuka" then `undefined`
