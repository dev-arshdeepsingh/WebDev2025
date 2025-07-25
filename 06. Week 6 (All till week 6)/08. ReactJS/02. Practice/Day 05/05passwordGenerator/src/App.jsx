import { useState, useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    
      let pass = ""
  
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      if (numberAllowed) str += '0123456789'
      if (charAllowed) str += '!@#$%^&*/<>'
  
      for (let i = 1; i < length; i++) {
        const element = Math.floor((Math.random() * str.length) + 1)
  
        pass += str.charAt(element)
        
        
      
    }

    setPassword(pass)
    
  }, [length, numberAllowed, charAllowed, setPassword])
  

  return (
    <>
      
    </>
  )
}

export default App
