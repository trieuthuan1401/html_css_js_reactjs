import React, { Component } from 'react'
import Toggle from './Toggle'
import Top from './Top'
import CourseAdvice from './CourseAdvice'
import ToastMessage from './ToastMessage'

export default class Footer extends Component {

    render() {
        return (
            <div>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-lg-3 footerr">
                                <h4 className="title-heading"><i className="fa fa-home" /> Thông tin NTU</h4>
                                <a href="#">Giới thiệu</a>
                                <a href="#">Câu hỏi thường gặp</a>
                                <a href="#">Tuyển dụng</a>
                                <a href="#">Chính sách học tập</a>
                                <a href="#">Liên hệ</a>
                            </div>
                            <div className="col-6 col-lg-3 footerr">
                                <h4 className="title-heading"><i className="fa fa-angellist" /> Group Facebook</h4>
                                <a href="#">Học thiết kế qua bài tập thực hành</a>
                                <a href="#">Cùng học lập trình web Back-end&amp;Front-end</a>
                                <a href="#">Hỗ trợ học tin học văn phòng</a>
                            </div>
                            <div className="col-6 col-lg-3 footerr">
                                <h4 className="title-heading"><i className="fa fa-github" /> KHÓA HỌC</h4>
                                <a href="#">Lập trình – Thiết kế web (6)</a>
                                <a href="#">Thiết kế đồ họa (13)</a>
                                <a href="#">Tin học văn phòng (1)</a>
                            </div>
                            <div className="col-6 col-lg-3 footerr">
                                <h4 className="title-heading"><i className="fa fa-instagram" /> THƯ VIỆN HỌC TẬP</h4>
                                <a href="#">HTML5</a>

                                <a href="#">CSS3</a>
                                <a href="#">MY SQL</a>
                                <a href="#">PHP</a>
                            </div>
                        </div>
                    </div>
                    <Toggle />
                    <Top />
                    <CourseAdvice />
                    <ToastMessage />
                </div>

                <p className="endfooter text-center">Designed by lllieutrieuthuan</p>

            </div>

        )
    }
}