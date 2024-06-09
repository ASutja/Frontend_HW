"use strict";

$('#addTaskBtn').click(function () {
  var taskText = $('#newTask').val();
  if (taskText) {
    var taskItem = $('<li class="list-group-item"></li>').text(taskText);
    taskItem.click(function () {
      $('#taskModalBody').text($(this).text());
      $('#taskModal').modal('show');
    });
    $('#taskList').append(taskItem);
    $('#newTask').val('');
  }
});
