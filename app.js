 function addTask(s) {
    var task = $('<li></li>');
    $('li', task).append('<span></span>');
    $('span', task).text(s);
    $('li', task).append('<button class = "delete_task">Удалить</button>');
    $('.delete_task', task).click(function(){$(this).parent().remove()});
    $('#root ul').append(task);
}

$(function(){
    $('#root').append('<ul></ul>');
    addTask("Сделать задание #3 по web-программированию");
    $('#root').append('<input id="add_task_input"> <button id="add_task">Добавить</button>');
    $('#add_task').click(function(){addElement($('#add_task_input').attr('id'))});
    
})
