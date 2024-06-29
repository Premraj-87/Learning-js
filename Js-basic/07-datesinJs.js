// Dates 

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2023, 0 , 23); 
let myCreateDate = new Date("01-14-2024"); 
// console.log(myCreateDate.toDateString());

let myTimeStamps = Date.now()

// console.log(myTimeStamps);
// console.log(myCreateDate.getTime() );
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getDay())


// i`${ newDate.getDate()}and the time `
newDate.toLocaleString('default',{ 
    weekday: "long",
    timeZone: 
})