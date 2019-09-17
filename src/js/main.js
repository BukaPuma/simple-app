<<<<<<< HEAD
import $ from 'jquery'

import todoService from './TodoService'
import {
    todoItem,
    todoList,
    btnAddTodo,
    inputTodo
} from './constants'

function renderTodoList(list, container){
    container.html('')

    list.map((todo, id)=>{
        const todoComponent = todoItem(todo, id)
        container.html(container.html() + todoComponent)

    })
    $('button[data-type="status"]').click((e)=> {
        const id =  $(e.currentTarget).attr('data-id')
        const status = $(e.currentTarget).attr('data-status') === 'open' ? 'close' : 'open'

        renderTodoList(todoService.changeTodo(id, status), container)
    })

    $('button[data-type="remove"]').click((e)=> {
        const id = $(e.currentTarget).attr('data-id')
        renderTodoList(todoService.removeTodo(id), container)
    })

    
}

$(document).ready(() => {
    renderTodoList(todoService.todoList, todoList)

})
=======
import $ from 'jquery';

$(document).ready(() => {
    
    //Вывод текста в заданной позиции
    const searchText = $('ul li div div:nth-child(5) button:nth-child(2)').text();
    alert(searchText);

    //вывод текста по нажатию заданной кнопки
    const searchButton = $('ul li div div:nth-child(5) button:nth-child(2)');
        searchButton.click(function() {
        alert(searchText);
    } )


    

    //$('ul li div div:nth-child(5) button:nth-child(2)').text('Finded');



})
>>>>>>> 89ff672f836ec7c95599c97519a6b7409188c394
