//There are various ways to write a programming language. Such as Procedural, Object Oriented, Functional, Prototypal etc.
//JS is a prototypal language as well as Object Oriented language. 

//Class is a template for creating objects. It is not a real object. It is a blueprint for creating objects. ie it defines the properties and methods that the object will have. Eg: Teacher has original google form while all the students fills a copy/instance of that form.
//Each object has unique identity however they can share information with each other
//Some obj can have special features too.
//The Object in OOPS is diff. from datatpe's object.

//Earlier JS was only Prototypal language. But now it is also Object Oriented language. But internally it is still prototypal ie it pretends to be Object Oriented language. What JS did was it provided support for some keywords like classes, objects, inheritance etc. However these keywords are just syntactic sugar. They were still using prototypal inheritance behind the scenes.
//JS is a Prototypal language. And OOP is just like a mask on it. Just like Iron-Fist-Ketil from vinland saga.
//So when asked in interviews that, "Is JS truly OOP Based?" then answer is "Yes, it supports everything it has to support but behind the scenes which we can't see is actually prototype based."


//Prototype is accessed using browser's console. First, declare an array('however u can use other datatypes too') + hit enter. then write array name then hit enter. Then u will be able to see prototype name just click it.
//Prototype means extra properties & functionality in a given datatype.

let computer = { cpu: 12 };
let lenovo = {
  screen: "HD",
  __proto__: computer,  //With this, lenovo got access to computer's properties & methods.
};
let tomHardware = {};


//To access protoypes we use dunder proto. But it only works in browser's console.
// console.log(`lenovo `, lenovo.__proto__); //Prints properties inherited from object 'computer', It won't show properties of lenovo because node thinks that you already know the default proprties. It is an older way.

let genericCar = { tyres: 4 };

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar); //Latest way which replaces __proto__ to access properties of other objects. This code line means "In tesla, we want an access of all properties of genericCar"

console.log(`tesla `, Object.getPrototypeOf(tesla)); //This will print all the properties of genericCar in tesla.
// So whenever we use object.setPrototypeOf to copy properties then we will use object.getPrototypeOf to access those properties in the terminal.

//with setPrototypeOf, we don't need to write __proto__ in the object anymore, cause it is a better approach.


//This one is better than __proto__ because it can be written anywhere in the code, while __proto__ can only be written in the object declaration.

//You can use browser's console to see what is the prototype of a given object and list of all properrties object can have.