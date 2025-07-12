// Prototypal Inheritense means doing inheritence in a prototype.

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {    // Here Person's prototype is inheriting a greet() function in itself. So if we console log prototype then we will find greet() method available in it. hence Person's prototype is inheriting from greet() function.
  console.log(`Hello, my name is ${this.name}`);
};
//In above we are declaring new func. greet() in Person's prototype. It will be able to access name due to "This" keyword.


let hitesh = new Person("hitesh");
hitesh.greet();     //Here greet() is not in Person() function but it is in Person's prototype. So it is able to inherit it from it's own prototype.


// More Explanation:  https://chatgpt.com/share/686633ac-a7a4-800e-a189-46c5694d63a1    //


