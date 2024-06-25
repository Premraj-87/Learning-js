const accountId = 8989
let accountEmail = "premrajanand@google.com"
var accountPassword = "1234"
accountId = "Jaipur"
let accountState;
 
// accountId = 2 // not allowed

/*
we not use the var because of the issue in block scope and 
functional scope
*/

accountEmail = "hc@hc.com"
accountId = "Bengaluru"
console.log(accountId);
console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword,accountId])
console.table([accountState]);

