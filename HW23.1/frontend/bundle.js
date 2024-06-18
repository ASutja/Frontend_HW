$(document).ready(function() {
  function loadTasks() {
      $.ajax({
          url: 'http://localhost:5000/tasks',
          method: 'GET',
          success: function(tasks) {
              tasks.forEach(task => {
                  const taskId = task._id;
                  const newTask = $('<li class="list-group-item"></li>').text(task.task).data('id', taskId);
                  newTask.click(function() {
                      $("#taskModalBody").text($(this).text());
                      $("#taskModal").modal("show");
                  });
                  $("#taskList").append(newTask);
              });
          },
          error: function() {
              alert("Error loading tasks");
          }
      });
  }

  $("#addTaskBtn").click(function() {
      const task = $("#newTask").val();
      if (task) {
          $.ajax({
              url: 'http://localhost:5000/tasks',
              method: 'POST',
              contentType: 'application/json',
              data: JSON.stringify({ task: task }),
              success: function(response) {
                  const taskId = response._id;
                  const newTask = $('<li class="list-group-item"></li>').text(task).data('id', taskId);
                  newTask.click(function() {
                      $("#taskModalBody").text($(this).text());
                      $("#taskModal").modal("show");
                  });
                  $("#taskList").append(newTask);
                  $("#newTask").val('');
              },
              error: function() {
                  alert("Error adding task");
              }
          });
      }
  });

  loadTasks();
});
