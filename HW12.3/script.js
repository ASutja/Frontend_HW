const taskList = document.getElementById("taskList");

    taskList.addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") {
            event.target.parentElement.remove();
        }
    });

    const addTaskButton = document.getElementById("addTask");

    addTaskButton.addEventListener("click", function() {

        const newTaskInput = document.getElementById("newTask");
        const taskText = newTaskInput.value;
        
            if (taskText !== "") {
                const newTask = document.createElement("li");
                newTask.textContent = taskText;

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "x";
                
                newTask.appendChild(deleteButton);
                taskList.appendChild(newTask);
                newTaskInput.value = "";
            }
    });
