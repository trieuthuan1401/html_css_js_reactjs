import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList';


function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])
  const [editId, setEditId] = useState("")
  const inputRef = useRef(null);


  useEffect(() => { getLocalTodos() }, [])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos([...todos].filter(todo => todo.completed === true))
        break
      case "uncompleted":
        setFilteredTodos([...todos].filter(todo => todo.completed === false))
        break
      default:
        setFilteredTodos([...todos])
        break
    }
  }

  //Save to LocalStorage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }


  return (
    <div className="App">
      <header>
        <h1>llieutrieuthuan's Todo List</h1>
      </header>
      <Form status={status} setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos} setStatus={setStatus} editId={editId} setEditId={setEditId} inputRef={inputRef} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} setInputText={setInputText} setEditId={setEditId} inputRef={inputRef} />
    </div>
  );
}

export default App;
