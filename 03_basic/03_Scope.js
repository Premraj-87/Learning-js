const user = {
    username: "hitest",
    price: 20,

    welcomeMessage: function () {
        console.log(`${this.username} ,welcome to our website`);
        console.log(this);
    },
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

const chai = () => {
    let username = "Prem"
    console.log(this);
}
// chai()
// const addTwo = (num1, num2) => {
// return num1 + num2 //explicit return
// }
// const addTwo = (num1, num2) => num1 + num2 //implicit return
const addTwo = (num1, num2) => ({ usernam: "Prem" })


console.log(addTwo(2, 3))

const myArray = [1, 2, 3, 4, 5]
myArray.forEach((element) => {
    console.log(element);
})

// Immediately Invoked Function Expression (IIFE)