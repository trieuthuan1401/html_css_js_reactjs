import React, { useState } from 'react'
import PropTypes from 'prop-types'

function TodoForm(props) {
    // onSubmit đây là của thằng cha
    const { onSubmit } = props;
    const [value, setValue] = useState('');

    function handleValueChange(e) {
        setValue(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!onSubmit) return;
        // tạo đối tượng để sau này dễ phát triển dễ thêm nhiều field vào.
        const formValues = {
            title: value,
        }
        // Truyền hết cái object formValues cho thằng cha onSubmit
        onSubmit(formValues);
        // Sau khi truyền qua phải gán lại giá trị mặc định cho thằng value
        setValue('')
    }
    return (
        <form onSubmit={handleSubmit} type='reset'>
            <input type="text" onChange={handleValueChange} value={value} />
        </form >
    )
}

TodoForm.propTypes = {
    // Khai báo kiểu dữ liệu của props.
    onSubmit: PropTypes.func,
}
// Gán giá trị mặc định cho nó khi thằng cha k truyền dữ liệu xuống. 
TodoForm.defaultProps = {
    onSubmit: null,
}

export default TodoForm

