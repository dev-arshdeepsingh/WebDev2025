import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}   //However we can add diresctly color name or it's hexcode but we are taking variable here.
    > //However we can add diresctly color name or it's hexcode but we are taking variable here.
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> //Here starts the dock which can change color
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App


//Inline css can be implemented in component's html using the syntax style={{backgroundColor: "red"}} ie {{}} //double curly braces, as color is variable & it is already inside {} in style, hence we don't need explicitely mention 1 more {}

//In above, we created a div for background color & a div for dock which can change color of background. & that dock has buttons which can change color of background when clicked.

//onClick is a special method it expects a full function passed as parameter. If we only passed setColor("red") then it will not work, because it's a function call ie it's reference not the whole function. Hence we wrote the syntax as onClick={() => setColor("red")} using which we create a func which returns a function ie setColor("red").
//onClick needs a function It do not needs the returned value of the function. It needs whole function.
//If we wrote onClick={setColor} then it was ok because setColor was passed as a function.
//But when we wrote onClick={setColor()} then it was not ok because we were giving it the returned value. But we need () as we want to pass args of new color
//Hence we wrote onClick={() => setColor("red")} which is a function which returns a function ie setColor("red"). So that onClick could get func. as well as args can also be passed.
//So we are calling func inside a func.