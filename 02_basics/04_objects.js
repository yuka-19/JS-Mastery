// ===== Object Creation =====

// Way 1: Using constructor (creates a singleton object)
// const hingeUser = new Object()

// Way 2: Using literal (more common)
const hingeUser = {}

hingeUser.id = "1456xzbc";
hingeUser.name = "unknown";
hingeUser.isLoggedIn = true;

// console.log(hingeUser);  // Output: { id: '1456xzbc', name: 'unknown', isLoggedIn: true }


// ===== Nested Objects =====

const regularUser = {
    email: "exam@gmail.com",
    fullname: {
        userfullname: {
            firstname: "yuka",
            lastname: "19"
        }
    }
};

// Accessing deeply nested value
// console.log(regularUser.fullname.userfullname.firstname);  // Output: "yuka"


// ===== Merging Objects =====

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// ❌ Incorrect: will nest obj1 and obj2 under obj3
// const obj3 = { obj1, obj2 };

// ✅ Correct: merge using Object.assign()
// const obj3 = Object.assign({}, obj1, obj2, obj4);

// ✅ Modern way: spread operator
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);  // Output: {1: "a", 2: "b", 3: "a", 4: "b"}


// ===== Array of Objects =====

const users = [
    {
        id: 1,
        email: "y@gmail.com"
    },
    {
        id: 2,
        email: "u@gmail.com"
    },
    {
        id: 3,
        email: "k@gmail.com"
    },
];

// Accessing second user's email
users[1].email;  // "u@gmail.com"


// ===== Object Utility Methods =====

// Let's assume this exists
const hingeUser = {
    id: "abc123",
    name: "yuka",
    isLoggedIn: true
};

// Get all keys as array
// console.log(Object.keys(hingeUser));     // ["id", "name", "isLoggedIn"]

// Get all values as array
// console.log(Object.values(hingeUser));   // ["abc123", "yuka", true]

// Get key-value pairs as nested arrays
// console.log(Object.entries(hingeUser));  // [["id", "abc123"], ["name", "yuka"], ["isLoggedIn", true]]

// Check if object has a certain property
// console.log(hingeUser.hasOwnProperty('isLoggedIn'));  // true


// ===== Object Destructuring =====

const player = {
    playername: "YUKA-19",
    price: "999000",
    gameInstructor: "yuka"
};

// Destructuring + renaming
const { gameInstructor: instructor } = player;

// console.log(gameInstructor); ❌ Would throw error (not defined)
console.log(instructor);       // ✅ Output: "yuka"


// ===== JSON-like Structure =====
// This is just a comment showing how a JSON object might look:
/*
{
    "name": "yuka",
    "playername": "YUKA-19",
    "price": "999000"
}
*/
