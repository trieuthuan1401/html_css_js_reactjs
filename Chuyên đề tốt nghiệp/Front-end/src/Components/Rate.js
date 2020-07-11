import React, { Component } from 'react'

export default class Rate extends Component {
    render() {
        return (
            <div>
                <div className="rate" >
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-12">
                                <div className="_1rate">
                                    <div className="number">20+</div>
                                    <div className="des">Khoá học chất lượng</div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-12">
                                <div className="_1rate">
                                    <div className="number">300+</div>
                                    <div className="des">Học viên đã tham gia</div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-12">
                                <div className="_1rate">
                                    <div className="number">95%</div>
                                    <div className="des">Hài lòng với khoá học</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}