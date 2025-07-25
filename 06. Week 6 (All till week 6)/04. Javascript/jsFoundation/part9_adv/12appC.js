//Importing commonjs modules uses "require" keyword.

const mathOperations = require("./mathOperationsC.js"); //as module.exports was passed as object hence now the variable here is object.

console.log(mathOperations.add(2, 2)); //That's why we use .add to access the function as it is done in objects.
