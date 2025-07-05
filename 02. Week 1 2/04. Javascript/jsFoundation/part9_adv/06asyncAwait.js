//Just another way to handle promises in JavaScript.


function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ name: "chaicode", url: "https://chaicode.com" });
    }, 3000);
  });
}


//instead of using fetchUserData().then() and .catch() we can use async and await keywords to handle promises.



async function getUserData() {    //async keyword is used to define an asynchronous function. It tells that the data might take some time to fetch. Here we will create a new function, but the thing is there is no guarantee we always get data hence we learn error handling here.
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData();  // await is used to manage those tasks which takes a lot of time.
    console.log("User data fetched successfully"); // This will be printed only after the promise is resolved or wait time in await is over.

    console.log("User data: ", userData);
  } catch (error) {
    console.log("Error fetching data", error);  ////here also we will also get the data which is attached to the reject in promise function.
  }
}
getUserData();  //the new function is called here. it is important to call the function.


//try- catch are used to handle errors in asynchronous functions. They mean while performing certain tasks if there are any errors just don't crash the program, just handle the error and continue the program.

//happy things happen in try while the error happens in catch.

//await keyword is used to wait for the promise to resolve. It tells that the program should wait for the promise to resolve before moving on to the next line.
//await keyword is used only inside async functions.

// Things written in resolved are sent to trt
// Things written in rejected are sent to catch.


//Workflow: try will execute till await no matter if resolve is there or not. now if resolve there then await will execute further otherwise it will be shifted to catch.

// Always send error statement in catch. Not the data.

//await pauses the execution of the function until the promise is resolved.
