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
import './DetailsTeacher.css'
import Courses from './Courses'



export default class DetailsTeacher extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contentSearchh: '',
        }
    }
    nameString = name => {
        let nameTeacher = "";
        if (name === "Nguyễn Đức Việt") {
            nameTeacher = "Anh tốt nghiệp khoa Công nghệ thông tin, Đại học Bách khoa Hà Nội, Anh từng du học ngành thiết kế đồ họa đa phương tiện tại tập đoàn Aptech Limited - Bangalore Ấn Độ theo chương trình giảng viên tài năng. Anh từng làm việc trong nhiều dự án lớn thuộc tập đoàn FPT, tham gia rất nhiều dự án Freelancer và thiết kế đồ hoạ nên kinh nghiệm thực tế dồi dào, mong muốn đem những kinh nghiệm này chia sẽ cho tất cả mọi người giúp các bạn có được những hàm trang quý báu trên con đường sự nghiệp. Anh hiện là giảng viên tại trường đại học FPT, có kinh nghiệm 12 năm trong nghề thiết kế, lập trình web, đã và đang giảng dạy, đào tạo cho khoảng hơn 10.000+ học viên thiết kế, lập trình web tại Việt Nam."
        } else if (name === "Nguyễn Văn Hậu") {
            nameTeacher = "Ông Nguyễn Văn Hậu gia nhập HUTECH năm 1991 và được giao trọng trách làm Phó Giám đốc đơn vị sản xuất phần mềm của FPT. Nhận thấy nhu cầu nhu cầu nhân lực chất lượng cao trong lĩnh vực phần mềm, ông trực tiếp xây dựng hệ thống trung tâm đào tạo lập trình viên quốc tế theo mô hình franchise của Aptech (Ấn Độ), mở ra hướng kinh doanh mới trong lĩnh vực giáo dục của FPT. Ông là một trong những thành viên sáng lập ra Đại học HUTECH.";
        } else if (name === "Hoàng Nam Tiến") {
            nameTeacher = "Ông gia nhập FPT năm 1993 sau khi tốt nghiệp ĐH Bách khoa Hà Nội, chuyên ngành Tin học. Ông là một lãnh đạo có nhiều ý tưởng sáng tạo và bề dày quản trị trong nhiều lĩnh vực kinh doanh tại FPT. Trong suốt thời gian làm việc, ông Tiến luôn được lãnh đạo Tập đoàn tín nhiệm và giao phó nhiều vị trí quan trọng. Năm 2012, ông Phạm Huy Hoàng được bổ nhiệm vị trí Chủ tịch Công ty TNHH Phần mềm FPT (FPT Software). Với tinh thần xông pha của một “chiến tướng”, ông đã góp phần giúp FPT Software đạt tốc độ tăng trưởng trên 30% nhiều năm liên tiếp. Công ty Phần mềm FPT trở thành một trong 500 công ty phần mềm lớn nhất trên thế giới và lọt vào Top 100 nhà cung cấp dịch vụ hàng đầu thế giới. Trước đó, trong vai trò Tổng Giám đốc Công ty TNHH Phân phối FPT, ông cũng đã góp phần quan trọng giúp FPT hoàn thành mục tiêu đạt 1 tỷ USD doanh thu vào năm 2008.";
        } else if (name === "Phạm Thanh Hưng") {
            nameTeacher = "Giành giải thưởng Nhà thiết kế & Nhiếp ảnh gia liên ngành. Là một nhà thiết kế đồ họa bất đắc dĩ, tôi chạy trốn khỏi một con đường truyền thống và khám phá sự sáng tạo của mình, thử sức mình với các kỹ thuật và phần mềm khác nhau. Phần mềm không chỉ là một công cụ và tôi cố gắng đào sâu vào nó. Trong 6 năm qua, tôi đã giúp các công ty, tổ chức và khởi nghiệp toàn cầu đạt được mục tiêu kinh doanh với thiết kế tương tác tập trung vào người dùng. Tôi thích mang lại sự rõ ràng cho các vấn đề phức tạp với cách tiếp cận đầu tiên của mọi người.";
        }

        return nameTeacher;
    }


    experience = name => {
        const experiences = [];
        if (name === "Nguyễn Đức Việt") {
            experiences[0] = "Tốt nghiệp Đại học Bách khoa, khoa công nghệ thông tin kết quả xuất sắc"
            experiences[1] = "Giảng viên tại Hutech và là 1 trong 10 giáo viên giỏi nhất trường"
            experiences[2] = "Hiện tại, đang làm Freelancer cho các công ty lớn ở Việt Nam"
            experiences[3] = "Đại học Bách khoa"
            experiences[4] = "Đại học Hutech"
            experiences[5] = "Freelancer"

        } else if (name === "Phạm Thanh Hưng") {
            experiences[0] = "Đại Học Fox Young, New York, thạc sĩ Khoa học máy tính"
            experiences[1] = "Đại Học Kỹ Thuật, New York, Cử Nhân Khoa Học Máy Tính"
            experiences[2] = "Đại Học Công Lập Queensglen, California Văn Bằng Thiết Kế Web"
            experiences[3] = "Đại Học Fox Young, New York"
            experiences[4] = "Crowmont Design School, California"
            experiences[5] = "Đại Học Công Lập Queensglen, California"
        } else if (name === "Nguyễn Văn Hậu") {
            experiences[0] = "Ở trong một công ty có cấu trúc lương rất tốt, với quy trình làm việc rõ ràng và xác định, đã giúp tôi phát triển cả về cá nhân lẫn kĩ năng chuyên nghiệp, cũng như tận hưởng một môi trường làm việc trẻ và quốc tế. Tôi đã có cơ hội xác định lại cách tôi làm việc theo cách thông minh hơn."
            experiences[1] = "Là công ty thiết kế đầu tiên trong sự nghiệp của tôi và là một trong những người giỏi nhất ở New York, tôi đã học được cách thành thạo trong môi trường làm việc nhịp độ nhanh."
            experiences[2] = "Tạo các khung để hướng dẫn tư duy phê phán, hợp lý hóa quá trình lên ý tưởng và hình dung các khái niệm phức tạp. Sử dụng các phương pháp đồ họa khác nhau để làm cho những ý tưởng phức tạp trở nên hữu hình hơn."
            experiences[3] = "Fakebook Studio, New York"
            experiences[4] = "Dropzone, NYC"
            experiences[5] = "Sagmeesterwaash, NYC"
        } else if (name === "Hoàng Nam Tiến") {
            experiences[0] = "Sinh viên ngành Software Engineering khóa 6A, trường Đại Học FPT Hồ Chí Minh."
            experiences[1] = "Thạc sĩ ngành Computer Science tại Đại học Lancaster ở Anh"
            experiences[2] = "Giảng viên cấp cao tại trường Amsterdam Hà Nội"
            experiences[3] = "Đại học FPT Hồ Chí Minh"
            experiences[4] = "Đại học Lancaster ở Anh"
            experiences[5] = "Trường Amsterdam Hà Nội"
        }
        return experiences;
    }
    render() {
        const name_teacher = this.props.location.state.teacher.name;
        return (
            <div className='detailsTeacher'>
                <Header />
                <Menuu />
                <Slider />
                <div>
                    <section className="about" id="about">
                        <div className="containerr">
                            <div className="profile-img">
                                <img src={`images/${this.props.location.state.teacher.image}`} alt="" />
                            </div>
                            <div className="about-details">
                                <div className="about-heading">
                                    <h1>About</h1>
                                    <h6>Myself</h6>
                                </div>
                                <h2>Xin chào ! Tôi là <span>{name_teacher}</span></h2>
                                <h3>{this.props.location.state.teacher.position}</h3>
                                {
                                    <p className='name-teacher'>{this.nameString(name_teacher)}</p>

                                }


                                <div className="sign">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Signature_of_Siti_Nurhaliza.svg/1280px-Signature_of_Siti_Nurhaliza.svg.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* END ABOUT */}

                    {/* EXPERIENCE  */}
                    <section className="experience" id="experience">
                        <div className="containerr">
                            <div className="section-heading">
                                <h1>Kinh nghiệm làm việc</h1>
                                <div className="line"></div>
                            </div>
                        </div>
                        <div className="timeline">
                            <ul>
                                <li className="date" data-date="2011 - Present">
                                    <h1>{this.experience(name_teacher)[3]}</h1>
                                    <p>
                                        {this.experience(name_teacher)[0]}
                                    </p>
                                </li>
                                <li className="date" data-date="2008 - 2011">
                                    <h1>{this.experience(name_teacher)[4]}</h1>
                                    <p>
                                        {this.experience(name_teacher)[1]}
                                    </p>
                                </li>
                                <li className="date" data-date="2011 - 2019">
                                    <h1>{this.experience(name_teacher)[5]}</h1>
                                    <p>
                                        {this.experience(name_teacher)[2]}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </section>
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

