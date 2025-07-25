//This file acts as main.jsx ie entry point of the react application  
//So rendering of file will be done here


function customRender(reactElement, container){  //here we are passing the html element & the container(ie div) where this html has to inject
    /*  Version 1:
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)  //Here we are repeating things so let's use for in loop to increase efficiency because god knows how many attributes we will have in future.

    container.appendChild(domElement)
    */
    //Version 2:
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])  //As we know, objectName.objectName[key] is used to access the value of the key. For in loop is used to iterate each key of the object.
    }
    container.appendChild(domElement)
}

const reactElement = { //If we used react, then it was automatically available to use whenever we exported/ imported it.
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
} //It's the same format in which we imports from components returning html. This is how the import of html is done by react.

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)


//Whenever a component in react returns a html tag then how react see/ save it is:
/*  
    const reactElement = {
        type: 'a',      //anchor tag
        props: {
            href: 'https://google.com',             //attribute of anchor tag
            target: '_blank'                        //attribute of anchor tag
        },
        children: 'Click me to visit google' //content of anchor tag
    } //This is how react library works internally.

    So, it saves it in tree structure:
*/ 

//In react also, things works the same way. The html data we send is stored as object in tree structure.
// Then method runs, which creates new html element and injects it in the container.

//Note: JSX just means javascript + html

//Summary:
// We created a container which handles the html element.
//We created html content in the form of object because react library works internally in the form of object.
//Then we created a function which takes the object and injects it in the container. ie takes html & adds it to the 'root' named div.
//This func is a custom render function. However in react we have predefined render function called ReactDOM.render(). which has some pre defined rules.