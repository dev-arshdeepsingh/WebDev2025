//Operations in js are done using values stored in memory in the form of variables.

let score = 102; //option + down key can help me move the line down.
let bonus = 25;

let totalScore = score + bonus;

let addition = 4 + 5;
let subtract = 9 - 3;
let mult = 3 * 5;
let divi = 8 / 2;
let reminder = 9 % 2;
let expo = 2 ** 3; //JS detects the variable type, But sometimes with large nums it is good to specify the type ie bigint

let myscore = 110;
myscore++;

let credits = 56;
credits--;

// Comparion operation

let num1 = 3;
let num2 = 3;
let num3 = 6;

//How to get boolean values, generally compaarison operators return boolean values.
console.log(num1 == num2); //true
console.log(num1 != num3); // true
console.log(num1 > num3); // false
console.log(num1 < num3); // true
console.log(num1 >= num2); // true 