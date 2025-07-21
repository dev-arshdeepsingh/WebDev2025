import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return (  //remember that return is executed like this: return()
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
} //So yeah, we can create components in main file too & render it here too. We can render it as normal function is MyApp() but still we use <MyApp/> syntax to render it so that others coders can understand it easily.

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// } 
 
// //Now we can use this for the MyApp function too as it's pure JS. But the sytax used in above ie both JS & html is easy to write. This syntax is used for jsx files only. Eventually react converts this jsx syntax into pure JS object syntax(ie the tree syntax), which is done by parsing the jsx file. But still jsx is easy to use as we directly write html in js as compared to pure JS syntax which we used in customReact file too.
//So this object was able to execute in customReact file because we write our custom Render function based on key-values in this object but here we are using render which is pre defined by react. So we have to follow its syntax. This object won't execute untill we follow its syntax.



const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a> //eventually it will be parsed into the same tree like object structure
)
//This worked because we are using JS + HTML syntax & it's a JSX file. #MyLogic



const anotherUser = "chai aur react"

const reactElement = React.createElement( //Now we are using react's syntax to create elements. Here we are using React.create which is same document.createElement but this is specifically for react. Unlike JS it has some rules, however here also we will be using object but we won't mention keys & order will be :  TagName(string) -> attributes(object) -> content(ie inner Html)(string) -> Evaluated Expression(if u want to add values of variables)
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherElement //We can pass this too LOL. but its value comes ie value of a variable can come here. but statments like if-else, loops etc should not be passed here as it conflicts the definition of object.because at end it will be parsed into the object & objects don't have if-else or loops or comparisons. Understood Urahara Duno.
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    //anotherElement         //still executes even we didn't used neither anotherElement() nor <anotherElement/> syntax. This is because we are using reactElement object which is a pure JS object.
    reactElement
  
)

//Note: Whenever we are importing a vite file, first we need to install node modules by using npm install command. Then we can use npm run dev command to run the file.
//ReactDOM.createRoot(GRABBED_ELEMENT).render() is used to render the page.

//JS gives us too much freedom but in react there are some rules like we saw for  render or React.createElement

//It has such rules beacuse there are alot of optimisations working behind the scenes.

//To deal with variables in react we use {} syntax similar to js's ${} syntax.
/* Eg: let username = "chai aur react"
    return(     //obviously if we are in func. then we will be using it but just for eg:
     <h1>Hello {username}</h1>   //username's value will be replaced here
     )
*/

//Just for interview perspective: 
//{username} is called as JSX expression or evaluated expression to be precise. Here we don't write JS, we write final outcome of JS like variable's value. We can't perform evaluation here like {if(true) username}. Evaluation must be performed outside of return. We can perform inside component but not inside return func. As it will be parsed into the object & objects don't have if-else or loops or comparisons. So keep that in mind. So object follows a syntax which can't have if-else or loops or comparisons.



//Summarising:
/*
In react we have predefined render function called ReactDOM.render(). which has some pre defined rules. However we made a custom render function in customReact file.
We can make functions in main file too. But don't execute with func() syntax.
we can use variables in return func.
React.createElement() is used to create elements. It has some rules.(Babel Functionality)

We can use import jsx from jsx to manage these evaluated expressions too. But it's complex learn it later. Github -> Facebook -> React -> packages-> react -> src -> jsx ->ReactJSXElement.js  //There u can find reactCreateElement function.

Use react -> script from github to understand the syntax of react. But when u are pro in it. Explore Babel.

Read documentation of react only when u have completed all the concepts.




*/
