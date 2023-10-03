// Define the vars

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");

// Load all event listeners

loadEventListners();

function loadEventListners(){

    // DOM Load Event
    document.addEventListener("DOMContentLoaded", getTaks);

    // Add Task Event
    form.addEventListener("submit", addTask);

    // Remove Task Event
    taskList.addEventListener("click", removeTask);

    // Clear task 
    clearBtn.addEventListener("click", clearTask);
    
    // filter Task
    filter.addEventListener("keyup", filterTask);
}

function getTaks(){
    let tasks;

    if(localStorage.getItem("tasks") === null){
       tasks = [];
    } else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(task){
    // Create a li element
    const li = document.createElement("li");

    // Add class to li
    li.className = "collection-item";

    // Create A text node and append to li
     li.appendChild(document.createTextNode(task));

    // Create a new link element
    const link = document.createElement("a");

    // Add Class to link
    link.className = "delete-item secondary-content";

    // Add icon HTML
    link.innerHTML = `<i class="fa fa-remove"></i>`;

    // Append the link to li 
    li.appendChild(link);

    // Append the link to ul
    taskList.appendChild(li);
    })
}

// Add task

function addTask(e){
  e.preventDefault();  
  
  if(taskInput.value === ""){

    alert("Please fill the task");

  } else{

    // Create a li element
    const li = document.createElement("li");

    // Add class to li
    li.className = "collection-item";

    // Create A text node and append to li
     li.appendChild(document.createTextNode(taskInput.value));

    // Create a new link element
    const link = document.createElement("a");

    // Add Class to link
    link.className = "delete-item secondary-content";

    // Add icon HTML
    link.innerHTML = `<i class="fa fa-remove"></i>`;

    // Append the link to li 
    li.appendChild(link);

    // Append the link to ul
    taskList.appendChild(li);

    // Store to LS
    storeLocalStorage(taskInput.value);

    // Clear the input value
    taskInput.value = "";
  }

}

// Add TO LS

function storeLocalStorage(task){
    let tasks;

    if(localStorage.getItem("tasks") === null){
       tasks = [];
    } else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove Task

function removeTask(e){
    if(e.target.parentElement.classList.contains("delete-item")){
        if(confirm("Are you sure")){
            e.target.parentElement.parentElement.remove();
            // Remove from Ls
            removeTaskFromLS(e.target.parentElement.parentElement);
        }
    }
}

function removeTaskFromLS(taskItem){
    let tasks;

    if(localStorage.getItem("tasks") === null){
       tasks = [];
    } else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    })

    localStorage.setItem("tasks", JSON.stringify(tasks))
}

// Clear Task
function clearTask(e){
 taskList.innerHTML = "";

//  const chagetoArr = Array.from(taskList.children);
 
//  chagetoArr.forEach(function(li){
//     li.remove();
//  })

 clearLs();
   
}

function clearLs(){
    localStorage.clear();
}

function filterTask(e){
    const text = e.target.value.toLowerCase();

    const allLi = document.querySelectorAll(".collection-item");

    allLi.forEach(function(task){
        const item = task.firstChild.textContent;

        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    })
}




// const arr = ["Hello", "Hai", "Vanakam"];

// console.log(arr.indexOf("Hola"));


// var arr = [1,2,3];

// console.log(arr);

// let convertArrtoSrting = JSON.stringify(arr);

// console.log(convertArrtoSrting)

// let stringtoArr = JSON.parse(convertArrtoSrting);

// console.log(stringtoArr);

// const fruits = ["apple", "kiwi", "orange"];

// fruits.splice(1, 2);

// console.log(fruits);