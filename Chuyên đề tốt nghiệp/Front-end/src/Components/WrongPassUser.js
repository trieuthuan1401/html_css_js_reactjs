import React, { Component } from 'react'
import Img from '../warning.jpg'


export default class WrongPassUser extends Component {
    render() {
        return (
            <div>
                <div className="warning">
                    <img src={Img} alt="" />
                    <p> Vui lòng kiểm tra tài khoản hoặc mật khẩu !!!</p>
                    <a href="http://localhost:3000/login" className="cancel mt-2"> OK </a>
                </div>
            </div >
        )
    }
}