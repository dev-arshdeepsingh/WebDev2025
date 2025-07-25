import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


//During tailwind insatallation we deal with npm install -D ... in which -D is for dev dependencies

//Now in react, in modules, we don't write html, We write jsx(ie html in js). Hence to use tailwind, we enject tailwind as a class in html as an attribute, Eg: <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>. So className is a reserved keyword. lly we can for loop in html also as an attribute.

//We copy-paste tailwind component directly to App.jsx in which we are also writing our html
//Some errors in tailwind are: 01. Close the image tag ie />.because by default it won't be closes so we have to explicitly close it.
//Tailwind is Fun
//Just copy the html code & paste it in the jsx in which u want to display the tailwind component.
//In className, some famous classes are: 01. bg-green-400, 02. text-black, 03. p-4, 04. rounded-xl, 05. mb-4.
//devui is also a website for tailwind components.

//Props:
//Props make a component reusable. Eg we make a card then that card must be placed in component so that it can be reused.
//These components are stored in a folder called components. Eg: Card.jsx
//React snippets is an extension that helps us to write jsx code faster. eg: refce becomes full component automatically.

//



