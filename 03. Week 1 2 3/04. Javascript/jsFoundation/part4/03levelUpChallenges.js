//Crux: If I know loop we can communicate with database iteratively.
//If I know if-else we can compare values in database
//If I know Array we can store values in database or can give it to AI agent in the form of array.









/* 
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
   Store all teas before `"chai"` in a new array named `selectedTeas`.
*/

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}
// console.log(selectedTeas);













/* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. 
   Store the other cities in a new array named `visitedCities`.
*/

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "paris" || cities[i] === "Paris") {
    continue;
  }

  visitedCities.push(cities[i]);
}
// console.log(visitedCities);















/* 
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. 
   Store the numbers before `4` in an array named `smallNumbers`.
*/
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

// In Below, numbers is the array, num is the current element of the array. For-of loop will automatically manage increment, Termination condition & initialization for us.
for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
// console.log(smallNumbers);



















/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. 
   Store the other teas in an array named `preferredTeas`.
*/

let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const tea of teaTypes) {
  if (tea === "herbal tea") {
    continue;
  }
  preferredTeas.push(tea);
}














/* 
5. Use a `for-in` loop to loop through an object containing city populations. 
   Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.

   let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};

*/

//console.log(Object.keys(citiesPopulation)); //Returns an array of keys.
//console.log(Object.values(citiesPopulation)); //Returns an array of values.
//console.log(Object.entries(citiesPopulation)); //Returns an array of arrays, each containing a key-value pair.
//object.freeze & object.hasown are asked in interview.


let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Berlin: 3500000,
  Paris: 2200000,
};

let cityNewPopulations = {};
// console.log(Object.values(citiesPopulation));

//In for-in , city in citiesPopulation means 'loop through all the keys of the object called citiesPopulation.' However this key called city can be named anything. We named it city, but we can name it anything.
// Order of keys doesn't matter in object, because here we have direct memory access. So any key can be accessed any time.
// 
//So city written below represents all keys which are just variables
for (const city in citiesPopulation) {
  if (city == "Berlin") {
    break;
  }
  cityNewPopulations[city] = citiesPopulation[city]; //This is just taking value of all variables/keys from citiesPopulation and storing it in cityNewPopulations with evry iteration managed by for-in loop.
}
// console.log(cityNewPopulations);
//for-of loop is used to iterate over arrays while for-in loop is used to iterate over objects.













/* 
6. Use a `for-in` loop to loop through an object containing city populations. 
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};

   */

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};
let largeCities = {};


//Here, for-in is managing everything. From initialisation to condition to increment to termination to next iteration.
for (const city in worldCities) {


  // console.log('Hello');
  // console.log(worldCities[city]);// To check value of key being iterated right now.
  // console.log(city);// To check which city is being iterated right now ie the key
  


  if (worldCities[city] < 3000000) {
    //The above condition checks every key's value using "city". & then compares it with 3000000.
    //worldCities[city] is the value of the current key or city which is being iterated over.
    continue;
  }
  largeCities[city] = worldCities[city]; //After satisfying the if condition, this line will be executed. Which will store every key's value in largeCities object from worldCities object.
  // Summary: Object_name[key] gives the value of the key ie used to access the value of the key.
} //for-in loop is terminated here.
console.log(largeCities);












/* 
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. 
   Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];


//for-each loop is used to iterate over arrays. It also manages everything. From initialisation to condition to increment to termination to next iteration.
//array.forEach(element => {}); is the syntax of for-each loop. element is the current element of the array. We pass array_name to array. & then every elementof array is iterated. Element is just a variable name. We can name it anything.
//for-each is diff. from for-of because it executes a function for every element of the array.
//The function written inside forEach is called callback function. It do have a name. Because they are supposed to execute only in that loop. And we never uses them throughout the code. So they are allocated memory in the loop only. And then memory is freed after the loop is terminated & those func. are removed.
//That's why we don't give them a name as we they won't be used anywhere else.
// The declaration of function in for-each is actually a short hand of normal function declaration. It is like this: () => {}. However normal function declaration is like this: function name() {}. However normal declartation can also be used.

teaCollection.forEach(function (tea) { 
//Here, every element of array is passed in the form of tea.
  if (tea === "chai") {
    return;    //We might using loop, but ryt now we are in func. where we can't use break & continue. This is power of scope. Once we are inside curly braces, we are in a different scope which has its own rules.
    // Now, what we are doing is that when we tackle chai. this return will execute which terminate the func. & as we are returning nothing, So we are actually trapping chai inside that func. So it doesn't get outside the block & get added to availableTeas. By return we are actuallly terminating the func. at very instant. Because of which the remaining elements of the array weren't even iterated. But I was wrong. #Doubt
  }
  availableTeas.push(tea);
});

console.log(availableTeas);












/* 
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/

let myWorldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

myWorldCities.forEach(function (city) {
  if (city === "Sydney") {
    return;
  }
  traveledCities.push(city);
});
console.log(traveledCities);














/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/

let myNumbers = [2, 5, 7, 9];
let doubledNumbers = [];
for (let i = 0; i < myNumbers.length; i++) {
  if (numbers[i] === 7) {
    continue;
  }
  doubledNumbers.push(numbers[i] * 2);
}








/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named `shortTeas`.
*/

let myTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const tea of myTeas) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
//string also has length property.



// *****************My Solutions*****************

console.log('Sol 1 begines here:')
//Real life scenario where we can use this is; When we are searching or traversing in a database, and we want to stop the search when we find the tea or skip the tea & Move the remaining data to new database.
// GT = GivenTeas, ST = SelectedTeas
let ST = [];
let GT = ["green tea", "black tea", "chai", "oolong tea"];

//When dealing with arrays always use the same for loop structure that includes the length of the array.
for ( let ii = 0; ii < GT.length; ii++){
  if(GT[ii] === "chai"){
    break;
   
  }
  else{
    ST.push(GT[ii]);
  }


}

console.log(ST);
console.log(GT);






console.log('Sol 2 begines here:')
let GT2 = ["London", "New York", "Paris", "Berlin"];

for(let ii2 =0; ii2<GT.length; ii2++){

  if(GT2[ii2] === "Paris"){
    continue;}
  else{

    console.log(GT2[ii2]);
  }
}

//Break is used to stop the loop, continue is used to skip the current iteration.
//Wherever, continue is tackled. Loop gets restarted not terminated.
//Solve the problem step by step, thats always the best approach.



//Most of the time, we use loops for arrays & objects only.
//That's why JS gives 2 special loops called for-of & for-in, which are used to iterate over arrays & objects respectively.



console.log('Sol 4 begines here:')
// GA = Given Array, PT = Preferred Teas
let GA = ['chai', 'green tea', 'herbal tea', 'black tea'];
let PT = [];

// In for-of t of GA means 'element of selected array'.
for (const t of GA) {

  if(t=== 'herbal tea'|| t === 'Herbal Tea'){
    continue;
  }
  PT.push(t);

}

console.log(PT);
console.log(GA); 

//Homework: Explore call, bind & apply methods.
// Do all questions twice by yourself.


//Don't be scared of func. They are just like normal if-else conditions ie just a block of code. Sometimes they have a name, sometimes they don't because they are supposed to execute only in that loop.