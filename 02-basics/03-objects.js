// singleton
// Obecjt.create

// Object literals

const mySym = Symbol("key1")


const Jsuser = {
    name: 'Prem',
    "full name": "Prem Raj Anand",
    [mySym]: "myKey1",
    age: 36,
    location: 'Ranchi',
    email: "premrajanand@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);

// change the value of the object
Jsuser.email = " premrajanand@chatgpt.com"
// console.log(Jsuser.email);
// freeze the object
// Object.freeze(Jsuser)
Jsuser.email = "premrajananad@microsolft.com"
// console.log(Jsuser);

Jsuser.greeting = function () {
    console.log("Hello JS user");
}
// refresh the name from the object

Jsuser.greetingTwo = function () {
    console.log(`Hello0 Js User, ${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
