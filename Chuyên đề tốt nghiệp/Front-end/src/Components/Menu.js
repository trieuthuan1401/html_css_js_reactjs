import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Search from './Search';
import Tele from './Tele';

function handleScroll(event) {
    let html = document.querySelector('html')
    html.scrollTop = 628
    event.preventDefault();
}
// Teacher
function handleScrolll(event) {
    let html = document.querySelector('html')
    html.scrollTop = 3535;
    event.preventDefault();
}

function handleScrollll(event) {
    let html = document.querySelector('html')
    html.scrollTop = 0
    event.preventDefault();
}

function handleScrolllll(event) {
    let html = document.querySelector('html')
    html.scrollTop = 2913
    event.preventDefault();
}
export default class Menu extends Component {
    getContentSearch = (data) => {
        this.props.getContent(data);
    }
    render() {

        return (
            <div className="menu wow bounceInRight" data-wow-duration="1s">
                <div className="container">
                    <div className="logo">
                        <img src="images/logo.png" alt="" className="img-fluid" />
                    </div>
                    <div className="menu-left">
                        <ul>
                            <li><Link to="/home" data-text="Home" className="home" onClick={(event) => handleScrollll(event)}> Home </Link></li>
                            <li><a href=" " data-text="About" className="about" onClick={(event) => handleScrolllll(event)}>About</a></li>
                            <li><a href=" " data-text="Course" className="course" onClick={(event) => handleScroll(event)}>Course</a></li>
                            <li><a href=" " data-text="Teacher" className="Teacher" onClick={(event) => handleScrolll(event)}>Teacher</a></li>
                        </ul>
                    </div>
                </div>
                <div className='btn-timkiem float-right'> <Search getContentSearch={(data) => this.getContentSearch(data)} /></div>
            </div>
        )
    }
}