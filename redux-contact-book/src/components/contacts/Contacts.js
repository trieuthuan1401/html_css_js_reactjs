import React from 'react'
import { useSelector } from 'react-redux'
import Contact from './Contact';

const Contacts = () => {
    const contacts = useSelector(state => state.contacts)
    return (
        <div>
            <table className="table shadow">

                <thead className='bg-primary text-white'>
                    <tr>
                        <th scope="col">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" name="" id="" className='custom-control-input' />
                                <label className='custom-control-label'></label>
                            </div>
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {

                        contacts.map(contact =>
                            <Contact
                                key={contact.id}
                                contact={contact}
                            />
                        )
                    }

                </tbody>

            </table>
        </div>
    )
}

export default Contacts
