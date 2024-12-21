// declare variables and store the input, add button 
// and ul element in the variable
let input_task = document.getElementById("input_task");
let add_task = document.getElementById("add_task");
let task_list = document.getElementById("task");

// create a function that will be executed whenever
// the button is click or the function to be called by
// the click event
function click(){
    let new_item = document.createElement("li");
    task_list.appendChild(new_item);
    new_item.innerHTML = input_task.value;
    new_item.classList.add("task-item");
    input_task.value = "";
}



// add an event listener to the add button
add_task.addEventListener('click', click);