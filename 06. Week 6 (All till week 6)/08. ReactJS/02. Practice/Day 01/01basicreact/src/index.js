import React from 'react';
import ReactDOM from 'react-dom/client'; //It is react's implementation especially for web.

import App from './App'; //Here we are importing the App component or function from the App.js file


const root = ReactDOM.createRoot(document.getElementById('root')); //using reactDOM we are injecting react in index.html file.
root.render( //This tells React to render your App component (imported from App.js) inside the "root" element.
 
    <App /> //Here we are rendering the html "root id wala div" via  JS "App function" using method "render". So we are renedering the html in JS file. That's the power we get from react & this is what JSX is all about. Also one imo. thing to mention is that we haven't added any script tag in index.html file. But this all is happening  because in package.json, we have react scripts which is linking JS with index.html. And react is injected using reactDOM. Actually, JS is linked with react & react is linked with index.html using ReactDOM’s createRoot method which creates a React root (a place where your React app will be rendered).
   
);

//component means a function that returns a jsx element. So its just a function. Utility is a package.
//reactDOM is a virtual DOM. It is a tree of react elements. It is a tree of objects. It is a tree of js objects. 
//React also compares the virtual DOM with the real DOM and updates the real DOM accordingly.
//createRoot will be discussed later.
//document here is the html document ie index.html. there we are getting the element with id root.
//<APP/> is a custom tag
//App was a function imported from App.js file.
//Summarizing: These lines connect your React app to the actual HTML page by rendering the App component inside the "root" div. This is the entry point where your React code takes over the web page.