function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    li.textContent = taskText;
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

setInterval(() => {
    document.getElementById("taskList").innerHTML = "";
}, 3000);