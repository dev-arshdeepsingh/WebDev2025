import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'  //importing the app function from the App.jsx file

createRoot(document.getElementById('root')).render(  //here also like JS, we can also use querySelector instead of getElementById to get the element with id root.
  <StrictMode>
    <App />
  </StrictMode>,
)



//Like create-react-app, vite's package.json doesn't have any react scripts. So we need to manually link react or JS with index.html. ie a direct script tag is added in index.html file to link react with index.html. However there, we connected scripts to react then connected react to index.html, but such thing doesn't happen here.
//Here, entry point of JS is main.jsx file
//App.jsx handles the components
//<React.StrictMode> is a wrapper that helps in detecting potential problems in the app. It is optional if you want to use it or if you don't want to use it, you can remove it.

//Vite is just lighter than create-react-app or pure react.

//Now vite has some rules. If you are making a component then you have to name that file with .jsx extension + the first letter of the function(component) name should be capital eg: Chai from chai.jsx. Only then u can export that component. It is only in vite not in create-react-app. Only for component & components wali file, other files can have jsx without any concerns.
//One more rule is that each component can return only one element. So if you want to return multiple elements, you have to wrap them in a single parent element.


//Main.jsx is the entry point of the app & it is the file which must be linked with index.html.

// We only have one page ie index.html & we will keep replacing the content of root div with the content of App.jsx file. So that user thinks that webpage is multiple paged but actually it is single paged.