// Immediately Invoked Function Expressions (IIFE)

// 1) Named IIFE - runs right after definition
(function coffee(){
    console.log(`DB CONNECTED`);  
    // Prints message immediately when this code runs
})();

// 2) Anonymous arrow function IIFE with argument
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);  
    // Prints message using the passed argument immediately
})('yuka19');
