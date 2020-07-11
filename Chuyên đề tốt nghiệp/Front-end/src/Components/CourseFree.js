import React, { Component } from 'react'
import OneCourseFree from './OneCourseFree'

export default class CourseFree extends Component {
    render() {
        return (
            <div className="course_fr mt-4">
                <div className="title text-center">
                    <h3 className="title-heading">Khoá học miễn phí</h3>
                    <div className="line" />
                    <p className="title-sub">Tổng hợp tất cả những kiến thức và mẹo về lập trình</p>
                </div>
                <div className="container">
                    <div className="row free">
                        <OneCourseFree />
                    </div>
                </div>
            </div>

        )
    }
}