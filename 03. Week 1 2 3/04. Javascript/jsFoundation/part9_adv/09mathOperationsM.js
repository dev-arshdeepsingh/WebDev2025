//There are 2 ways to import/export in JS 
// 01.ES6 modules
// 02.CommonJS modules


//Let's first see how to export in ES6 modules.

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}

// Here, we are creating ES6 modules. Which can be used in other files. like 10appM.js
