import React, { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Clock from './components/Clock'
import MagicBox from './components/MagicBox'

function App(props) {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Liễu Triệu Thuận" },
    { id: 2, title: "Nguyễn Nhật Thiên" },
    { id: 3, title: "Nguyễn Thành Long" },
  ])
  function handleTodoClick(todo) {
    // findIndex trả về vị trí index trong mảng
    const index = todoList.findIndex(item => item.id === todo.id)
    // index < 0 là k tìm ra
    if (index < 0) return;
    // Clone state mới ra rồi xử lí tránh việc xử lí trên state cũ
    let newTodoList = [...todoList];
    // splice xoá ngay tại vị trí index 1 đơn vị
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  function handleTodoFormSubmit(formValue) {
    let newTodoList = [...todoList]
    let newFormValue = {
      id: newTodoList.length + 1,
      // Lấy lại tất cả các thuộc tính bên Object formvalue
      ...formValue,
    }
    newTodoList.push(newFormValue)
    setTodoList(newTodoList)
  }

  return (
    <div className='app'>
      {/* <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={(todo) => handleTodoClick(todo)} /> */}
      {/* <Clock /> */}
      <MagicBox />
    </div>
  )
}


export default App

