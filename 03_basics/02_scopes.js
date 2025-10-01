// var is function-scoped or globally scoped (if not inside a function)
// It's commented out, so it has no effect here
// var c = 300

// 'let' is block-scoped
let a = 500

if (true) {
    // This 'a' is a new block-scoped variable, not the same as the one above
    let a = 30
    const b = 10

    // console.log("INNER: ", a); // Would print 30 (block scoped)

    // 'b' is also block-scoped and not accessible outside this block
}

// console.log(a); // Would print 500 (outer scope 'a')
// console.log(b); // ❌ Error: b is not defined (b is block scoped inside the if block)
// console.log(c); // ❌ Error (if var c is commented out; otherwise would print 300 if declared)


// -------- Function Scope Example --------

function one() {
    const username = "yuka19"

    function two() {
        const website = "github"
        console.log(username); // ✅ Can access 'username' from outer function
    }

    // console.log(website); // ❌ Error: website is defined in inner function only

    two() // Calls the inner function
}

// one() // Uncomment to run the function


// -------- Block Scope Example --------

if (true) {
    const username = "yuka19"
    if (username === "yuka19") {
        const website = "github"
        // console.log(username + website); // ✅ Both accessible here
    }
    // console.log(website); // ❌ Error: website is block scoped to inner if
}

// console.log(username); // ❌ Error: username is block scoped to the if block


// ++++++++++++++++++ interesting ++++++++++++++++++

// Function declaration (hoisted)
// Can be used before its definition
console.log(addone(5)) // ✅ Outputs: 6

function addone(num) {
    return num + 1
}


// Function expression (NOT hoisted like declarations)
addTwo(5) // ❌ Error: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2
}
