console.log("hello");
// console.log("chai");
/*. MULTILINE COMMENT
JS is a dynamically typed language, meaning you don't have to explicitly declare the type of a variable
It can be changed at runtime, and the type is determined by the value assigned to it.

String
Number
Boolean
Bigint //RARELY USED, for very large numbers

Undefined //declared but not assigned a value
Null //explicitly assigned a null value eg no temperature detected can be reffered as null as 0 is not null
Object //complex data structure, can hold multiple values
Symbol //used to create unique identifiers, rarely used in day-to-day coding

*/

// var score = 102 // var is function scoped, meaning it is accessible within the function it is declared in
// let score = 102; // let is block scoped, meaning it is accessible within the block it is declared in
// const score = 102; // const is also block scoped, meaning it is accessible within the block it is declared in, but it cannot be reassigned


//here diff. bw var and let is not noticeable in this example, but in other cases like big code. the diff. is big.
let score = 102;
let name = "chaicode.com";
let isLoggedin = false;

//object
let teaTypes = ["lemon tea", "orange tea", "oolong tea"]; //array
let user = { firstname: "hitesh", lastname: "choudhary" };

let getScore = score; //ie we can borrow values from other variables

console.log(getScore);
