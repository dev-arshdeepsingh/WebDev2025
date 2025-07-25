import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)  //Just keep in mind that u use useState when u want to change the value of a variable & display it in UI.
  const [numberAllowed, setNumberAllowed] = useState(false); //because it's a checkbox whose value will be either true or false.
  const [charAllowed, setCharAllowed] = useState(false) //Same approach -> checkbox -> true or false -> Value to be displayed in UI -> hence useState.
  const [password, setPassword] = useState("")  //This password also has values that need to be displayed & updated in UI -> hence useState. But it has no default value as of now but the approach will bw as soon as the page gets reloaded the value in the input field will be fetched by either API or some function.

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`" 

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1) //We are getting an index no. here.
      pass += str.charAt(char)   //Its more like we are appending a new character to the pass variable with every iteration based on length which is the length of password user wants.
      //In above is a common error people often write it as pass = str.charAt(char) which is wrong. As it won't be able to append new char in every iteration.
    }

    setPassword(pass) //This will give error if useEffect is not used.


  }, [length, numberAllowed, charAllowed, setPassword]) //Other dependencies variables are passed but setPassword method is passed because it is also a dependency.
//I guess this dependency array is used to memoize the function.
//setPassword is passed here just for optimisation. ie render the func. when setPassword changes. Now if we passed password here, then we would have been stucked in an infinite loop because password is changing continously due to useEffect. As it is synchronising it continuously. However its better to not pass even setPassword as a dependency because it won't create any problem. Also it doen't have to be a dependency ie page should only re-render based on length, numberAllowed, charAllowed. The password written in input field should not re-render the page. Don't compare it with useEffect as the dependency array here is used to memoize the function ie to store it efficiently in cachee & reuse when needed. Whereas dependency array in useEffect is used to sync the component with the external system ie it just re-runs the function when the dependencies change. We can make the project without useCallback too.
//Including password in the dependency array would cause the effect to run every time the password changes, but the effect itself changes the password, so it would run forever—an infinite loop!

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator]) //Now if any of these dependencies' values change, the useEffect will be called again.
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => { 
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )     
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App




/* Now the project is running due to the func. created here. As everytime when we reload the page the same function gets executed. Hence we must use an optimised way to call the function.
And here comes the concept of memoization.
Memoization is a technique that helps us to optimize the performance of our code by storing the results of expensive function calls and returning the cached result when the same inputs occur again.
In React, memoization is often used to prevent unnecessary re-renders of components when their props haven't changed.

memoisation gave us some hooks like useMemo and useCallback using which some things can be stored in memory optimally and can be used later. It is more like memorising.

copy is also a hook in react which copies the text from input field.

That length used in UI is also a dependency & whenever we even do slight change in length, the function gets called again & page gets re-rendered or reloaded.


A dependency is any variable or function that your effect or callback uses and that could change over time. You list them so React knows when to re-run your code. Eg: if number checkbox is checked or not which is effecting the password func making it to run again, hence it is a dependency.

usecallback is a hook that returns a memoized callback.
It is used to memoize the function so that it doesn't get called again & again.

In simple words, useCallback is a react hook that let's you cache a function definition between re-renders. I.E if we re-call the function it uses the data which it already has in cache & imports the only required new data via args.

Syntax of useCallback: is useCallback({fn}, [dependencies]) //dependencies is an array of variables that the function depends on. I.E majority of the times this data is used as a part memoisation.



Why useCallback has setPassword as a dependency?
The passwordGenerator function does not use the value of password inside its body.
It only calls setPassword(pass), which sets a new password, but it never reads or depends on the current value of password.
You should include a variable in the dependency array only if you use (read) its value inside the function.
If you only call a setter (like setPassword), but never use the value itself, you do not need to include the value (password) as a dependency.





Math Floor:
1. Math.random()
Generates a random decimal number between 0 (inclusive) and 1 (exclusive).
2. Math.random() * str.length
Multiplies that random number by the length of the string str.
This gives a random decimal number between 0 and (str.length - a tiny bit).
3. Math.random() * str.length + 1
Adds 1 to the result, so now the range is from 1 up to (str.length + 1).
4. Math.floor(...)
Rounds the result down to the nearest whole number.
So, the possible values for char are integers from 1 up to str.length.  ie resulting a range from 1 to 52(if random no. is 0) or 1 to 53 (if random no. is 1)





USECALLBACK HOOK OF REACT:
The useCallback hook is a React hook that lets you memoize (cache) a function definition between re-renders. Its main purpose is to prevent unnecessary re-creation of functions, which can help optimize performance, especially when passing functions as props to child components that rely on reference equality to avoid unnecessary renders.
The first argument is the function you want to memoize.
The second argument is an array of dependencies. The function will only be re-created if one of these dependencies changes.


 onChange={() => {
                  setCharAllowed((prev) => !prev )     
              }  This will reverse the value of charAllowed ie if it is true then it will be false and vice versa.

In dynamic things like sliding the value etc etc, we use (e) & e.target.value to get the value of the input field.


sabse important point yahaan se start hota hai dono hook useCallBack and useEffect bhale hi same ho lekin dono ki functioning me difference hai 
1. useCallback hook mainly uski dependencies ke memoisation ke liye responsible hai mainly ye methods ke refrence ko apni memory me cache krke rakhta hai taaki component rerender hone par kahi method ka refrence change na ho jae or wo ek new method ki tarah hi treat ho warna uspar depend baaki component bhi fhir se rerender honge kyuki method ka refrence (means address in the memory) change ho gya hai 
2. Wahi useEffect sirf apni dependencies ke behalf par us callback function ko run karwaata agar dependencies change hui to wo useEffect ka callback bhi run hoga jisse uske ander hue task jaise yahan passwordGenerator function ko call krwaana wo invoke ho jaega. Thnk u so much sir ye sab clear krne ke liye.



In react, we don't control the re-rendering of the component. It is done by react itself. So if we have too much of re-rendering then it will be a problem. React will give error.

useEffect hook is used to perform side effects in react.

useEffect: It is a react hook used to synchronise a component with the external system.
It doesn't need to be stored in a variable. It also takes 2 parameters:
1. A function/ callback 
2. An array of dependencies

useEffect is responsible for running the func. passed as parameter inside it.



useRef hook is used to store the value of a variable in the memory.
As we can see above in the code, we are using useRef hook to store the value of the password in the memory after "copy" button is clicked. however there is no relation b/w button & input field.
video 10: 42:00






*/

