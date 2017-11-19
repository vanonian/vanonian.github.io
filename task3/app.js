 function addTask(s) {
    var task = $('<li><span></span> <button class = "delete_task">Удалить</button></li>');
    $('span', task).text(s);
    $('.delete_task', task).click(function(){$(this).parent().remove()});
    $('#root ul').append(task);
}

$(function(){
    $('#root').append('<ul></ul>');
    addTask("Сделать задание #3 по web-программированию");
    $('#root').append('<input id="add_task_input"> <button id="add_task">Добавить</button>');
    $('#add_task').click(function(){addTask($('#add_task_input').val())});
})
