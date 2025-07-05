//named export

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}


//In commonjs modules, we use module.exports to export the functions. Module is a keyword & it has to have .exports even if has 1 func. to export. Using this we can export func. , variables, objects, etc.
module.exports = {  
  add,
  subtract,
  multiply,
};
