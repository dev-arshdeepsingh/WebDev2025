/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"];
//let teaFlavors = new array("green tea", "black tea", "oolong tea");
//newArray. gives so many methods to work with array.


const firstTea = teaFlavors[0];

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities = ["London", "Tokyo", "Paris", "New York"];
const favoriteCity = cities[2];

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/
let teaTypes = ["herbel tea", "white tea", "masala chai"];
//complete yourself

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
// or citiesVisited.unshift("Berlin");
//or citiesVisited[2] = "Berlin";
//or citiesVisited[citiesVisited.length] = "Berlin"; // because we know that length is 2 which makes it citiesVisited[2] from  citiesVisited[citiesVisited.length]
// console.log(citiesVisited);

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lastOrder = teaOrders.pop();

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas` ie reference must be passed.
*/

//Hint: In array or all non-primitive data types, reference is passed.
//Hence, if we change the original array, the softCopyTeas will also change. It does't happen in primitive data types.

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
// console.log(softCopyTeas);
// console.log(popularTeas);

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`. (Now we are actually copying the array, not reference because we are making a hardcopy of a softcopy that already exists)
*/

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities]; //spread operator is used to copy the array. Reference is not passed. & remember the glass break reference of spread operator given by Hitesh Sir
// let hardCopyCities = topCities.slice(); //Alternative way to copy the array. Reference is not passed.
topCities.pop();
// console.log(hardCopyCities);

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
console.log(europeanCities + asianCities); //This will give us a string not an array. Hence cannot be used to merge arrays.
let worldCities = europeanCities.concat(asianCities); //concat is used to merge arrays.

console.log(worldCities);

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = ["Masala chai", "oolong tea", "green tea", "earl grey"];

let menuLength = teaMenu.length; //Some methods requires parenthesis while some don't.

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

let isLondonInList = cityBucketList.includes("London"); // This method is case sensitive & returns a boolean value.




//Note: We can also use indexOf to check if a value is in the array. It returns the index of the value if it is present in the array.



// To see Behind the scenes of any method just press ctrl + click or cmd + click on the method name.



//There are many methods to work with array. See on MDN.

//Learn about slice & splice.

//shift removes the first element of the array & returns it. But it is not a good practice to use it.
//unshift adds the element to the first of the array & returns the new length of the array.  



// AGAIN KEEP IN MIND THAT SOME METHODS REQUIRE PARENTHESIS & SOME DON'T.




//My Ways to Solve the Ques:
//Q1:
let teaFlavors1 = ["green tea", "black tea", "oolong tea"];

let firstTea1 = teaFlavors1[0]
