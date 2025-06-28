// Till now we have studied & are studying how to handle data. We will discuss how to process data later. 

// Object, Array, Function however array,classes & function are also objects in js.



let bankai = {}; //Empty object
//object is a key value pair.
// Object is collection of variables.
// The memory is allocated in heap to the whole object, not to the variables inside it individually.




const username = {
  "first name": "hitesh",
  isLoggedin: true,
};

//variables inside obj can be accessed in two ways:
// 1. dot notation
// 2. bracket notation

//dot notation is the most common way to access the variables inside an object.


// username.firstname = "Mr. H";  //desspite obj being declared with const, we can still change the value of the variables inside the object.
username.lastname = "choudhary"; //This will also be added as key value pair.
console.log(username); //see, we can also add new variables to the object.

// console.log(username["first name"]);
// console.log(username.lastname);
// console.log(username);
// console.log(typeof username);

let today = new Date();
// console.log(today.getDate());

// Array

let anotherUser = ["hitesh", true]; //We can also add array inside an array.

// console.log(anotherUser[0]);
// JS implicit conversion is very confusing and inconsistent. 
//Eg: 
// console.log(1 + "2"); //12
// console.log(1 + "2" + 2); //122
// console.log(1 + 2 + "2"); //32

//Eg:
let val = true;
console.log(val + "2"); //true2
console.log(val + 1); //2

//Implicit conversion is not a good practice.
//We should always use explicit conversion.

//Eg:
let isValue = "2abc";
console.log(isValue);
console.log(typeof isValue);

console.log(Number(isValue));

console.log(typeof Number(isValue));
console.log(typeof Number(null));
console.log(typeof Number(undefined));
console.log(typeof Number(true));
console.log(typeof Number(false));
console.log(typeof Number(null));


//Type conversion is good just for exploring & It does not have any use in production code.


// Homework: Explore more about type conversion on your own.