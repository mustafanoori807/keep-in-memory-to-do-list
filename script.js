let taskList = document.getElementById("task-list");
let inputTask = document.getElementById("input-task");
let addButton = document.getElementById("add-task-button");
let buttonDelete = document.getElementsByClassName("delete-btn");
let buttonCheckTask = document.getElementsByClassName("checkTask");

function createNewTask(){
    let inputValue = inputTask.value;
    taskList.insertAdjacentHTML(
        "beforeend",
        `<li>
                             <input type="checkbox" class="checkTask"> <span class = "task">${inputValue}</span>
                             <button class="delete-btn"></button>

                 </li>`
    );