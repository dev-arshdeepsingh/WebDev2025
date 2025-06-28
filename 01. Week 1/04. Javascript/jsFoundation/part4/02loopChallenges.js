//Flow of LOOPS

// Entry Point --> Condition --> Executes set of instructions if true --> Check Condition --> Executes set of instructions if true --> Check Condition --> ... --> Exit Point & executes rest of the code if condition is false
// every loop must have termination condition. so that it doesn't run forever.
// While, do-while, for, for-each, for-in, for-of etc. 


/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/

let sum = 0; //its better to assign something rather than making it undefined as it may give it garbage value.
let i = 1; // i=0; will waste one iteration, because sum += 0 will give sum as 0.
//These variables are declared outside the loop so that they can be accessed outside the loop too otherwise they will create erroe due to block scope of loop.

//in termination condition, use comparison operator not assignment operator.

while (i <= 5) {
  sum += i; // sum = sum + i
  i++;
}
// console.log(sum);

//If sum is declared inside the loop, then we won't be able to access it outside the loop due to block scope.

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/

let countdown = [];
let j = 5;
while (j > 0) {
  countdown.push(j);
  j--;
}
// console.log(countdown);

/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.
*/

/*let teaCollection = [];
let tea;

do {
  tea = prompt(`Enter your favourite tea (type "stop" to finish)`); 
   //Using prompt, we can take input from user. Nodejs doesn't have prompt function, so we need to use browser to run this code.

 if (tea !== "stop") {
    teaCollection.push(tea);
  }
 } while (tea !== "stop"); 
  */

/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/

let total = 0;
let k = 1;
do {
  total += k;
  k++;
} while (k <= 3);

/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/

let multipliedNumbers = [];
let numbers = [2, 4, 6];

for (let l = 0; l < numbers.length; l++) {
  //   takeNumber = numbers[l] * 2;
  //   multipliedNumbers.push(takeNumber);

  multipliedNumbers.push(numbers[l] * 2);
}
// console.log(multipliedNumbers);

/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let c = 0; c < cities.length; c++) {
  const myCity = cities[c];
  cityList.push(myCity);
}
console.log(cityList);



// *****************My Solutions*****************
console.log('Sol 2 begines here:')
let b = 5;
let ccountdown=[];

while(b>0){
  console.log(b);
  ccountdown.push(b);
  b--;
}

console.log(ccountdown);


console.log('Sol 5 begines here:')  //Go with sir's approach, it is better.

let given_num = [2,4,6];
let final_arr = [];

for(let ii=0; ii<3; ii++){
  given_num[ii] = given_num[ii] * 2;
  final_arr[ii] = given_num[ii];
}

console.log(final_arr);
console.log(given_num); // Damn, given_num is changed too. Thats why use sir's approach. always use push and pop in array.

// for loop = initalization, condition, increment/decrement
// while loop = condition, execution, increment/decrement
// do while loop = execution, condition, increment/decrement

console.log('Sol 6 begines here:')

let cities1 = ["Paris", "New York", "Tokyo", "London"];
let new_cities1 = [];

for(let jj=0; jj< cities1.length; jj++){

  new_cities1.push(cities1[jj]);

}

console.log(new_cities1);
console.log(cities1);







