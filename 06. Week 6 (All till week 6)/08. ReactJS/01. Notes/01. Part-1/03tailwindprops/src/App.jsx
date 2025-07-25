import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <Card username={myObj} btnText={newArr} />   //Just to see how to pass variables or array to props
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me" />
      <Card username="hitesh" />

      <Card username={myObj.username} btn={newArr}/> //Just for knowledge how to pass object and array as props. Wow u can't write comments here inside html as they will be displayed on webpage too
      <Card username={myObj.username} btn={newArr[0]}/>
    </>
  )
}

export default App
