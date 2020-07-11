
// SELECTORS
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')


//EVENT LISTENERS
document.addEventListener('DOMContentLoaded', getTodos)
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)



//FUNCTIONS
function addTodo(e) {
    e.preventDefault()
    // TODO DIV
    // Tạo một thẻ div có class là todo
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    // Create LI
    // Sau đó tạo những thẻ li có class là todo-item
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    // li có class là todo-item là thẻ con của của div có class là todo
    todoDiv.appendChild(newTodo)
    saveLocalTodos(todoInput.value)
    // CHECK MARK BUTTON
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)
    // CHECK TRASH BUTTON
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)
    // APPEND TO LIST
    todoList.appendChild(todoDiv)
    // CLEARE VALUE ON INPUT
    todoInput.value = ''
}


function deleteCheck(e) {
    const item = e.target
    // Nếu item được target đến mà có class là trash-btn thì xoá đi 
    // console.log(e.target)
    if (item.classList.contains('trash-btn')) {
        const todo = item.parentElement
        todo.classList.add('fall')
        removeLocalTodos(todo)
        // Bắt sự kiện khi hết transition
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
    } else if (item.classList.contains('complete-btn')) {
        // item.parentElement là lấy div cha của cái target
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}


function filterTodo(e) {
    // childNodes là mấy thằng con của DIV cha
    const todos = todoList.childNodes
    todos.forEach(todo => {
        switch (e.target.value) {
            case "all":
                todo.style.display = 'flex'
                break
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = 'none'
                }
                break
            case "uncompleted":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = 'none'
                }
            default:
                break
        }
    })
}

function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}


function getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(todo => {
        // Tạo một thẻ div có class là todo
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')
        // Create LI
        // Sau đó tạo những thẻ li có class là todo-item
        const newTodo = document.createElement('li')
        newTodo.innerText = todo
        newTodo.classList.add('todo-item')
        // li có class là todo-item là thẻ con của của div có class là todo
        todoDiv.appendChild(newTodo)
        // CHECK MARK BUTTON
        const completedButton = document.createElement('button')
        completedButton.innerHTML = '<i class="fas fa-check"></i>'
        completedButton.classList.add('complete-btn')
        todoDiv.appendChild(completedButton)
        // CHECK TRASH BUTTON
        const trashButton = document.createElement('button')
        trashButton.innerHTML = '<i class="fas fa-trash"></i>'
        trashButton.classList.add('trash-btn')
        todoDiv.appendChild(trashButton)
        // APPEND TO LIST
        todoList.appendChild(todoDiv)
    })
}

function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    // console.log(todo.children)
    const todoIndex = todo.children[0].innerText;
    // console.log(todoIndex)
    // console.log(todos.indexOf(todoIndex));
    todos.splice(todos.indexOf(todoIndex), 1)
    localStorage.setItem('todos', JSON.stringify(todos))
}
