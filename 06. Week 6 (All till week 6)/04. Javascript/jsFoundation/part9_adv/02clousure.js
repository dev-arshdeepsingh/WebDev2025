function outer() {
  let counter = 4;
  return function () {   //Now, note that we have returned the func. but not anything about the counter variable ie we haven't returned its declaration part, which is outside the returned function. So, outer() actually contains directly counter++ without counter variable even being declared. And Hola!, it still gets the declaration of counter variable from outside the returned function. This is power of clousure.
    counter++;
    return counter;
  };
}

let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());


// Now, Clousure is a concept that allows a function to access variables, data or memory from its outer scoped parent or grandparent function .
// It helps child function to retain or remeber the environment which is parent function.

// It's like child function carries a bag in which it puts the data of environment (ie parent/grandparent functions) in it. Even if we do not explicitely pass it. It happens due to property of function called clousure.

//Summary: A closure is a **function that remembers and has access to variables from its outer (enclosing) scope, even after that outer function has finished executing. A closure is formed when an inner function remembers variables from its outer function, even after the outer function has returned. It happens Because JavaScript uses lexical scoping, and functions remember the scope in which they were defined, not where they are called from.

