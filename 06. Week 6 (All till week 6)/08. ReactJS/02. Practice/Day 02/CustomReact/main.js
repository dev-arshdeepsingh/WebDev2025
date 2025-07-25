

/* Version 1

function customRender(htmlData, container){
    const element = document.createElement(htmlData.type)
    element.innerHTML = htmlData.children
    element.setAttribute('href', htmlData.props.href)
    element.setAttribute('target', htmlData.props.target)

   
    container.appendChild(element)

}*/

function customRender(htmlData, container){
    const element = document.createElement(htmlData.type)
    element.innerHTML = htmlData.children
    for (const key in htmlData.props) {
        if( key === 'children') continue
        element.setAttribute(key, htmlData.props[key])
    }

    container.appendChild(element)

}


let Harry_Potter = document.getElementById('root')

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'

}

customRender(reactElement, Harry_Potter);


//Sir further made it more efficient so see it in sir's code too