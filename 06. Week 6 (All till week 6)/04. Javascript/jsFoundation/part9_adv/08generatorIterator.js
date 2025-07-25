function* numberGenerator() {  //Generator function is a function that returns a generator object. It is defined using * symbol.
  yield 1;  //yield keyword is used to pause the execution of the function and return a value. Here we dont use return keyword.
  yield 2;
  yield 3;   //After executing 3 times, the function will be paused and the value 3 will be returned. Then no more yield will be executed.
}

let gen = numberGenerator();
let genTwo = numberGenerator();

console.log(gen.next().value);  //1            //here we use .next() to execute the function & .value to get the value of the function.
console.log(gen.next().value);  //2 
console.log(gen.next().value);  //3
console.log(gen.next().value);  //undefined , the iterations for this variable is over.

console.log(genTwo.next().value); //1
console.log(genTwo.next().value); //2


//very rarely used in real world.