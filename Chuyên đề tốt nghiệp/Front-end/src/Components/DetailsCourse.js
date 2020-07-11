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
export default class DetailsCourse extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            key: false,
        })
    }

    emailIsValid = (email) => /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
    saveStudent = (e) => {
        let firstName = document.getElementById('firstname').value
        let lastName = document.getElementById('lastname').value
        let email = document.getElementById('email').value
        let userName = document.getElementById('username').value
        let passWord = document.getElementById('password').value
        let phone = document.getElementById('phone').value
        // let address = document.getElementById('address').value
        let gender = ''
        if (document.getElementById('male').checked) {
            gender = document.getElementById('male').value
        } else if (document.getElementById('female').checked) {
            gender = document.getElementById('female').value
        }
        if (_.isEmpty(firstName)) {
            document.getElementById('fullname-error').innerHTML = 'Vui lòng nhập họ'
            firstName = ''
        } else if (firstName.trim().length < 2) {
            document.getElementById('fullname-error').innerHTML = 'Họ không được nhỏ hơn 2 kí tự'
            firstName = ''
        } else {
            document.getElementById('fullname-error').innerHTML = " "
        }
        if (_.isEmpty(lastName)) {
            document.getElementById('lastname-error').innerHTML = 'Vui lòng nhập tên'
            lastName = ''
        } else if (lastName.trim().length < 2) {
            document.getElementById('lastname-error').innerHTML = 'Tên không được nhỏ hơn 2 kí tự'
            lastName = ''
        } else {
            document.getElementById('lastname-error').innerHTML = " "
        }
        if (_.isEmpty(email)) {
            document.getElementById('email-error').innerHTML = "Vui lòng nhập email"
            email = ''
        } else if (!this.emailIsValid(email)) {
            document.getElementById('email-error').innerHTML = "Định dạng email không hợp lệ"
            email = ''
        } else {
            document.getElementById('email-error').innerHTML = " "

        }
        if (_.isEmpty(userName)) {
            document.getElementById('username-error').innerHTML = "Vui lòng nhập tài khoản"
            userName = ''
        } else if (userName.trim().length < 10) {
            document.getElementById('username-error').innerHTML = "Tài khoản không được nhỏ hơn 10 kí tự"
            userName = ''
        } else {
            document.getElementById('username-error').innerHTML = " "

        }
        if (_.isEmpty(passWord)) {
            document.getElementById('password-error').innerHTML = "Vui lòng nhập mật khẩu"
            passWord = ''
        } else if (passWord.trim().length < 10) {
            document.getElementById('password-error').innerHTML = "Mật khẩu không được nhỏ hơn 10 kí tự"
            passWord = ''
        } else {
            document.getElementById('password-error').innerHTML = " "
        }
        if (_.isEmpty(phone)) {
            document.getElementById('phone-error').innerHTML = "Vui lòng nhập số điện thoại"
            phone = ''
        } else if (phone.trim().length < 10) {
            document.getElementById('phone-error').innerHTML = "Số điện thoại không được nhỏ hơn 10 kí tự"
            phone = ''
        } else {
            document.getElementById('phone-error').innerHTML = " "
        }

        if (_.isEmpty(gender)) {
            document.getElementById('gender-error').innerHTML = "Vui lòng chọn giới tính"
            gender = ''
        } else {
            document.getElementById('gender-error').innerHTML = ' '
        }

        //Kiểm tra ở trên nếu tất cả các trường đều không lỗi thì ta lấy hết nếu lỗi thì ta gán cho nó là rỗng để k lấy dữ liệu đó
        if (firstName && lastName && passWord && userName && email && gender && phone) {
            gender === 1 ? gender = 'Nam' : gender = "Nữ"
            // Tạo một mảng chứa tất cả các đối tượng là học sinh đăng ký khoá học  
            let students = [];
            // push đối tượng đó vô mảng
            //    students.push({
            //         firstName: firstName,
            //         lastName: lastName,
            //         email: email,
            //         gender: gender,
            //         address: address,
            //         phone: phone,
            //         userName: userName,
            //         passWord: passWord,
            //    })
            //    console.log(students);
            e({
                variables: {
                    input: {
                        userName: userName,
                        passWord: passWord,
                        firstName: firstName,
                        lastName: lastName,
                        imageUrl: "...",
                        email: email,
                        phone: phone,
                        gioiTinh: gender,
                        idRole: "user",
                    }
                }
            });
            this.setState({
                key: true,
            })
        }
    }

    render() {
        console.log(this.props);
        if (this.state.key === true) {
            window.location.replace('http://localhost:3000');
            alert('Đăng ký thành công');
        }
        return (
            <div className='detailsCoursee'>
                <Header />
                <Menuu />
                <Slider />

                <div className="title text-center wow bounceInUp course_details" data-wow-duration="1.2s">
                    <h3 className="title-heading">{this.props.location.state.course.name}</h3>
                    <h3 className="title-heading"><strong className="giangvien">Giảng viên</strong> {this.props.location.state.course.teacher.name}</h3>
                </div>

                <div className="container wow bounceInRight" data-wow-duration="1.4s">
                    <div className="row">
                        <div className="col-sm-12 col-xl-6">
                            <img src={`images/${this.props.location.state.course.image}`} alt="" className="img_detailsCourse img-fluid" />

                        </div>
                        <div className="col-xl-6 col-sm-12 introduce">
                            <p className="heading">Học phí (mua 1 lần học trọn đời) tại Acexis</p>
                            <div className="start">
                                <ul>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <div className="evaluate"> ( 5 đánh giá từ học viên )</div>
                                </ul>
                            </div>
                            <div className="price">{this.props.location.state.course.newPrice}$</div>
                            <p className="heading-course">Học phí chỗ khác: {this.props.location.state.course.oldPrice} $</p>
                            <p className="heading-course">Học đến khi thành thạo thì thôi <br />
                    Hoàn lại học phí nếu không hài lòng <br />
                    Lưu ý: Hình thức học của chúng tôi là học ONLINE, chúng tôi không mở lớp dạy trực triếp hoặc offline. Học viên vui lòng cân nhắc trước khi đăng ký. <br />
                                <strong>Thời lượng: </strong> <span>30 giờ học</span> <br />
                                <strong>Bài học: </strong> <span>40+ bài học</span>
                            </p>
                        </div>
                        <Clock />
                        <div className="col-12 detailsCourse">
                            <p className="heading-course text-center mt-4 ">Giới thiệu khóa học</p>
                            <p className="des">
                                Đối tượng sẽ học khóa này là:
                    – Người bắt đầu học về backend cần học về dữ liệu trước khi học lập trình <br />
                    – Những người muốn tìm hiểu về thiết kế cơ sở dữ liệu quan hệ <br />
                    – Bạn sinh viên cần tìm hiểu cách phân tích và thiết kế cơ sở dữ liệu cho một ứng dụng web <br />
                    – Những bạn chưa thiết kế cơ sở dữ liệu lần nào <br />
                    – Khóa học theo hướng thực hành, “cầm tay chỉ việc”, hướng dẫn từ phần cài đặt, các câu lệnh T-SQL thao tác thế <br />nào, cách thiết kế các bảng dữ liệu theo chức năng của ứng dụng, cách sử dụng công cụ trên giao diện <br />phpmyadmin, thực hành qua dữ liệu của web thực tế.<br />
                    – Khóa học gồm 4 phần chính, phần 1 hướng dẫn cài đặt và giới thiệu cơ sở dữ liệu, phần 2 hướng dẫn học câu <br />lệnh sql, phần 3 thực hành phân tích và hiểu bản chất dữ liệu của website bán hàng, phần 4 thực hành phân tích <br />và dựng dữ liệu của website zing.vn.<br />
                    – Ý nghĩa của phần học dữ liệu giúp học viên có kiến thức nền tảng về thiết kế dữ liệu quan hệ, một phần không thể thiếu trong lập trình ứng dụng và lập trình backend.<br />
                    – Sau khi học xong bạn có thể thiết kế được cơ sở dữ liệu cho các website thông dụng như website tin tức và website bán hàng.<br />
                    – Đọc và hiểu được các bảng dữ liệu của một website.<br />
                    – Phân tích dữ liệu và thiết lập quan hệ dữ liệu cho một ứng dụng<br />
                            </p>
                        </div>
                    </div>
                </div>

                <Mutation mutation={CREATE_USER}>
                    {createUser => (
                        <div className="formRegister mb-5">
                            <form>
                                <div className="container form-group ">
                                    <h3 className="title-heading">Đăng ký khoá học </h3>
                                    <div className="line"></div>
                                    <label >First name : </label>
                                    <input type="text" id="firstname" className="form-control" />
                                    <span id="fullname-error" className='error' />
                                    <br />
                                    <label >Last name : </label>
                                    <input type="text" id="lastname" className="form-control" />
                                    <span id="lastname-error" className='error' />
                                    <br />
                                    <label >Email : </label>
                                    <input type="text" id="email" className="form-control" />
                                    <span id="email-error" className='error' />
                                    <br />
                                    <label >Username : </label>
                                    <input type="text" id="username" className="form-control" />
                                    <span id="username-error" className='error' />
                                    <br />
                                    <label >Password : </label>
                                    <input type="password" id="password" className="form-control password" />
                                    <span id="password-error" className='error' />
                                    <br />
                                    <label >Phone : </label>
                                    <input type="number" id="phone" className="form-control" />
                                    <span id="phone-error" className='error' />
                                    <br />
                                    <label >Gender :</label>
                                    <input type="radio" name="gender" id="male" defaultValue={1} /> <span className="gender">Nam</span>
                                    <input type="radio" name="gender" id="female" defaultValue={2} />  <span className="gender">Nữ</span> <br />
                                    <span id="gender-error" className='error' />
                                    <br />
                                    <div className="pay">
                                        {/* <p className="note">*Thanh toán qua tài khoản Momo: <span className="
                    accountNumber">14209764905154</span></p>
                                        <p className="note">Sau khi thanh toán chúng tôi sẽ xác nhận Form đăng ký cho bạn và cấp quyền truy cập khoá học cho bạn </p>
                                        <label >&nbsp;</label> */}
                                        <button type="" className="btnsave btn btn-outline-success" type="reset" onClick={() => this.saveStudent(createUser)}> Đăng ký</button>
                                    </div>

                                </div>
                            </form>


                            <div className="social-links">
                                <div className="box box-1" />
                                <div className="links">
                                    <div className="lg-line" />
                                    <img src="images/twitter.png" alt="" />
                                    <img src="images/youtube.webp" alt="" />
                                    <img src="images/instagram-2016.svg" alt="" />
                                    <div className="md-line" />
                                </div>
                                <div className="box box2" />
                            </div>

                        </div>
                    )}
                </Mutation>
                <Benefit />
                <GoBack />
                <CourseFree />
                <Teacher />
                <Tele />
                <Footer />
            </div>
        )
    }
}

