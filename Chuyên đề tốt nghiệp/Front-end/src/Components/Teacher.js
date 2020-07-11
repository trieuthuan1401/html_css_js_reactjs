import React, { Component } from 'react'
import OneTeacher from './OneTeacher'

export default class Teacher extends Component {
render() {
return (
<div className="teacher">
    <div className="title text-center">
        <h3 className="title-heading">GIẢNG VIÊN</h3>
        <div className="line" />
        <p className="title-sub">Các bạn học viên sẽ có cơ hội gặp gở các giảng viên đến từ khắp cả nước</p>
    </div>
    <div className="container">
        <div className="row teacher">
            <OneTeacher />
        </div>
    </div>
</div>

)
}
}