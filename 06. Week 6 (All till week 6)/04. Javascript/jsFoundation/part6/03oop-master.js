//The whole idea of OOPs is just to create objects
//Encapsulation, Abstraction, Inheritance, Polymorphism
//Encapsulation is the process of hiding the implementation details of a class from the outside world.
//Abstraction is the process of hiding the implementation details of a class from the outside world.
//Inheritance is the process of inheriting the properties and methods of a parent class to a child class.
//Polymorphism is the process of overriding the methods of a parent class in a child class.

//Oject-Orientedd paradigm is a programming paradigm based on the concept of "objects".
// 
//Params is just a short form of parameters.
// Constructor-Function actually behaves like a class.
//

let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
// console.log(car.start());








//"This" keyword is used to refer to the current object. ie it tells us the current context.
function Person(name, age) {
  this.name = name; //Just stored the parameters in a new variable using 'this' keyword.
  this.age = age;
} //Constructor-Function used to create class which serves as a template for creating objects.

let john = new Person("John Doe", 20);  //Object created using the constructor function.
console.log(john);
// console.log(john.name);













//Prototype is a property of a function that is used to add new properties and methods to the function.
// ClassName.prototype.methodName = function () {} is syntax to access the prototype of a class & add new mthod called "methodName" which is a function which will be added to the prototype of class.

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {  //added new method called "speak" to the prototype of Animal class. 
  return `${this.type} makes a sound`;
};
//The processs to accesss prototype & add new method is called prototype chaining.
//Using prototype we can accesss all variables of the used class. Eg: Animal in the above example.

Array.prototype.hitesh = function () {
  return `Custom method ${this}`;  //Here, we will be able to see who is calling "This" ie whenever myArray is calling this method, it will return "Custom method [1,2,3]". Similarly, if we call myNewArray, it will return "Custom method [1,2,3,4,5,6]".
}; //Now, due to use of Array.prototype, the hitesh method is added to the prototype chain of Array class. So, due to prototype chaining, we are able to access the hitesh method in any array throughout the code  .
//In JavaScript, all arrays are instances of the built-in Array constructor. When you add a method to Array.prototype, that method becomes available to all array instances, both existing and new.

let myArray = [1, 2, 3];
// console.log(myArray.hitesh());
let myNewArray = [1, 2, 3, 4, 5, 6];
// console.log(myNewArray.hitesh());

//Since hitesh is now on Array.prototype, any array (like myArray or myNewArray) can use it:
//Summary:
//Both myArray and myNewArray can use hitesh because all arrays inherit from Array.prototype, and you added the hitesh method to that prototype. This is a core feature of JavaScript's prototypal inheritance.
// There are better methods ie we can use classes to create objects.













//LETS STUDY CLASSES & INHERITANCE, BUT UNDER THE HOOD WE KNOW THAT THEY ARE PROTOTYPES.

class Vehicle {
  constructor(make, model) {   //Constructor is a special method that is used to create and initialize objects of a class. ie it is the one which creates the templates for the objects.
    this.make = make;
    this.model = model;
  }
  //Func. declared inside the class are called methods. So constructor is a method.
  //If a func. is  a method then we don;t need to write function keyword. eg: start() is a method.

  start() {
    return `${this.model} is a car from ${this.make}`;
  }  //It may not be visible, but this method is declared inside the Vehicle class. So, it is a method of Vehicle class.
}


//now let's see how to inherit the properties or methods of a parent class to a child class.
class Car extends Vehicle {  //We can also put comma against vehicle to inherit from multiple classes.
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}

let myCar = new Car("Toyota", "Corolla");
// console.log(myCar.start());
// console.log(myCar.drive());

let vehOne = new Vehicle("Toyota", "Corolla");
// console.log(vehOne.make);

//new keyword fetch data from the constructor function.
//Witjout new keyword, class can't be invoked to create objects.
// Inheritence is done using extends keyword.










// Encapsulation

class BankAccount {
  #balance = 0;  //# is used to make the variable private.

  deposit(amount) {
    this.#balance += amount;  //A private variable can be accessed only within the class. But can't be accessed outside the class directly. This is the main purpose of encapsulation using which we are restricting the direct access to the data.
    return this.#balance;  //However, we can still have indirect access to the private variable using getters and setters.
  }

  getBalance() {
    return `$ ${this.#balance}`;  //We can access the private variable using getters. But some restrictions are there. Like here, "$" sign is reqd. 
  }
}

let account = new BankAccount(); //No parameters are passed because we didn't use constructor function.
//console.log(account.balance); //This will give error because balance is a private variable.
console.log(account.getBalance()); //here we used getters to access the private variable. We will have access but with some restrictions.
console.log(account.deposit(1500)); //here we used deposit method to access the private variable. // We still had indirect access using methods.

//Encapsulation is used to restrict the direct access to the object's data.
//It is used while accessing data from database on which some restrictions & filters can be added so that we can get more refined data. And which cannot be accessed directly without a trigger which is method here. Trigger can add a bunch of conditions & functionalities to the data.




// Abstraction: It is used to hide the complex details of the code & show only the essential features to the user. 
//Encapsulation is used to restrict the direct access to the data & Abstraction is used to hide the complex details.

class CoffeMachine {
  start() {
    // call DB
    // filter value
    return `Starting the machine...`;
  }
  brewCoffee() {
    // complex calculation deciding amount of coffee to be brewed. Which must be done in a way that it is not visible to the user.
    return `Brewing coffee`;
  }

  pressStartButton() {
    let msgone = this.start();    //For methods inside a class, use "this" keyword for everything.
    let msgTwo = this.brewCoffee(); //using func. directly without storing it in a variable will not work. Because both methods are returning something which must be stored somewhere.
    return `${msgone} + ${msgTwo}`;
  }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());












// Polymorphism: Something that can take many forms.

class Bird {
  fly() {
    return `Flying....`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`; //Same method if called through Penguin class will return a different result.
  }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());   //As said above, here fly() will return a different result because Penguin() was used to declare this object.  

// static method

class Calculator {
  static add(a, b) {
    return a + b;
  }    //Static method is a method that can only be called on the class itself, not on an instance of the class.
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3));  //Here, we will get an error

// console.log(Calculator.add(2, 3)); //Here, we will get the result. It has variois use cases where we don't want objects to access the method. We will see them later when we use diff. frameworks.



// Getters and setters
//Every property we declare in a class can have a getter and setter. Getter is used to get the value of a property and setter is used to set the value of a property.

class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be in negative");
    }
    this.name = name;
    this.#salary = salary;  
  }

  get salary() {
    return `You are not allowed to see salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this._salary = value;
    }
  }
}
//These get & set methods are special because firstly they are keywords in JavaScript. Secondly, they are used to access the private variable.
let emp = new Employee("Alice", -50000);
console.log(emp._salary);
emp.salary = 60000;


//Whenever we use underscore in front of a variable then we know that getter and setter are gonna come as this is a coding community kinnd of thing.
// In above, we see that getter and setter are used to get control over the data.
// Constructor has its own mechanism to get & set values & it remains unaffected by getters and setters.
// if want to add some instructions about the values being passed as paramaeters then conditions must be applied inside constructor not getter or setter.
//I still have some doubts about the use of getters and setters. If possible see the video again.

// The role of prototype is to add new methods & properties that can be shared by all instances of the object.

//When we use prototype, it is also inheritence.