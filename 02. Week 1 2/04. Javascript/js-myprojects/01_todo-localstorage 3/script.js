document.addEventListener('DOMContentLoaded', () => {

    let InputbyUser = document.getElementById('todo-input')
    let AddTaskBtn = document.getElementById('add-task-btn')
    let todoList = document.getElementById('todo-list')

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach((task) => { renderTasks(task)  
    });

    AddTaskBtn.addEventListener('click', () => {

        let taskText = InputbyUser.value.trim()
        if(taskText === "") return;

        let FinalTask = {
            id : Date.now(),
            text : taskText,
            completed : false,
        };

        tasks.push(FinalTask)
        saveToLocal();
        renderTasks(FinalTask); //so as soon as task is pushed, li can be created. Otherwise it is being called when page reloads
        InputbyUser.value = "";
        console.log(tasks);

    })


    function saveToLocal(){
        localStorage.setItem("tasks", JSON.stringify(tasks))

    }

    function renderTasks(task){
        //console.log("hello")
        //console.log(task.text)
        const li = document.createElement('li')
        li.setAttribute('Data-id', task.id); //it is like setting html attribute ie <li Data-id = 'task.id'> </li>
        //if(task.completed) li.classList.add("completed")   //didn't know why it is even there
        li.innerHTML = `<span>${task.text}</span>
            <button>Delete</button>`;

        li.addEventListener('click', (e) => {
            if(e.target.tagName === 'BUTTON') return;

            //task.completed = !task.completed;  //didn't know why it is even there
            li.classList.toggle("completed")
            saveToLocal();

        })

        li.querySelector('button').addEventListener('click', (e) => {
            e.stopPropagation;  //Stops event bubbling
            tasks = tasks.filter( (t) => t.id !== task.id);
            li.remove() //removed the li which wasn't filtered, may be after filtering the non filtered elements get into parent element
            saveToLocal();

        })

        todoList.appendChild(li)
        
        



    }









})

//Due to local storage, todo list will be loaded even if live server is stopped & restarted.