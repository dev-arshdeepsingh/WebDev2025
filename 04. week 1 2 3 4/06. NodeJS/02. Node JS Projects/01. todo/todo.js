//Here we will lern module likes processes, networks, OS etc
//here we will create todo which saves files to our device. Now JS don't have ability to interact with files hence we will use nodejs 
//nodejs supports traditional require & modules to instead of ES6 import/export
const fs = require("fs"); //fs is a module that allows us to read and write files. It's full form is file system. On ducumentation it is written as node-fs, but we don't need to use node keyword as we are using it in node environment already.   

const filePath = "./tasks.json"; //This file doesn't exists yet but we will see how it is handled later 

const loadTasks = () => {   //To use addTask(), we need to load the tasks from the file. So we will create a function to load the tasks from the file. But keep in mind that loading the task or(reading te memory) is also as difficult as making a web request. Hence we have to use try-catch to handle the error.
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return []; //ie in case of error, we will return an empty array. Somehow catch knows how to handle the error. That's why we love it
  }
};

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
};

const addTask = (task) => {
  const tasks = loadTasks();
  tasks.push({ task });
  saveTasks(tasks);
  console.log("Task added", task);
};

const listTasks = () => {
  const tasks = loadTasks();
  tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`));
};

// TODO: Remove task by index
//Process is used to access parameters passed in terminal or command line. Its inbuilt & works without importing any module.
//process.argv is an array & each of its index has separate meaning
//process.argv[0]: The path to the Node.js executable. Here node is installed
//process.argv[1]: The path to the script file being executed. Here we give the path or folder Name
//process.argv[2] onward: Actual command-line arguments passed by the user. Here 1st parameter is passed
//In process.argv, the index [3] represents the second custom argument passed by the user when running a Node.js script from the command line. Here 2nd parameter is passed


const command = process.argv[2]; //   Here 1st command will be recognised as add, list, remove then the parameter or argument will be passed to the function
//Eg; node 01.TODO/todo.js add "Buy groceries"
const argument = process.argv[3];
//This is not JS, this is node.js but we are using JS syntax to write it. isn't it WOW!
//Now in above, command will be add, list, remove etc while argument can be anything like "Buy groceries", "Buy vegetables", "Buy fruits" etc.
//eg: node todo.js add "Buy groceries" //But must be written in terminal or command line. & argument must be in double quotes because it is a string.


if (command === "add") {  // This file was created reight below ./tasks.json file. This is called interface where we define terms vaguly ie the command, arguments etc etc was not defined but we still used in if-else as we knew we were going to compare some keywords, add validation etc etc. So we just architect things roughly so that they canbe properly structured later. It's like writing a pseudo code before an actual program so that we see it's flow.

  addTask(argument);    //if given command has add then we will add the task to the file
} else if (command === "list") {
  listTasks();  //if given command has list then we will list the tasks from the file ie display the tasks hence, no args needed
} else if (command === "remove") {
  removeTask(parseInt(argument));  //if given command has remove then we will remove the task from the file ie delete the task hence, we need to pass the index of the task to be removed. parseInt is used to convert the argument to an integer.
} else {
  console.log("Command not found!");
}
