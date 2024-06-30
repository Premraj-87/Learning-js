// array

const myArr = [0, 1, 2, 3, 4, 5, true, "hitesh"]
const myHeros = ["superman", "batman", "spiderman", "thor"]

const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
// console.log(myArr2[1]);

// console.log(myHeros);
// console.log(myArr[1])

// Array Methods

// myArr.push("hulk")
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(2))
// console.log(myArr.indexOf(2))

// const newArr = myArr.join()
// console.log(typeof myArr);

// slice , splice 
console.log("A", myArr);

const myn1 = myArr.slice(1, 4)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 4)
console.log("C", myArr)
console.log(myn2);





