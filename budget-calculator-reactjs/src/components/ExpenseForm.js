import React from 'react'
import { MdSend } from 'react-icons/md'


export const ExpenseForm = ({ handleCharge, handleAmount, handleSubmit, charge, amount, edit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="expense">Chi tiêu</label>
                    <input

                        type="text"
                        className='form-control'
                        id='charge'
                        name='charge'
                        value={charge}
                        onChange={handleCharge}
                        placeholder='Chi tiêu cái gì...'

                    />
                </div>
                <div className="form-group">
                    <label htmlFor="expense">Khoảng tiền:</label>
                    <input

                        type="text"
                        className='form-control'
                        id='amount'
                        name='amount'
                        value={amount}
                        onChange={handleAmount}
                        placeholder='Chi tiêu bao nhiêu...'

                    />
                </div>
            </div>
            <button
                className="btn"
                type='submit'>
                {edit === true ? "Chỉnh sửa chi tiêu" : " Nhập sổ chi tiêu"}
                <MdSend className='btn-icon' />
            </button>
        </form>
    )
}
