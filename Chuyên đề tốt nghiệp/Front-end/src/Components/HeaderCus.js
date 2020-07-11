import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class HeaderCus extends Component {


    handleChange = () => {
        let domCustomLink = document.querySelector('.customer_list')
        domCustomLink.classList.toggle('active');
    }

    handleReload = () => {
        window.location.replace("http://localhost:3000/");
    }
    handleChangPass = () => {
        window.location.replace("http://localhost:3000/changePassWord");
    }
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
                        <span className='custommer_name'>Triệu Thuận</span><i className="fa fa-user" onClick={() => { this.handleChange() }}></i>

                        <ul className="customer_list">
                            <li className='custom_link imgg'></li>
                            <li className="custom_link toppppp" onClick={() => this.handleChangPass()}>Đổi mật khẩu</li>
                            <li className="custom_link" onClick={() => { this.handleReload() }}>Đăng xuất</li>
                        </ul>
                    </div>

                </div>
            </div>
            //  <!-- End Header -->
        )
    }
}
