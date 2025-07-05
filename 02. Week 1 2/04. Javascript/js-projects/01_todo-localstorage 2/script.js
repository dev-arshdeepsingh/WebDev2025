document.addEventListener("DOMContentLoaded", function() { //So its a good idea to add this event as our code will run only when the page is loaded.

    //See button used it is not of a form so don't use submit as an event
// Grab the elements first


const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list")

//For storing the tasks, use array

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];    //now the item set in local storage is a string, so we need to convert it into an array to make the "||" operation valid & hence we used JSON.parse() to convert it into an array. We are doing just to make sure that the array can have both empty and non-empty tasks.
//We are using || in above to manage the both cases when the local storage is empty or it has tasks already. It will be done when page reloads or DOMContent reloads.
// Now if it already has tasks in local storage, then 1st as they are string so we will convert it back into array. Then we will display them on the screen using renderTask() function.
tasks.forEach(task => renderTask(task)); //as we already know forEach so we know that here, "tasks" is arrayName & "task" is the each element of the array.


addTaskButton.addEventListener('click', () => {
    const taskText = todoInput.value.trim();   //used to trim if user add so many spaces at end
    if(taskText === "") return;   //will terminate the eventListener if no text is added

    const newTask ={ 
        id: Date.now(), //We want to assign unique IDs to new task, as of now we don't know any method hence using Datenow()
        text: taskText,
        completed: false
    }

    tasks.push(newTask);  //as newTask is an object hence we are creating an array of objects.
    saveTasksToLocalStorage();

    renderTask(newTask) //it will refresh the page immediately but there are better ways of this in react.
    todoInput.value = ""; //clearing the input after completing the event
    console.log(tasks)
    
})

//Now lets see if we can add task in local stoage as well
//A browser has access to local storage API, we just have to use the keyword localStorage in JS

function saveTasksToLocalStorage(){
    localStorage.setItem("tasks", JSON.stringify(tasks));   //localStorage has only 3 methods, setItem, getItem, removeItem. Based on need we use them. Now here we are using setItem to store the tasks in local storage. setItem takes 2 arguments, first is the key and second is the value. We are using JSON.stringify to convert the tasks array into a string. Because the key in setItem can be of any type but the value has to be a string. That's why we are using JSON.stringify. JSON also only has 2 methods, stringify and parse. Stringify is used to convert the array into a string and parse is used to convert the string into an array. If possible keep name same ie setItems('Tasks', JSON.Stringify(Tasks))
     //Now we will call this func. at a place where we actually push tasks into the array we created.
} //udse it properlu

//everytime we call this saveTasksToLocalStorage() function, it will save the tasks in local storage but everytime but it will rewrite the whole local storage, ie It do not update the old tasks, it just rewrite or overwrites them again in local storage.


//Now, lets see how to read the tasks from local storage. We will create a func. rendeTask. And note thet render means to show or display the tasks on the screen.
function renderTask(task){
    const li = document.createElement('li'); 
    li.setAttribute('data-id', task.id); //setAttribute(name, value) → A method used to set a new attribute or change the value of an existing one.
    if(task.completed) li.classList.add("completed")
    li.innerHTML = `
    <span>${task.text}</span>
    <button>Delete</button>
    `;
    li.addEventListener('click',(e) => {
        if( e.target.tagName === "BUTTON") return;
        task.completed = !task.completed  //ie Trur -> False & vice-versa
        li.classList.toggle('completed')
        saveTasksToLocalStorage(); //as we are manipulating here a lot hence changes needs to be saved
    })

    li.querySelector('button').addEventListener('click', (e) => { //this line means, we are referring to button inside li.
        e.stopPropagation()   //It is used to stop event bubbling, as continously using same event might effect the parent element too. Here it will prevent toggle from firing.
        tasks = tasks.filter(t => t.id !== task.id) //now all elements which do not match the selected task's id will be filtered & saved to array named "tasks". & the one which matches the id will be removed from array, here t represents each & every element of array. task.id represents the id of task that has to be deleted or on which i am clicking delete as we are still under the render func. This is how filter() method works, search on mdn or gpt if reqd.
        li.remove()  //it will the element which was not stored back to array ie the on we want to delete.
        saveTasksToLocalStorage()

    })
    todoList.appendChild(li);
    
}   //What I want is when the page loads, the tasks should be displayed on the screen. So all tasks the must start restoring again in the array. Hence the code that do so must be executed as soon as the page reloads.

}) //program ends here





// Some Notes:
//JSON.stringify() is used to convert the array or given datatype into a string & JSON.parse() is used to revert it.
// getElementby is often replaced by querySelector() or querySelectorAll() in which parameter passed in single/double quotes is TagName/#Id/.Class