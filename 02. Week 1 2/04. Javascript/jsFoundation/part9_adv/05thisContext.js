const person = {
  name: "Hitesh",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

person.greet(); // Hi, I am Hitesh

const greetFunction = person.greet;    //"This" points to current object, but its reference is passed or it is transferred to another variable then the "this" context is lost ie the current object it is pointing to is not passed to the other variable.
greetFunction();  // Hi, I am undefined, the "this" context is lost.



// How to pass the "this" context to the new variable or function it is passed:
//Use bind keyword to pass the "this" context to the new variable or function it is passed.

const boundGreet = person.greet.bind({ name: "John" });  //John is the new context of "This" in this.name in the boundGreet() function.
boundGreet();  // Hi, I am John

//Bind keyword is used to pass the "this" context to the new variable or function in which "this" is passed along with the function/variable.


//Homework: explore Bind, Call and Apply keywords. As all of them are related to passing the context.


//  https://chatgpt.com/share/68663b28-236c-800e-9f5e-9cadff8eea8b ///




