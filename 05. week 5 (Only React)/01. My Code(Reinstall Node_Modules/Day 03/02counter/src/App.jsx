
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  //let counter = 5
  const [counter, setCounter] = useState(15)

  function addValue(){
    if(counter < 20){  //If we set counter <= 20 , then for 20 it will do counter + 1 making it 21.
    setCounter(counter + 1)
  }

  }

  function removeValue(){
    if(counter === 0) return;  //or if(counter > 0) { setCounter(counter - 1) }
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
  )
}

export default App
