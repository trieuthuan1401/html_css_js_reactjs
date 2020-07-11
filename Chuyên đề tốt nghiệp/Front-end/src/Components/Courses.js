import React, { Component } from 'react'
import OneCourse from './OneCourse'


export default class Courses extends Component {
    render() {
        // console.log(this.props.getData);
        return (
            <div className="manyCourse mb-4">
                <div className="title text-center">
                    <h3 className="title-heading">LẬP TRÌNH - THIẾT KẾ WEB</h3>
                    <div className="line" />
                    <p className="title-sub">Các khoá học online đang được học viên đăng ký gần đây</p>
                </div>
                <div className="container">
                    <div className="row">
                        <OneCourse getDataSearch={`${this.props.getData}`} />
                    </div>
                </div>

            </div>

        )
    }
}