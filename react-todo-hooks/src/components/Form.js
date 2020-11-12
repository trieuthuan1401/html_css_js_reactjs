import React, { useRef } from 'react'

export default function Form({ setInputText, inputText, todos, setTodos, setStatus, editId, setEditId, inputRef }) {


  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }

  const submitTodoHandler = (e) => {
    e.preventDefault()

    if (editId) {
      setTodos([...todos].map(todo => todo.id === editId ? { ...todo, text: inputText } : todo))
      setEditId(null)
    } else {
      setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }])
    }
    setInputText("")
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <form >
      <input onChange={inputTextHandler} type="text" className="todo-input" value={inputText} ref={inputRef} />
      <button onClick={submitTodoHandler} className="todo-button" type="submit" >
        <i className="fas fa-plus-square" />
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}
