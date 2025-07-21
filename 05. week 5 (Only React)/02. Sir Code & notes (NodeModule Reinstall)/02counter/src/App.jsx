import { useState } from 'react' //There are various hooks in react like useState, useEffect etc. These all are nothing but functions, which are imported from react in the same way we use variables in react ie using {}. If we want to import multiple func. then we can write {a,b} or we can also write import React, {a,b} from 'react'. where a,b are hooks.
 import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15) //We can pass anything inside parameter of useState(true, false, "", "Hitesh"). It is a hook. It is a function which is used to manage the state of the component. It returns an array of two values. The first value is the current state value and the second value is the function to update the state. The first value is called as state variable and the second value is called as state updater function.
//Now, we don't need this "let counter" anymore. As the hook we used above do everything.
//In above ie [counter, setCounter] is called as state variable and state updater function. counter is same as "let counter" but setCounter is a function which is used to update the state ie counter's value. useState(15) assigns the initial/default value to counter ie 15. 
//Now, whenever we use setCounter to update the value of counter then react will update it in whole page consistently.

  //let counter = 15

  const addValue = () => {
    //console.log("value added", Math.random()) //Just to see whether the button is working or not. Math.random() is a function which returns a random number just like Date.now() used to did which we used in JS.
    //counter = counter + 1  //By this, the no. is increasing with every click on console but is not updating on UI ie the webpage.
    //The problem coming above is UI updation. Actually that's not a problem that's the superpower of react. React wants to control the UI so that it can control multiple things at once. That's why we are unable to update the UI with the help of counter = counter + 1 which is a JS thing. 
    
    setCounter(prevCounter => prevCounter + 1)  //We can also use setCounter(counter + 1) but it will not work until the keyword with [counter, setCounter] is let instead of const. or we can declare a = counter+1 as a variable and then use setCounter(a); But it is also working with const.
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )  //Now in above u can see that we are using counter on multiple places. So to maintain the consistency if we change counter at 1 place then it have to sync the counter in other places in the UI too. NOw wwith the JS, we had to do so by applying to much getelementbyid() method, but in react we can handle multiple things with only few methods. We can update variables in JS. But data updation on UI will be managed by react using Hooks. 
}

export default App

//onClick is a prop which is used to handle the click event. It is a prop of the button element. It is available in react only. In JS we used event listener which is quite similar to it.
//In onClick we pass a function which is called when the button is clicked. We pass its reference in the same way as variables are passed in react ie using {} 

//Arrow funcions & normal func. are same thing. They just follow different syntax or nothing else.
//Just for revision, the html code we returned will be parsed by _JSX imported from JSX (See documentation).

//Summry: hooks are just func. so they expect some parameters & return some values. Always read them before using them, in above we used useState hook which handles 2 things: (variable & Updating that variable). We assign default value to variable in useState("default value"). But keep in mind to import them before use.
//We did everything inside App func or component.


//Search for "React Hooks" in the documentation on github.