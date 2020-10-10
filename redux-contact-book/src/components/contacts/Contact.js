/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'


import { deleteContact } from '../../actions/contactAction'


const Contact = ({ contact }) => {
    const { id, name, phone, email } = contact
    let dispatch = useDispatch()
    return (
        <tr key={id}>
            <td className="row" >
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" name="" id="" className='custom-control-input' />
                    <label className='custom-control-label' ></label>
                </div>
            </td>
            <td>
                <Avatar className='mr-2' name={name} size={45} round={true} ></Avatar>
                {name}
            </td>

            <td>{phone}</td>
            <td>{email}</td>
            <td className='actions'>
                <Link to={`/contact/edit/${id}`}>
                    <span className='material-icons mr-2'>edit</span>
                </Link>
                <a>
                    <span className='material-icons text-danger' onClick={() => dispatch(deleteContact(id))} style={{ cursor: 'pointer' }}>remove_circle</span>
                </a>
            </td>
        </tr>
    )
}

export default Contact
