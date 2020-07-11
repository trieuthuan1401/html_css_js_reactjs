import React from 'react'
import PropTypes from 'prop-types'

function TodoList(props) {
    const { todos, onTodoClick } = props;
    function handleClick(todo) {
        // Néu mà hàm này khác null
        if (onTodoClick) {
            onTodoClick(todo)
        }
    }
    return (
        <div className='todo_list'>
            <ul>
                {
                    todos.map(todo => (
                        <li
                            key={todo.id}
                            onClick={() => { handleClick(todo) }}
                        >
                            {todo.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
}
TodoList.defaultvalue = {
    todos: [],
    onTodoClick: null,
}

export default TodoList

