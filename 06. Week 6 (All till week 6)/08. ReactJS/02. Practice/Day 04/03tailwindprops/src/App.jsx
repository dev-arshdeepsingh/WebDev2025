import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <Card />
      <Card username='Kurusaki Ichigo' btn='Getsuga Tensho'/>

      <Card username={myObj.username} btn={newArr}/> //Just for knowledge how to pass object and array as props. Wow u can't write comments here inside html
      <Card username={myObj.username} btn={newArr[0]}/>

    
      
    </>
  )
}

export default App
