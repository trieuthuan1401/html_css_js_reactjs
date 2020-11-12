import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, setTodos, filteredTodos, setInputText, setEditId, inputRef }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {
          filteredTodos.map(todo => <Todo todo={todo} setTodos={setTodos} todos={todos} key={todo.id} setInputText={setInputText} setEditId={setEditId} inputRef={inputRef} />)
        }
      </ul>
    </div>
  )
}
