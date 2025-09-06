const accountId = 34325321
let accountEmail = "Yuka19@example.com"
var accountPassword = "secretpassword"
accountCity = "Delhi"
let accountState;

//accountId = 23112 //not allowed

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

/*
    Prefer not to use var 
    because of issue in block scope and functional scope
*/
 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])