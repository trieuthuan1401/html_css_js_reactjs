import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../../store'
import { v4 as uuidv4 } from 'uuid';
const AddContact = (props) => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')


    const createContact = e => {
        e.preventDefault()
        const newContact = { id: uuidv4(), name, phone, email }
        dispatch(addContact(newContact))
        props.history.push('/')
    }
    return (
        <div className='card border-0 shadow'>
            <div className="card-header">Add a Contact</div>
            <div className="card-body">
                <form onSubmit={e => { createContact(e) }}>
                    <div className="form-group">
                        <input
                            type="text"
                            className='form-control'
                            placeholder='Enter Your Name'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="number"
                            className='form-control'
                            placeholder='Enter Your Phone Number'
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className='form-control'
                            placeholder='Enter Your E-mail Address'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-primary' type='submit'>Create Contact</button>
                </form>
            </div>
        </div>
    )
}

export default AddContact
