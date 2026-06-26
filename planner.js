function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    // COMPLETE button
    let completeBtn = document.createElement("button");
    completeBtn.textContent = " Complete";
    completeBtn.onclick = function () {
        li.style.textDecoration = "line-through";
    };

    // DELETE button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = " Delete";
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
}