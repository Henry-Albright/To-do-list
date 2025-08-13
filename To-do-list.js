let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");

function addTask() {
    let taskText = taskInput.ariaValueMax.trim();
    if (taskText === "") {
        alert("Please Enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.className = "task";
    li.textContent = taskText;

    let deleteBtn = document.createElement("span");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li)
    });

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
}
addButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
})