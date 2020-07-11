import React, { Component } from 'react'
import Header from './Header'
import Slider from './Slider'
import Rate from './Rate'
import Benefit from './Benefit'
import Feeling from './Feeling'
import CourseFree from './CourseFree'
import Teacher from './Teacher'
import Footer from './Footer'
import Menu from './Menu'
import _ from 'lodash';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    Redirect
} from "react-router-dom";
import { Mutation } from "react-apollo"
import { CREATE_USER } from './data_app/userCreate'
import Clock from './Clock'
import Menuu from './Menuu'
import GoBack from './GoBack'
import Tele from './Tele'
// import './DetailsTeacher.css'
import Courses from './Courses'



export default class DetailsCourseFree extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contentSearchh: '',
        }
    }


    getLink = date => {
        let linkString = '';
        if (date === "20/5/2020") {
            linkString = "https://drive.google.com/drive/folders/1R0D_ODHQNfZl_hjIEtK4kzoAMlCWp6Vm";
        } else if (date === "15/03/2020") {
            linkString = "https://drive.google.com/drive/u/0/my-drive";
        } else if (date === "15/01/2020") {
            linkString = "https://drive.google.com/drive/u/0/shared-with-me";
        } else {
            linkString = "https://drive.google.com/drive/u/0/folders/14fKh9zPs3W6FFx4KJ5F64nZI7W_0A8I_";
        }
        return linkString;
    }

    render() {

        return (
            <div className='detailsCourseFree'>
                <Header />
                <Menuu />
                <Slider />
                <div className="container">
                    <div className="details_free_course mt-5">
                        <div className="row">
                            <div className="col-xl-6 col-sm-12 details_free_course_img">
                                <img src={`images/${this.props.location.state.codeFree.image}`} alt="" />
                            </div>
                            <div className="col-xl-6 col-sm-12 details_free_course_info">
                                <h2 className="details_free_course_name">{this.props.location.state.codeFree.name}</h2>
                                <p className="details_free_course_des">
                                    {this.props.location.state.codeFree.description}
                                </p>
                                <p className="details_free_course_date">
                                    Khoá học được cập nhật vào ngày: <span className="date_free_course">{this.props.location.state.codeFree.date}</span>
                                </p>


                            </div>

                            <div className="col-12 text-center">
                                <p className="link_dowload">Link tải khoá học: <span> <a href={this.getLink(this.props.location.state.codeFree.date)} className="link_dowload_free"> <i className="fa fa-download"></i> Tại đây</a></span></p>
                            </div>
                        </div>
                    </div>
                </div>


                <Benefit />
                <Courses getData={`${this.state.contentSearchh}`} />
                <GoBack />
                <CourseFree />
                <Teacher />
                <Tele />
                <Footer />
            </div >
        )
    }
}

