//alert() statmrnts are frustrating so don't use them in proffesional code.

//In DOM manipulation we majorly do 2 things: 1. get the element 2. Event listening (eg: mouse click, key press, mouse move, hover etc.)  
//The 2 things stated above are connected to each other.
//Both of these things are handled by programming.


//DOM is all about grabbing the element & listening to the event.







//example 1: Changing the text of a paragraph when a button is clicked.
//explore document.querySelector() on mdn //In this, we pass CSS selector's version of elemrnt like .,*, # etc. 

document
  .getElementById("changeTextButton")  //In this, we first select the element then talk about it's event
  .addEventListener("click", function () {   //.addEventListener() is used to listen to the event or describe the event. Here, we can see a list of events recommended by JS. //Search all the events in JS on MDN. No need to learn all of them. Just search for the event you want to use.
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "the paragraph is changed";
  });

  //.addEventListener takes 2 arguments: 1. The event to listen to 2. The function to run when the event occurs.
  //The func here is passed as parameter hence it is a higher order function.
  //The func. don't need to have name as it is only gonna be used here.
  //if we write console.log(this) inside the function we will get the element which is button on console.
  //Now, if we have used arrow func. ie () => {} then we would have got the window object on console which is a global context. So, now we know that "This" in normal func. points to current context while for arrowfunc. it points to global context whuch is window.
  //Summary: Grab the element, listen to the event, run the function.










//example 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");   //used to select the first child of the element. Then we add a class to it using classList
  });
//Choose the element by triggering which the action is made(eg: button), then choose the event that triggers the action(eg: click), then grab the element which gets affected.


//DOM & HTML are diff. , html is just markup while DOM is the "processed elements in the document  tree in browser's memory".

//DOM is not HTML. HTML is not DOM. DOM is a programming interface for HTML. HTML is just a markup language which when processed by browser using C++ then a document in the form of tree is generated in the memory & that tree is DOM.

//We can use as methods as we want using "." operator.








//example 3

document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "brown";
  coffeeType.style.padding = "5px";
});

//In the prev. eg , we added a class called highlight whuch contained pre written css.
//But we can also add css to the element using style property. eg: coffeeType.style.backgroundColor = "brown";
// So, just store the element which is affected after the action & event in a container. ie store document.getElementById() in a variable & then add the reqd. methods/properties to it using "." operator.
// getElementById() is also called reference to the element by id.











//example 4 : How to add a new item to the shopping list.
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";

  document.getElementById("shoppingList").appendChild(newItem);
});








//example 5: How to remove the last item from the task list.
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });

  //.lastElementChild is used to select the last child of the element.
  //.remove() is used to remove the element from the DOM.
  //.firstElementChild is used to select the first child of the element.
  //.appendChild() is used to add a new child to the element.
  // getElement grabs the element while addEventListener listens to the event.









// example 6

document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("chaicode");
  });

  //It is impossible to learn all these events like click, double click, mouse over, mouse out, mouse down, mouse up, mouse move, key press, key down, key up, etc. So, it is better to learn them when we need them. Use MDN or Chatgpt to search the events for particular actions.











// example 7 Event Delegation

document.getElementById("teaList").addEventListener("click", function (event) {   //We can also pass the event that occured (eg: click) as a parameter to the function. Now if we do console.log(event) inside func. ,  we will get all the things(properties) that happened on that event like coordinates in the form X & Y of the click etc etc. lly, we will also get a target property, target property tells us the name of element on which the event happens. It gives us access to the name , class, text, value etc of the element which was clicked.
  if (event.target && event.target.matches(".teaItem")) {   //Here we are checking that firstly, event.target must happen(ie true) && It's class must match to class teaItem. ("." is used to select class while # is used to select Id)
    alert("You selected: " + event.target.textContent); //here as we know event.target will be selected list & .textContent will display text in that list ie tea name
  }
});
//So event.target will give the value of type pf tea clicket
//event.target is a very useful property used in event delegation.
//Workflow: Checks if event happens which is click -> checks if event matches the class named teaItem -> if yes then alert of added text executes.








//example 8 Form Handling

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;  //Now, somehow ("feedbackInput") automatically detects the iD of input even when label also had same iD name(#Mystery). But yeah .value will give the value of input field filled through the form on web page. And this value is stored in variable named feedback.
    console.log(feedback);
    document.getElementById("feedbackDisplay").textContent = `Feedback is: ${feedback}`; //It added the feedback in <p> tag with id feedbackDisplay.
  });

//Here, our event is submit. So, when we submit the form, the event will be triggered. It can be click too but we prefer submit.
//We use preventDefault() in HTML forms to stop the browser’s default behavior of submitting the form and reloading the page. We stop the default submission and send data manually. Without this, The browser will submit the form and reload the page, and any custom JavaScript code after the submission may not run.
// Note: console.log(document.getElementById("feedbackInput")) will give us the "input field element" with details like type, value, placeholder, etc on console.
//But, console.log(document.getElementById("feedbackInput").value) will give us the value of input field filled through the form on web page. And thats what we finally stored in the feedback variable.







//example 9

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

//The DOMContentLoaded event ensures that your JavaScript runs only after the full HTML document is loaded and parsed.
//It checks if the DOM is fully loaded & then runs the code.
//worlflow: checks if DOM is loaded ie checks the event -> if yes then textContent of domStatus is changed to "DOM fully loaded".









//example 10
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
  });

//The above eg is used in toggling light mode & dark mode in mobiles or websites.
//Inside event listener function, it is safe to first store the grabbed element [ie document.getElementById("descriptionText");]  in a variable & then apply the methods/properties like textContent, classList, etc to it.
// classlist.add("class_name") is used to add a class to the grabbed element.
// classlist.remove("class_name") is used to remove a class from the element.
// classlist.toggle("class_name") is used to toggle a class to the element. ie we can add or remove a class to the element by doing the event which is click in above case.






//Now, we can use document.getElementBy on console of various websites (obviously using browser inspect) and edit their code temporarily just to see how it works just for educational purposes.
//Html collection on browser's console is also displayed as array.
//Nodelist looks like an array but it is not an array. It is a collection of nodes. It needs to be converted to array.





  //HW: To add color in feedback recieved in example 8.
  //My solution:

  /*document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;  //Now, somehow ("feedbackInput") automatically detects the iD of input even when label also had same iD name(#Mystery). But yeah .value will give the value of input field filled through the form on web page. And this value is stored in variable named feedback.
    console.log(feedback);
     let abc = document.getElementById("feedbackDisplay")
     abc.textContent = `Feedback is: ${feedback}`; //It added the feedback in <p> tag with id feedbackDisplay.
     abc.style.color = "red";
     abc.style.backgroundColor = "yellow";  
  });  */


  //Solving it like abc.textcontent.style.color = "red"; won't work.
// abc.textContent returns the text content (a string), not an element. And css style are applied to elements not strings.
//Strings do not have a .style property.
// So you'll get an error like:
// "Uncaught TypeError: Cannot read properties of undefined (reading 'style')".

//That's why I separated the text content from the element & added only document.getElementById("feedbackDisplay") to variable 'abc' then applied the style & textContent to it separately.


