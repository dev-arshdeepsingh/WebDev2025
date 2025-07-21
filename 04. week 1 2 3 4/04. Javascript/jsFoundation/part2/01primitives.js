// Number

let balance = 120;
let anotherBalance = new Number(120); //new is also a keyword used to create variable
// But new always gives it a type = object even if it is a number, boolean, string, etc.

// console.log(balance);
// console.log(anotherBalance.valueOf());

// console.log(typeof balance);
// console.log(typeof anotherBalance); //object

// Primitive data types are immutable, ie they cannot be changed. They are basic.
// Non-Primitive data types are mutable, ie they can be changed. They are complex & advanced.

//Because of new keyword, Netizens says every datatype is an object in js.

//boolean
let isActive = true;
let isReallyActive = new Boolean(true); // not recommended

// null and undefined

let firstname = null;  //null is a value that represents no value.
let lastname = undefined;
// console.log(firstname);
// console.log(lastname);
// Null means empty value wheras undefined means a value is not defined yet or not assigned yet but may be assigned later.

//string

let myString = "hello";
let myStringOne = "Hola";
let username = "hitesh";

let oldGreet = myString + " " + "hitesh";
// console.log(oldGreet);

let greetMessage = `Hello ${username} !`; // `` are recenttly introduced in js. Using them we can also inject variable's value inside a string. This is called string interpolation.
let demoOne = `Value is ${2 * 2}`; // We can also do math inside a ``
// console.log(demoOne);




// Symbol: It guarantees that the value is unique.
let sm1 = Symbol("hitesh"); //Symbol is a function that creates a unique value.
let sm2 = Symbol("hitesh"); //It is the only way to declare a symbol.

console.log(sm1);
console.log(sm2);

console.log(sm1 === sm2); //false because they are unique. & thats the beauty of symbol.






//symbol 