// const tinderUser = new Object() //this is singelton object
const tinderUser = {}; //this is nonsingelton object

tinderUser.id = "123abc";
tinderUser.name = "Prem";
tinderUser.age = 36;
tinderUser.location = "Ranchi";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "premraj@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Prem",
            lastName: "Anand",
        }
    }
}

// console.log(regularUser.fullname?.userfullname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obje3 = Object.assign({}, obj1, obj2); //merge the object
const obj3 = { ...obj1, ...obj2, ...obj4 }; //merge the object using spread operator
// console.log(obj3);

const users = [
    {
        id: 1,
        name: "Prem",
        age: 36,
        location: "Ranchi",
        isLoggedIn: false
    },
    {
        id: 2,
        name: "Anand",
        age: 36,
        location: "Ranchi",
        isLoggedIn: true
    },
    {
        id: 3,
        name: "Raj",
        age: 36,
        location: "Ranchi",
        isLoggedIn: false
    }
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("name"));