//Till now, we are executing JS in quite a ordered way ie line by line.
//But, asynchronous behaviour acts as a pause in its ordered execution.
//Every lang. has such pause & in JS it's not inbuilt but we have to inject it by ourselves.
//Eg: network calls (used to senf requests from & toserver/database/backend) also requires pause sometimes because servers may be located in germany so request from Indiaa will take timme from milliseconds to seconds sometimes.
// Another example may be read/write operations. They may be faster when done on memory but when done on disk, it will take time. FYI: Memory means RAM. Disk means HDD/SSD.



// Time func. also takes time to execute. This also asynchronous JS. Its syntax is: setTimeout(function, time) where time is in milliseconds.

// Now, if below code was synchronous, then it would have executed line by line. ie :
// I would like to say Hello -> chaicode -> for loop

//But the execution was:  chaicode -> for loop -> I would like to say Hello(which executed after 4 seconds)  //So, the execution was not in order. It all happened due to asynchronous behaviour of setTimeout func.
// Somwtimes user input is also asynchronous. (FYI: Input from user is generally taken via forms from html)

// Ther can be many more examples of asynchronous behaviour.



function sayHello() {
  console.log("I would like to say Hello");
}

setTimeout(() => {
  sayHello();
}, 4000);

console.log("chaicode");

for (let index = 0; index < 10; index++) {
  console.log(index);
}


// JS don't have inbuilt time func. or network calls, It just uses event loop to handle such asynchronous behaviour.
// Network calls are also called fetch events.

// How event loop works?
// 01. First we write normal code in code files.
// 02. Then, every single method or code line goes into call stack.
// 03. Then, event loop checks if there is any method in call stack. It is a loop that checks if there is any method in call stack again & again, whether it has something to execute.
// 04. If there is, it pops it out (or removes it from call stack) & executes it by providing it the resources like memory, cpu, etc.
// 05. Now If the method is asynchronous, then it requires some additional things like time (for methods like network calls, time func. etc) & also JS can't handle such methods & hence they are passed on to a helping hand called browser or environment like node/deno/bun etc (by event loop from call stack)  which are capable of executing such async methods.
// 06. So ennv. like node/deno/bun etc. execute such methods & pass them into event queue. (Event queue is a queue that stores all the asynchronous methods. They are of 2 types: Fast Paced & Regular one so that if there is an urgency the method can be passed to fast paced queue instead of regular one.)
// 07. In the meantime (till browser/env. executes the async methods), event loop again checks if there is any method in call stack. If there is, it pops it out & executes it. But once the async method is executed by browser & passed to event queue, then event loop executes the method in event queue first then attends methods from call stack.
// 08. This process continues.



// 0*. So async methods like time func. or network calls are executed by browser/env. & then passed to event queue.
// 0* So, what JS is incapable of executing, it passes it to broeser/env.
// 0* There is a helping hand called browser or environment like node/deno/bun etc.



//Summary: Asynchronous just means "not executing code in order". ie sequential order is not followed just like synchronous JS.