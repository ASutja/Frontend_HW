import './styles.scss';

$('#addTaskBtn').click(function () {
    const taskText = $('#newTask').val();
    if (taskText) {
        const taskItem = $('<li class="list-group-item"></li>').text(taskText);
        taskItem.click(function () {
            $('#taskModalBody').text($(this).text());
            $('#taskModal').modal('show');
        });
        $('#taskList').append(taskItem);
        $('#newTask').val('');
    }
});
