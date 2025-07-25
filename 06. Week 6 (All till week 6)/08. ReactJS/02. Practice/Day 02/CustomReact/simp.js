const a = {
    b : 9,

}

console.log(a.b);
console.log(typeof a.b);

let abc = `${a.b}`

console.log(abc);
console.log(typeof abc);

//Now, a.b & ${a.b} may have same value but different type. One is number and other is string.
//Use a.b when you want the value in its original type (number, string, boolean, etc.). This is important for calculations, comparisons, or any logic that depends on the type.

//Use `` ${a.b} `` when you want to convert the value to a string, usually for display or concatenation. Template literals are helpful when you want to build a string that includes variables.