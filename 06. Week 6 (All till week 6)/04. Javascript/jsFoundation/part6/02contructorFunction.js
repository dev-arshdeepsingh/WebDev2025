// Class is not the only way to create blueprint of objects, we can also use constructor function. It is also a interview question.
// There is no way we can specifically define whether the given func. is a regular func. or a constructor func.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

//"This" keyword decides the context of function. As the above constructor can be used give Person's credentials to various websites like gym_membership, ecommerce, health, banking etc. But "This" make sure that all the websites gets diff. copies based on each of their context. So that if the credentials gets manipulated or extra info is added then only that copy can be affected or impacted but the other copies remains untouched. eg: Gym website may add BMI, or banking website may add nominee or Pan Card, Health can add diseases or medication info. etc. Hence only there copy must be affected. & this is managed by context which is managed by This

function Car(make, model) {
  this.make = make;
  this.model = model;
}

//'This' generally refers to the newly created object. For eg: below when myCar is created then 'This' points to that but when myNewCar is created 'this' instantly vhanges the context & points to that new object.

let myCar = new Car("Toyota", "Camry");  //Whenever we declare variable using this keyword then we create objects using new keyword. It is because whenever we are trying to create a object we want access variable inside the blueprint ie construction function. Apparently, "this" & 'new' keywords has some internal linking due to which the object declared with new keyword is created while the one without neww keyword show undefined.
// console.log(myCar);

let myNewCar = Car("Tata", "Safari");
// console.log(myNewCar);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this.type}`;
  };
}
let lemonTea = new Tea("lemon tea");
// console.log(lemonTea.describe());







function Animal(species) {
  this.species = species;
}
// constructor func. must have 'This' keyword
//Below is the way to define prototype in constructor func.
Animal.prototype.sound = function () {  //I think .sound is our custom prototype.
  return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");
// console.log(dog.sound());

let cat = new Animal("cat");
// console.log(cat.sound());






function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword");  //Error handling is done here.
  }
  this.name = name;
}
let tea = new Drink("tea");
let coffee = Drink("coffee");
