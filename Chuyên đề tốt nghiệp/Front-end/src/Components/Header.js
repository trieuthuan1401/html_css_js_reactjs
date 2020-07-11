import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            //  <!-- Header -->
            <div className="header wow bounceInLeft" data-wow-duration="1s">
                <div className="container">
                    <div className="contact-header float-left">
                        <i className="fa fa-phone"> <span className="phone">0969.209.088</span></i>
                        <i className="fa fa-envelope-o"> <span className="gmail">lieutrieuthuan14@gmail.com</span></i>
                        <i className="fa fa-facebook" />
                        <i className="fa fa-instagram" />
                        <i className="fa fa-twitter" />
                        <i className="fa fa-google-plus" />
                    </div>
                    <div className="registration float-right">
                        <Link to="/login" className="signIn" data-text="Login">  Login</Link><i className="fa fa-user"></i>
                    </div>
                </div>
            </div>
            //  <!-- End Header -->
        )
    }
}
