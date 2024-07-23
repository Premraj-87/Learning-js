function sayMyName() {
    console.log("P");
    console.log("R");
    console.log("E");
    console.log("M");
}

// sayMyName();
/* Inside the function, we can use parameters
to pass data to the function. 
The parameters are like variables that are only
available inside the function. 

addTwoNumbers is a function that receives two parameters a and b 
*/
function addTwoNumbers(a, b) {
    // let result = a + b;
    // return result;
    return a + b;
}
// const result = addTwoNumbers(2, 3);
// console.log("Result", result);

function loginUserMessage(username = "sam") {
    if (!username || username === "") {
        return "Please provide a username";
    }
    result`${username} Just logged in`
}
console.log(loginUserMessage("Pedro"))