import './style.css'


import React, { Component } from 'react'
import Header from '../Header'
import Menu from '../Menu';
import Courses from '../Courses';
import OneCourse from '../OneCourse'
import Rate from '../Rate';
// import Benefit from './Benefit';
import Feeling from '../Feeling';
import CourseFree from '../CourseFree';
import Teacher from '../Teacher';
import Footer from '../Footer';
import DetailsCourse from '../DetailsCourse';
import { from } from 'apollo-boost';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Search from '../Search'
import Tele from '../Tele';
import HeaderCus from '../HeaderCus';


// import Img from '../JQUERY.jpg'
// import Imgg from '../nguyenvanhau.jpg'

// import Imggg from '../REACTJS.png'
// import Imgggg from '../nguyenducviett.jpg'


// import Imggggg from '../SQL.png'




export default class CoursePHP extends Component {
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

                <div className="container list_course_all">
                    <div className="row">
                        <div className="col-4 list_course_details">
                            <h3>Khoá học đang có tại website</h3>
                            <ul className="list_course_details_list">
                                <li className="list_course_details_item">
                                    <a className="list_course_details_link"><i className="fa fa-arrow-right"></i>  HTML và CSS</a>
                                </li>
                                <li className="list_course_details_item">
                                    <a className="list_course_details_link"> <i className="fa fa-arrow-right"></i> ReactJS và Redux</a>
                                </li>
                                <li className="list_course_details_item">
                                    <a className="list_course_details_link"> <i className="fa fa-arrow-right"></i> JQUERY</a>
                                </li>
                                <li className="list_course_details_item">
                                    <a className="list_course_details_link"> <i className="fa fa-arrow-right"></i> Javascript và Illustrator</a>
                                </li>
                                <li className="list_course_details_item">
                                    <a className="list_course_details_link"><i className="fa fa-arrow-right"></i> NODE JS</a>
                                </li>
                                <li className="list_course_details_item">
                                    <a className="list_course_details_link">Liên hệ tư vấn</a>
                                    <div className="list_course_details_item_phone"><i className="fa fa-phone" /> <span>0969.209.088</span> </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-8 course_details_php">
                            <h2 className="course_details_php_title">
                                PHP và SQL
      </h2>
                            <img src="http://localhost:3000/images/REACTJS.png" alt="" className="course_details_php_img" />
                            <div className="course_details_php_desc">
                                <p>Ứng dụng lập trình Hướng đối tượng để xây dựng website tin tức theo mô hình MVC, kết nối
          database sử dụng PDO.</p>
                                <p>Các trang xử lý gồm có trang chủ, xem tin tức theo từng loại tin, xem chi tiết tin, các
                                chức năng như phân trang, ứng dụng ajax để tìm kiểm tin tức theo tên và theo nội dung
          tóm tắt.</p>
                                <p>Ngoài ra, website còn có chức năng đăng kí và đăng nhập. Cấu trúc web tương
          đối dễ hiểu phù hợp cho các bạn mới bắt đầu học lập trình web.</p>
                                <p>Source code nguồn: <a href="https://l.facebook.com/l.php?u=http%3A%2F%2Fkhoapham.vn%2Fdownload%2Fphp%2Ftintuc-source-nguon.rar&h=ATOIhfl15YpVZsI8GdRZDra6oPhp2i-YHYmakUQRExSnZYYo723UzAVS4m_-1EGq36i62OQAjHhpADzyHrlxGuVNsxSJaGzMVOGzqJOi6pymBn1F40x44Mo50vu-jVX8RH6aHX3ajorO" target="_blank">http://vn/download/php/tintuc-source-nguon.rar </a></p>
                                <p>Source code finish:&nbsp; <a href="https://l.facebook.com/l.php?u=http%3A%2F%2Fkhoapham.vn%2Fdownload%2Fphp%2Ftintuc-source-finish.rar&h=ATOIhfl15YpVZsI8GdRZDra6oPhp2i-YHYmakUQRExSnZYYo723UzAVS4m_-1EGq36i62OQAjHhpADzyHrlxGuVNsxSJaGzMVOGzqJOi6pymBn1F40x44Mo50vu-jVX8RH6aHX3ajorO" target="_blank">http://download/php/tintuc-source-finish.rar</a></p>
                                <p>Khóa học Lập trình PHP trực tiếp tại Trung Tâm Khoa Phạm: http://khoapham.vn/lap-trinh-php.html
        </p>
                                <p>Tư vấn ghi danh: 0942764080</p>
                                <p>Hỗ trợ kỹ thuật: 0967908907 (Thứ hai đến thứ sáu từ 13 - 16h)</p>
                                <p>Fanpage: https://www.facebook.com.vn/</p>
                                <p />
                            </div>
                            <h3 className="vides text-center">Danh sách video</h3>
                            <div className="line"></div>
                            <ol className="course_details_php_videos">
                                <li className="course_details_php_videos_item"><a className="course_details_php_link">Giới thiệu giao diện và phân tích cấu trúc database</a> <div className="badge badge-success">Free</div></li>
                                <li className="course_details_php_videos_item"><a className="course_details_php_link">Xây dựng website tin tức hướng đối tượng - Giới thiệu</a><div className="badge badge-success">Free</div></li>
                                <li className="course_details_php_videos_item"><a className="course_details_php_link">PHP - OOP Website tin tức Bài 2: Tổ chức mô hình MVC và kết nối database sử dụng PDO</a><div className="badge badge-success">Free</div></li>
                                <li className="course_details_php_videos_item"><a className="course_details_php_link">PHP - OOP Website tin tức Bài 3: Tạo model và controller trang chủ, đổ dữ liệu ra slideshow</a><div className="badge badge-success">Free</div></li>
                                <li className="course_details_php_videos_item"><a className="course_details_php_link">PHP - OOP Website tin tức Bài 4: Đổ dữ liệu thể loại và loại tin ra menu 2 cấp</a><div className="badge badge-success">Free</div></li>
                                <li className="course_details_php_videos_item"><a className="course_details_php_link">PHP - OOP Website tin tức Bài 5: Đỗ dữ liệu tin tức ra trang chủ</a><div className="badge badge-success">Free</div></li>
                                <li className="course_details_php_videos_item"><a className="course_details_php_link">PHP - OOP Website tin tức Bài 6: Tạo trang loại tin hiển thị tất cả tin tức của loại tin
          </a><div className="badge badge-success">Free</div></li>
                                <li className="course_details_php_videos_item"><a className="course_details_php_link">PHP - OOP Website tin tức Bài 7: Phân trang trên trang loại tin
          </a><div className="badge badge-success">Free</div></li>
                                <li className="course_details_php_videos_item"><a className="course_details_php_link">PHP - OOP Website tin tức Bài 8: Tạo trang tin tức xem chi tiết tin</a><div className="badge badge-success">Free</div></li>
                                <li className="course_details_php_videos_item"><a className="course_details_php_link">PHP - OOP Website tin tức Bài 9: Lấy tất cả bình luận của tin tức theo id tin tức
          </a><div className="badge badge-success">Free</div></li>
                                <li className="course_details_php_videos_item"><a className="course_details_php_link">PHP - OOP Website tin tức Bài 10: Đọc danh sách các tin liên quan theo thể loại</a><div className="badge badge-success">Free</div></li>
                                <li className="course_details_php_videos_item"><a className="course_details_php_link">PHP - OOP Website tin tức Bài 11: Đọc danh sách các tin nổi bật</a><div className="badge badge-success">Free</div></li>
                                <li className="course_details_php_videos_item"><a className="course_details_php_link">PHP - OOP Website tin tức Bài 12: Đăng kí tài khoản</a><div className="badge badge-success">Free</div></li>
                                <li className="course_details_php_videos_item"><a className="course_details_php_link">PHP - OOP Website tin tức Bài 13: Đăng nhập</a><div className="badge badge-success">Free</div></li>
                                <li className="course_details_php_videos_item"><a className="course_details_php_link">PHP - OOP Website tin tức Bài 14: Đăng xuất</a><div className="badge badge-success">Free</div></li>
                                <li className="course_details_php_videos_item"><a className="course_details_php_link">PHP - OOP Website tin tức Bài 15: Thêm bình luận trên tin tức</a><div className="badge badge-success">Free</div></li>
                                <li className="course_details_php_videos_item"><a className="course_details_php_link">PHP - OOP Website tin tức Bài 16: Chức năng tìm kiếm tin tức sử dụng ajax</a><div className="badge badge-success">Free</div></li>
                                <li className="course_details_php_videos_item"><a className="course_details_php_link">PHP - OOP Website tin tức Bài 17: htaccess Tạo link thân thiện cho trang web</a><div className="badge badge-success">Free</div></li>
                                <li className="course_details_php_videos_item"><a className="course_details_php_link">PHP - OOP Website tin tức Bài 18: Cập nhật chức năng phân trang do htaccess</a><div className="badge badge-success">Free</div></li>
                            </ol>
                        </div>
                    </div>
                </div>

                {/* </div> */}



                <Courses getData={`${this.state.contentSearch}`} />
                <CourseFree />

                <Teacher />
                <Footer />
            </div >
        )
    }
}