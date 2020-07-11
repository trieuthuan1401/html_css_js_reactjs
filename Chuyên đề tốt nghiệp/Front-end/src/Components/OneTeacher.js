import React, { Component, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_TEACHER } from './data_app/teacher'
import { withRouter } from 'react-router';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const ListTeacher = withRouter(props => {

    const { loading, error, data } = useQuery(GET_TEACHER)
    const [teachers, setTeachers] = useState([])
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const changeRoute = teacher => () => {
        props.history.push({
            pathname: '/detailsTeacher',
            state: { teacher }
        })
        let html = document.querySelector('html')
        html.classList.add('acitve')
        html.scrollTop = 0
        html.classList.remove('acitve')
    }

    return data.teachers.map(teacher => (
        <div className="col-12 col-xl-3 _1teacher" key={teacher._id} >
            <div className='imagess' onClick={changeRoute(teacher)} >
                <img src={`images/${teacher.image}`} alt="" className="teacher img-fluid" />
            </div>
            <div className="nameteacher">{teacher.name}</div>
            <div className="position">{teacher.position}</div>
        </div>
    ))
})

export default class OneTeacher extends Component {
    render() {
        return (
            <ListTeacher />
        )
    }
}
