// Promise is a utility in JS that help us to delabrately create async. behaviour.
//This can be used in events where we know that the event will take more time to execute. Such as network calls, writing into files, querying from the DB etc. 
//Hence we intentionally create async. behaviour in such events. To increase efficiency of execution.
//Now in promise, we pass a callback function that will be executed when the promise is invoked, & in that function we pass 2 parameters: resolve & reject. Because that's how a promise in real life works(it's either fulfilled or rejected).

//Now, in the below code, we are creating a promise that will fetch data from the server.
//We are using setTimeout to simulate the async. behaviour.
//We are using resolve to resolve the promise.
//We are using reject to reject the promise.

//The function inside promise is nameless because we aren't use it anywhere else.

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {   //as we know data fetch will take time hence we are giving it enough time so that in the mean while we can execute other tasks.
      let success = true; //we are using a variable to simulate the success or failure of the promise. If it's true we will do resolve or else we will do reject.
      if (success) {
        resolve("Data fetched successfully");  //We can add any data inside it variable, functions, arrays, , string etc
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}

// If we we execute fetchData( directly) like console.log(fetchData()) then it will return a object "pending" because it's not yet resolved or rejected ie initial state.
//Hence the correct way to execute it is: fetchData().then(callback).catch(callback) where then is used to handle the resolved state & catch is used to handle the rejected state & callback is the function that will be executed when the promise is resolved or rejected.


fetchData()
  .then((data) => {    //This "then" is used to handle data from the resolved state of the promise ie the string "Data fetched successfully" we passed above. The data parameter is the data that is returned from the promise resolved state ie the string "Data fetched successfully".
    console.log(data);
    return data.toLowerCase();
  })
  .then((value) => {  //this 'then' is diff. from 'then' above, because it handles data or returned stmt from "then" func. used above. The value parameter used here is returned statement from the "then" function used above. whiich is data.toLowerCase().
    console.log(value);
  })
  .catch((error) => console.error(error)); //This "catch" is used to handle data from the rejected state of the promise ie the string "Error fetching data" we passed above while defining the promise.
//Just FYI, in catch we didn't used return cause it is defined in single line.


//Now, what will execute, resolve or reject / then or catch will be decided the success variable ie whether it's value is true or false based on which if-else executes & based on which resolve or reject/ then or catch will execute.

//Summary: Promise is declared using new keyword. We pass a callback func in promise which further has 2 params resolve 7 reject. Resolve executes when the the event is succcess, reject executes when event is fail. Resolve is linked to then, reject is linked to catch. then based on the success or failure of the event, then or catch will execute. That's how promise works.


