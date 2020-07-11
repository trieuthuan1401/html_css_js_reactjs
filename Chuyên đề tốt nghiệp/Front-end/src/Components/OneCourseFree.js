import React, { Component, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_CODEFREE } from './data_app/codeFree'
import { withRouter } from 'react-router';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { GET_COURSECONTENT } from './courseContent/list.courseContent';

const ListCodeFree = withRouter(props => {

    const { loading, error, data } = useQuery(GET_CODEFREE)
    const [codeFrees, setCodeFrees] = useState([])
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const changeRoute = codeFree => () => {
        props.history.push({
            pathname: '/detailsCourseFree',
            state: { codeFree }
        })
        let html = document.querySelector('html')
        html.classList.add('acitve')
        html.scrollTop = 0
        html.classList.remove('acitve')
    }

    return data.codeFrees.map(codeFree => (
        <div className="col-12 col-xl-6 freeCourse" key={codeFree._id}>
            <div className="row">
                <div className="col-xl-6">
                    <img src={`images/${codeFree.image}`} alt="" className="img-fluid float-left free" onClick={changeRoute(codeFree)} />
                </div>
                <div className="col-xl-6 course-free-info" onClick={changeRoute(codeFree)} >
                    <a className="link text-clamp text-clamp--2">{codeFree.name}
                    </a>

                    <a className="description link text-clamp text-clamp--2 mt-2">{codeFree.description}</a>
                    <div className="time">
                        <i className="fa fa-clock-o fa-fw" /> {codeFree.date}
                    </div>
                </div>
            </div>
        </div>
    ))
})

export default class OneCourseFree extends Component {
    render() {
        return (
            <ListCodeFree />
        )
    }
}

