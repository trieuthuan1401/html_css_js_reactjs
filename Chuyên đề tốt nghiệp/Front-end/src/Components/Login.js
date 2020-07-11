// import React, { Component } from 'react'
// import { useQuery } from '@apollo/react-hooks'
// import { GET_USER } from './data.app/user'
// import WrongPassUser from './WrongPassUser'
// import Img from '../warning.jpg'



import React, { Component, useState } from 'react'
import Img from '../warning.jpg'
import { useQuery } from '@apollo/react-hooks'
import WrongPassUser from './WrongPassUser'
import { GET_USER } from './data_app/user'
import UserList from './user/list.user'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { validate } from 'graphql'




let format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
let checkCharacters = (string) => {
    for (let index = 0; index < string.length; index++) {
        if (string[index].match(format)) {
            // Nếu nó là kí tự thì thay đổi cờ hiệu
            return true;
        }
    }
    return false;
}


export default class Form extends Component {

    // const { loading, error, data } = useQuery(GET_TEACHER)

    constructor(props) {
        super(props);
        this.state = {
            status: true,
            redirect: false,
        }
    }

    showAdmin = () => {


        if (this.refs.username.value === 'admin' && this.refs.password.value === 'admin') {
            this.setState({
                redirect: 1
            })
        }
        else if (this.refs.username.value === 'user' && this.refs.password.value === 'user') {
            this.setState({
                redirect: 2
            })
        }

        else {
            this.setState({
                status: false,
            })
        }
    }

    validateUser = () => {
        let valueUser = this.refs.username.value;
        let errorUsername = document.querySelector('.error-username');
        let errorSpace = document.querySelector('.error-space');
        let errorLength = document.querySelector('.error-length');
        let checkSpace = valueUser.includes(' ');
        if (checkCharacters(valueUser) === true) {
            errorUsername.classList.add('active')
        } else {
            errorUsername.classList.remove('active')
        }

        if (checkSpace === true) {
            errorSpace.classList.add('active')
        } else {
            errorSpace.classList.remove('active')
        }

        if (valueUser.length > 10) {
            errorLength.classList.add('active')
        } else {
            errorLength.classList.remove('active')
        }

    }
    validatePass = () => {
        let valueUser = this.refs.password.value;
        let checkSpace = valueUser.includes(' ');
        let errorSpacePass = document.querySelector('.error-space-pass');
        let errorLengthPass = document.querySelector('.error-length-pass');
        if (checkSpace === true) {
            errorSpacePass.classList.add('active')
        } else {
            errorSpacePass.classList.remove('active')
        }

        if (valueUser.length > 10) {
            errorLengthPass.classList.add('active')
        } else {
            errorLengthPass.classList.remove('active')
        }

    }
    render() {

        if (this.state.redirect === 1) {
            return <Redirect to='/admin' />
        } else if (this.state.redirect === 2) {
            return < Redirect to='/custommer' />
            // window.location.replace("http://localhost:3000/custommer")
        }
        return (

            <div className="fullScreen">
                <div className="loginbox">
                    {this.state.status
                        ? <div>
                            <h1>Login</h1>
                            <form>
                                <div className='input-group'>
                                    <p>Username</p>
                                    <span id="error-username"></span>
                                    <span class="error-username" > Tên đăng nhập không được chứa kí tự đặc biệt </span>
                                    <span class="error-space" > Tên đăng nhập không được chứa khoảng trắng </span>
                                    <span class="error-length" > Tên đăng nhập không được chứa quá 10 kí tự </span>
                                    <input type="text"
                                        placeholder="Enter username"
                                        ref="username"
                                        id='userName'
                                        onChange={() => { this.validateUser() }} />
                                    <span className="bar"></span>
                                </div>

                                <div className="input-group">
                                    <span id="error-password"></span>
                                    <p>Password</p>
                                    <span class="error-space-pass" >Mật khẩu không được chứa khoảng trắng </span>
                                    <span class="error-length-pass" >Mật khẩu không được chứa quá 10 kí tự </span>
                                    <input type="password"
                                        placeholder="Enter password"
                                        ref="password"
                                        id="passWprd"
                                        onChange={() => { this.validatePass() }}
                                    />
                                    <span className="bar"></span>
                                </div>
                                <div id="sendRequest">
                                    <input type="submit" defaultValue="Login" onClick={() => this.showAdmin()} />
                                    <a href=" ">Lost your password ?</a><br />
                                    <a href=" ">Don't have an account ?</a>
                                </div>

                            </form> </div>
                        : <WrongPassUser />}
                </div>
            </div>
        )
    }
}