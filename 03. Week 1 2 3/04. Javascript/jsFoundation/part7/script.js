console.log("Hello from script");

//Web element manipulation
//In DOM we see web page as a window object.

//A Web page also called window object has 3 things JS, BOM & DOM.

//JS: It is JS we learned till now like objects, arrays, functions, etc.

//DOM refers to the elements like html tags, attributes, buttons etc.

//BOM refers to the browser object model which consists of window, document, location, history, screen, navigator, etc.

//window object can access JS, BOM & DOM.

// Now, if we do console.log(window) we will get the properties & methods of window object on browser's console. And they are endless. This is just the BOM part of window object.
// We can access those methods by '.' operator.
// Eg: window.alert("Hello");, window.outerWidth gives width of browser window, it shows the screen part of BOM etc etc. These are part of BOM.
//Navigator is also a part of BOM. eg: navigator.userAgent gives the user agent of the browser ie details about the browser. 
//Navigators are also known as web API's check it on MDN.
//Location is also a part of BOM. eg: location.href gives the url of the current page. 
//location.hostname gives the hostname of the current page. Here hostname & href are API
//pathname is another API of location which gives the pathname of the current page. & is used quite often.

//There are many more API's in BOM. But for the 80-90% of the time we will use only 3 API's which are location, navigator & screen.

//DOM
//In DOM, every element is a node or is treated as a tree.
// Eg: html-> body & head
//head -> title, meta, link, style, script  && body -> h1, p, div, etc.
//div -> p, h1, etc.  

//Manipulating these elements is called DOM manipulation.

//console.log(document); //This gives us our whole html code on browser's console also in a tree format.

//TO ACCESS ELEMENTS IN DOM, WE USE:
// We use document.getElementById() to get the element by id.
// Eg: document.getElementById("heading");
// We can also use document.getElementsByClassName() to get the element by class name.
// Eg: document.getElementsByClassName("heading");
// We can also use document.getElementsByTagName() to get the element by tag name.
// Eg: document.getElementsByTagName("h1");

//We can also use document.querySelector() to get the element by css selector.

//Homework: Search about screen, location, navigator, document on MDN.


