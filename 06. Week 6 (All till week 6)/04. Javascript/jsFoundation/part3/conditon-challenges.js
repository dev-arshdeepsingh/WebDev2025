// Checking if a number is greater than another number:

let num1 = 5;
let num2 = 8;

/* The diff. b/w {} used in object & used in code block is that in code block it is used to create a scope.*/ 

// The () in if is used to check if the condition is true or false. So we can directly true or false in it too. 
//I hope you remember truthy & falsy values.

//Falsey values:
// 0, "", null, undefined, NaN
//Truthy values:
// "0", "false", " ", [], {}




console.log("I am regular upper code");
if (num1 > num2) {
  console.log(" num 1 is greater than num2");
} else {
  console.log("Nope, num1 is NOT greater");
}

console.log("I am regular bottom code");


// Checking if a string is equal to another string:

let username = "chai";
let anotherUsername = "chai";

// Here, inside if statement. We compare two entities with ==, because == is a comparison operator. 
// But if we use = only then what will happen is that we are assigning the value of anotherUsername to username.

if (username == anotherUsername) {
  //   console.log("Pick another username");
} else {
  console.log("You can pick this username");
}





//Checking if a variable is a number or not: (Confusing)

let score = 44;

if (typeof score === "number") {
  console.log("Yep, this is a number");
} else {
  console.log("No that is not a number");
}
//Note: typeof returns a string. that's why, when we write "number", It automatically recognises it as a data type. 

//Note: === is a strict equality operator. It checks if the value & data type are the same.

// Yep, it is confusing. Paste the above in chatgpt & ask it to explain it to you.

//typeof score converted 44 to "number"(BECAUSE TYPEOF RETURNS NAME OF DATATYPE AS A STRING) & we are comparing it with "number". 
// Hence both are exactly the same (ie value as well as data type) & that's why it is true.

//It is tricky for array. because typeof array is "object". However it is also returned as string by typeof. That's why,we cant write 'array' in RHS as we write 'number' in above if block. 
//Hence, we can't use typeof to check if a variable is an array or not.
//We can use Array.isArray(variable) to check if a variable is an array or not.




//Checking if a boolean value is true or false:

let isTeaReady = false;

if (isTeaReady) {
  console.log("Tea is Ready");
} else {
  //   console.log("Tea is NOT ready");
}

// Checking if an array is empty or not:

let items = ["item1"];

console.log(items.length); // Array has so many properties which will be discussed later.

if (items.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Array is NOT empty");
}


// My Idea to check whether a variable is a number or not:

const num = 1; //now we know 1 is always a number & with const being associated with it, it will always be a number.

let Variable_Name = "Aizen"; //Enter variable value here

if(typeof (Variable_Name) == typeof (num) ){
  console.log(`${Variable_Name} is a number`);
} else {
  console.log(`${Variable_Name} is not a number`);
}





