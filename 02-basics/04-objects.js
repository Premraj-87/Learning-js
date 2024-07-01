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

const obje3 = Object.assign({}, obj1, obj2); //merge the object
console.log(obje3);