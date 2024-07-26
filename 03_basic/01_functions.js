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

// function loginUserMessage(username = "sam") {
//     if (!username || username === "") {
//         return "Please provide a username";
//     }
//     result`${username} Just logged in`
// }
// console.log(loginUserMessage("Pedro")) 

function calculateCartPrice(val1, val2, ...num1) {

    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Premrajanand",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}
// handleObject(user);
handleObject({ username: "Prem", prices: 200 });

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
// coder