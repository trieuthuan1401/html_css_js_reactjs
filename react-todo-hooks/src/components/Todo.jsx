import React from "react";

export default function Todo({
  todo,
  setTodos,
  todos,
  setInputText,
  setEditId,
  inputRef,
}) {
  const deleteHandler = () => {
    setTodos([...todos].filter((el) => el.id !== todo.id));
    setInputText("")
  };

  const completedHandler = () => {
    setTodos(
      [...todos].map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const editHandler = () => {
    setInputText(todo.text);
    setEditId(todo.id);
    inputRef.current.focus();
  };

  return (
    <ul className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </li>
      <button className="complete-btn" onClick={() => completedHandler()}>
        {" "}
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={() => deleteHandler()}>
        {" "}
        <i className="fas fa-trash"></i>
      </button>

      <button className="complete-btn edit-btn" onClick={editHandler}>
        {" "}
        <i className="fas fa-edit"></i>
      </button>
    </ul>
  );
}
