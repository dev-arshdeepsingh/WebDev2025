console.log("Hello Chai!"); 
//Earlier JS was being executed either in the browser's console or other way to use it was attaching it with html file.
//But mostly it was executed in browser because the compiler which could understand JS code during earlier time was only available in browser
//But recently, google ripped out the engine which used to execute JS earlier in browser & developed V8
//V8 is an open source engine developed by google which can execute JS
//Node.js is like an extended version of V8. which actually changed JS. Learn more about it on chatgpt
//Earlier JS was only used in front end to make webpages interactive, But now after V8, it is used in front web apps(Without using html or css) eg:React, vue, angular etc
//It is used in backend using nodejs, deno etc
// It is used in desktop apps using electron
// It is used in mobile apps using React Native
// V8 was developed using C++
// JS is so much diversified
//It was also an interpreted lang. i.e it also executes line by line
// But now, how it executes is different


// SOURCE_FILE ---> PARSING(recognise keywords,loops etc through every code file) ----> SYNTAX TREE(a tree like struc. which tells where to go with each loop & keyword) //All of this happens before run time ie it is step 1
// 2nd step is:  SYNTAX TREE---------->JIT(Just In Time compiler) which compile all files to an intermediate state but executes them only when reqd. . It saves time & make exevution faster.       
//step 3: JIT---->Bytecode----->Machine code(ie 0 & 1)
//Step 4: Code Execution




// each lang. has it's own way of parsing or tokensisation
//syntax tree recognises errors
//JIT: source code is completely translated into machine code before execution. JIT, however, compiles code at runtime.
//JIT is part of node
//Bytecode is optimised code which gets converted to machine code more efficiently


//Deno and Bun are alternatives of node while JavascriptCore is also a S/W which is alternate of V8 engine