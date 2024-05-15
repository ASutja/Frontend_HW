const taskList = document.querySelector(".js--todos-wrapper");

loadTasks();

taskList.addEventListener("click", function(event) {
    const target = event.target;
    const task = target.closest(".todo-item");
    if (!task) return;

    if (target.classList.contains("todo-item__delete")) {
        task.remove();
        saveTasks(); 
    }
    else if (target.type === "checkbox") {
        task.classList.toggle("completed", target.checked);
        saveTasks(); 
    }
});

const addTaskButton = document.querySelector(".form__btn");
addTaskButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const newTaskInput = document.querySelector(".form__input.js--form__input");
    const taskText = newTaskInput.value.trim();
    if (taskText) {
        const newTask = createTaskElement(taskText);
        taskList.appendChild(newTask);
        newTaskInput.value = "";
        saveTasks(); 
    }
});

function createTaskElement(taskText, completed = false) {
    const newTask = document.createElement("li");
    newTask.classList.add("todo-item");
    if (completed) {
        newTask.classList.add("completed");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;

    const taskDescription = document.createElement("span");
    taskDescription.classList.add("todo-item__description");
    taskDescription.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("todo-item__delete");
    deleteButton.textContent = "Видалити";

    newTask.appendChild(checkbox);
    newTask.appendChild(taskDescription);
    newTask.appendChild(deleteButton);

    return newTask;
}

function saveTasks() {
    const tasks = [];

    taskList.querySelectorAll(".todo-item").forEach(function(task) {
        const description = task.querySelector(".todo-item__description").textContent;
        const completed = task.classList.contains("completed");
        tasks.push({ description, completed });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        tasks.forEach(function(task) {
            const newTask = createTaskElement(task.description, task.completed);
            taskList.appendChild(newTask);
        });
    }
}
