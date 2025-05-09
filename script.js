function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const li = document.createElement("li");
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            taskList.removeChild(li);
        };
        li.appendChild(taskSpan);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
document.getElementById("addTaskButton").addEventListener("click", addTask);

document.getElementById("taskInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
