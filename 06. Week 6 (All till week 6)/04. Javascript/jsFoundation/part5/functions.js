/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/
function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
  console.log(test); //This will never execute cause return will terminate func. immediately.
}
let teaOrder = makeTea("lemon tea");
// console.log(teaOrder); //This is func. call.

//Parameter is like a placeholder & Arguments is like a value that we are passing to the parameter.

/* 
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
Call `confirmOrder` from within `orderTea` and return the result.
*/

//Nested function is a function inside a function.
function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for ${teaType}`;
  }
  return confirmOrder();
}

let orderConfirmation = orderTea("Black Tea");
console.log('soln 2')
console.log(orderConfirmation);
//Every Func. is executed in a safe env. called execution context. Every Func creates its own execution context in memory.
// As sson as func. returns the value. Execution context is destroyed.
//See func. BTS from video no. 48 : @12.00

/* 
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/

//eg: function greet(){} OR let greet = () => {} is same.  
// In above, the 1st is regular function & 2nd is arrow function.

const calculateTotal = (price, quantity) => price * quantity; //This also a way to wrute arrow function where we can skip {} & return keyword only if we have single line of code.

let totalCost = calculateTotal(499 * 100);

//There is a myth that arrow func. don't have their own 'this' context. But it's not true. Arrow func. have their own 'this' context. But it doesn't have the ability to pass pn that context.

/* 
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
Return the result of calling `makeTea`.
*/
function makeTea(typeOfTea) {
  return `maketea: ${typeOfTea}`;
}

//While declaring function. we can name the parameter anything as they are just the placeholders. So as asked in the ques to pass the func. as a parameter, there we will pass the func. as argument not parameter. Paramater can be named anything & passing anything in parameter(ie while declaring func.) instead of argument(Which is passed during func. call) makes no sense
//But while calling function. we have to pass the arguments in the same order as the parameters are declared.
function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}

let order = processTeaOrder(makeTea); //Here we will pass the asked func. as asked in the ques.
// console.log(order);

//In ques, they ask us to pass func. as parameter but it is just to confuse us. Make sure to pass it as argument not parameter.
//Here we studied concept of higher order function also called first class function. In these func., func. are treated as variables. ie can be passed as arguments to other func. & can be returned from other func. Or can also be assigned to a variable.



/* 
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/

function createTeaMaker(name) {
    let score = 100
  return function (teaType) {
    return `Making ${teaType} ${name} ${score}`;
  };
}

//In JS, all the inside func. has access to the outside func. variables,parameters,arguments. This is called closure. #INTERVIEW QUESTION

let teaMaker = createTeaMaker("hitesh");
let result = teaMaker("green tea");
console.log(result);

//If a variable holds a func. then we can execute it like a func. too. Eg: If a = aizen() then a() is same as aizen()



//Just Practice:
/*. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/
console.log('Just Practice:')
function Two(TeaType){

  return `Making ${TeaType}`

}

function createTeaMaker1(func){

      return func("Green Tea")
}

let result1 = createTeaMaker1(Two)
console.log(result1)













//********Some important points ********** */

//1. Function can be passed as a parameter to another function.
//2. Function can be returned from another function.
//3. Function can be stored in a variable.
//4. Function can be stored in an array.
//5. Function can be stored in an object.
//6. Function can be stored in a database.
//7. Function can be stored in a file.

// Console.log() is also a func. whose func. is log() which is written in console folder


// IMPORTANT INTERVIEW QUESTION: Example of higher order function: is For-Each Loop
// For-Each Loop is a higher order function which takes func. as a parameter.  