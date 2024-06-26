// Primitive 
// 7 types : String , Number , Boolean ,null , undefined, Symbol, BigInt

const scope  = 100
const  scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail; //undefined

const id = Symbol ('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 342423422342423n


// Reference (Non primitive)
// Array , Objects ,Functions

const heros = [ "Ironman", "Thor", " Spiderman"]
let myObj = {
    name: "Prem ",
    age: 22,
}

const myfunction = function (){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof id);
console.log(typeof myfunction); 


