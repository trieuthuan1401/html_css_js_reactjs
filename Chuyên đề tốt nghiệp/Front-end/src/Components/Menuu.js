import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function handleScroll(event) {
    let html = document.querySelector('html')
    let courseEl = document.querySelector('.course_details');
    html.scrollTop = courseEl.offsetTop;
    event.preventDefault();
}
function handleScrolll(event) {
    let html = document.querySelector('html')
    html.scrollTop = 3522
    event.preventDefault();
}
function handleScrollll(event) {
    let html = document.querySelector('html')
    html.scrollTop = 0
    event.preventDefault();
}
function handleScrolllll(event) {
    let html = document.querySelector('html')
    html.scrollTop = 2958
    event.preventDefault();
}
function handleReload(event) {
    event.preventDefault();
    window.location.replace('http://localhost:3000');
}
export default class Menu extends Component {

    render() {

        return (
            <div className="menu wow bounceInRight" data-wow-duration="1s">
                <div className="container">
                    <div className="logo">
                        <img src="images/logo.png" alt="" className="img-fluid" />
                    </div>
                    <div className="menu-left menuu">
                        <ul>
                            <li><Link to="/home" data-text="Home" className="home" onClick={(event) => handleReload(event)}>Home</Link></li>
                            <li><a href=" " data-text="About" className="about" onClick={(event) => handleScrolllll(event)}>About</a></li>
                            <li><a href="" data-text="Course" className="course" onClick={(event) => handleScroll(event)}>Course</a></li>
                            <li><a href="" data-text="Teacher" className="Teacher" onClick={(event) => handleScrolll(event)} >Teacher</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
