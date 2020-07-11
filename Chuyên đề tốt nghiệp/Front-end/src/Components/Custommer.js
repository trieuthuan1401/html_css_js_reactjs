
import React, { Component } from 'react'
import Header from './Header'
import Menu from './Menu';
import Courses from './Courses';
import OneCourse from './OneCourse'
import Rate from './Rate';
import Benefit from './Benefit';
import Feeling from './Feeling';
import CourseFree from './CourseFree';
import Teacher from './Teacher';
import Footer from './Footer';
import DetailsCourse from './DetailsCourse';
import { from } from 'apollo-boost';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Search from './Search'
import Tele from './Tele';
import HeaderCus from './HeaderCus';


import Img from '../JQUERY.jpg'
import Imgg from '../nguyenvanhau.jpg'

import Imggg from '../REACTJS.png'
import Imgggg from '../nguyenducviett.jpg'


import Imggggg from '../SQL.png'




export default class Custommer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contentSearch: '',
        }
    }
    getContent = (data) => {
        this.setState({
            contentSearch: data,
        })
    }
    handleChangeRoute = () => {
        window.location.replace("http://localhost:3000/coursePHP");
    }

    render() {
        return (
            <div>
                <HeaderCus />

                {/* <Menu getContent={(data) => { this.getContent(data) }} /> */}

                {/* <Rate /> */}


                <div className="manyCourse mb-7 courseFreeSign">
                    <div className="title text-center">
                        <h3 className="title-heading">CÁC KHOÁ HỌC ĐÃ ĐĂNG KÝ</h3>
                        <div className="line" />
                        <p className="title-sub">Các khoá học online đã được đăng ký</p>
                    </div>
                    <div className="container">
                        <div className="row">

                            <div className="col-sm-12 col-xl-4">
                                <div className="_1course">
                                    <div>
                                        <div className='imagess'>
                                            <img src={Imggg} alt="" className='img-fluid' />
                                        </div>
                                        <div className="heading">React JS và Redux</div>
                                    </div>
                                    <div className="description">029- Tạo app fullstack với Node JS + React JS</div>
                                    <div className="author">
                                        <img src={Imgggg} alt="" className="img_author" />
                                        <div className="name_autho">Nguyễn Đức Việt</div>
                                    </div>
                                    <div className="hours float-right">
                                        <i className="fa fa-clock-o"></i><strong className='hours_details'> 408+ giờ</strong>
                                    </div>

                                    <div className="progresss-bar">
                                        <div className="bar-wrap">64%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-xl-4">
                                <div className="_1course">
                                    <div>
                                        <div className='imagess'>
                                            <img src={Img} alt="" className='img-fluid' />
                                        </div>
                                        <div className="heading">Jquery</div>
                                    </div>
                                    <div className="description">03: Thành thạo lập trình jquery qua 20 bài tập</div>
                                    <div className="author">
                                        <img src={Imgg} alt="" className="img_author" />
                                        <div className="name_autho">Nguyễn Văn Hậu</div>
                                    </div>
                                    <div className="hours float-right">
                                        <i className="fa fa-clock-o"></i><strong className='hours_details'> 320+ giờ</strong>
                                    </div>
                                    <div className="progresss-bar">
                                        <div className="bar-wrap">42%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-xl-4" onClick={() => { this.handleChangeRoute() }} >
                                <div className="_1course">
                                    <div>
                                        <div className='imagess'>
                                            <img src={Imggggg} alt="" className='img-fluid' />
                                        </div>
                                        <div className="heading">PHP và MySQL</div>
                                    </div>
                                    <div className="description">34 - THIẾT KẾ DỮ LIỆU VỚI SQL QUA BÀI TẬP</div>
                                    <div className="author">
                                        <img src={Imgggg} alt="" className="img_author" />
                                        <div className="name_autho">Nguyễn Đức Việt</div>
                                    </div>
                                    <div className="hours float-right">
                                        <i className="fa fa-clock-o"></i><strong className='hours_details'> 385+ giờ</strong>
                                    </div>
                                    <div className="progresss-bar">
                                        <div className="bar-wrap">76%</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <Courses getData={`${this.state.contentSearch}`} />
                <Benefit />
                <CourseFree />

                <Teacher />
                <Footer />
            </div>
        )
    }
}