const data = [
    {
        description:'Выучить jquery', 
        status: 'open'
    },
    {
        description:'Выучить typescript', 
        status: 'close'
    },
    {
        description:'Стать js-гуру', 
        status: 'open'
    }
]

class TodoService {
    constructor() {
        this.todoList = [...data]
    }
    addTodo(todo) {
        this.todoList.push(todo)
        return this.todoList
    }

    removeTodo(id) {
        this.todoList.splice(id, 1)
        return this.todoList
    }

    changeTodo(id, status){
        this.todoList[id].status = status
        return this.todoList

    }


}

export default new TodoService() 
