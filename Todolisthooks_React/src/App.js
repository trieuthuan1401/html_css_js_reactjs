import React, { useState } from 'react'
import './App.css'
// import PropTypes from 'prop-types'

function Todo(props) {
  const { todos } = props;
  const { completeTodo } = props;
  const { removeTodo } = props;
  return (
    <ul className='todo-list'>
      {
        todos.map((todo, index) =>
          <li
            className="todo-list__item"
            key={index}
            style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
          >
            <span>{index}.</span>
            {todo.title}
            {/* onClick={() => completeTodo(index)} ==> Khi click thì nó mới gọi hàm  */}
            {/* onClick={completeTodo(index)} ==> * ==> Khi nó render ra các li thì nó sẽ thực thi luôn mà k cần phải click */}
            <button onClick={() => completeTodo(index)}>Complete</button>
            <button onClick={() => removeTodo(index)}> RemoveTodo</button>
          </li>

        )
      }
    </ul>
  )
}
function TodoForm(props) {
  const { addTodo } = props;
  const [value, setvalue] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setvalue('');
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" value={value} placeholder='Add Todo...' onChange={e => { setvalue(e.target.value) }} />
    </form>
  )
}
export default function App() {
  const [todos, settodos] = useState([
    {
      title: "Learn about React",
      isCompleted: false
    },
    {
      title: "Chat with my friends",
      isCompleted: false
    },
    {
      title: "Meet friends for lunch",
      isCompleted: false
    }
  ])
  function addTodo(title) {
    // clone todos
    const newTodos = [...todos, { title: title, isCompleted: false }];
    settodos(newTodos);
  }
  function completeTodo(index) {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    settodos(newTodos);
  }
  function removeTodo(index) {
    const newTodos = [...todos];
    // Xoá tại vị trị index và xoá đi 1 đơn vị
    newTodos.splice(index, 1);
    settodos(newTodos);
  }
  return (
    <div className="app">
      <TodoForm addTodo={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
    </div>
  )
}


