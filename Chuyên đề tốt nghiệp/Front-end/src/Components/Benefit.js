import React, { Component } from 'react'

export default class Benefit extends Component {
    render() {
        return (
            <div className="benefit">
                <div className="container benefit_container">
                    <h1 className="benefit_title text-center">Lợi ích của việc học online</h1>
                    <div className="row text-center">
                        <div className="col-xl-3 col-6 mb-2">
                            <div className="_1benefit">
                                <div className="icon">
                                    <img src="images/wifi.png" alt="" className="img-fluidd text-center" />
                                    <h4 className="title-heading">Học mọi lúc mọi nơi</h4>
                                    <p className="title-sub">Chỉ cần có kết nối internet và các thiết bị truy cập mạng, bạn có thể
                            học mọi lúc, mọi nơi.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-6 mb-2">
                            <div className="_1benefit">
                                <div className="icon">
                                    <img src="images/earth.png" alt="" />
                                    <h4 className="title-heading">Học không giới hạn</h4>
                                    <p className="title-sub">Bạn chỉ cần mua 1 lần và học mãi mãi. Bạn có thể học đi học lại nhiều
                            lần, tuỳ vào mong muốn và thời gian của bạn.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-6 mb-2">
                            <div className="_1benefit">
                                <div className="icon">
                                    <img src="images/pig.png" alt="" />
                                    <h4 className="title-heading">Chi phí học tập thấp</h4>
                                    <p className="title-sub">Chỉ từ 280,000Đ cho một khóa học chất lượng. Đăng ký ngay bạn sẽ nhận
                            được nhiều hơn những gì bạn bỏ ra.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-6 mb-2">
                            <div className="_1benefit">
                                <div className="icon">
                                    <img src="images/like.png" alt="" />
                                    <h4 className="title-heading">Bảo hành trọn đời</h4>
                                    <p className="title-sub">Cam kết bảo hành khóa học trọn đời, học viên nếu không hài lòng sẽ được
                            hoàn lại học phí.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}