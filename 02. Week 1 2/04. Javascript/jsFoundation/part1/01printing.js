console.log("Hello");
console.log("chai");

//There are other ways to print also
process.stdout.write("chai");
process.stdout.write("chai");

//Using 2 console.log the 2nd console.log will print in the next line
//But in 2 process.stdout.write, the 2nd will print in the same line

//There are various things that console can do like
console.error("This is an error message");
console.info("This is an info message");
console.warn("This is a warning message");
console.debug("This is a debug message");

console.table({ city: "Jaipur" });
console.warn({ city: "Jaipur" });
