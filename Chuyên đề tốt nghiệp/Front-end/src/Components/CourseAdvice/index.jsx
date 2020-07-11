import React from 'react'
import './stylee.css'



export default function CourseAdvice() {
    function handleChange() {
        let modalCall = document.querySelector('.modal-call');
        modalCall.classList.remove('active');
    }


    function handleToast() {

        let domToast = document.querySelector('.toast-message')
        domToast.classList.add('active');

        let modalCall = document.querySelector('.modal-call');
        modalCall.classList.remove('active');



        let valuePhoneModal = document.querySelector('.modal-call-input').value
        let domNotificationToast = document.querySelector('.notificationToast');
        if (valuePhoneModal.length === 10 || valuePhoneModal.length === 11) {
            domNotificationToast.innerHTML = "Hiện tại cuộc gọi đang quá tải, chúng tôi sẽ liên hệ với bạn trong khoảng thời gian sớm nhất.";
        }
        else {
            domNotificationToast.innerHTML = "Số điện thoại này không có, Vui lòng kiểm tra lại số điện thoại";
        }


    }

    return (


        <div className="modal-call" >
            <div className="modal-call__close" onClick={() => { handleChange() }}>
                <i className="fa fa-times" />
            </div>
            <div className="modal-call__image" >
                <img src="images/modalCall.png" alt="" />
            </div>
            <div className="modal-call__title">Tư vấn khoá học</div>
            <div className="modal-call__phone">
                <a>0969.209.088</a>
            </div>
            <div className="modal-call__description">
                Vui lòng kết nối tai nghe hoặc hệ thống sẽ sử dụng loa và microphone trên thiết bị của bạn
                để gọi điện
                <span style={{ color: '#ea6c6c' }}>MIỄN PHÍ</span>
            </div>
            <div className="phoneDevice">
                <span>+84</span>
                <input className="modal-call-input" placeholder="Nhập số điện thoại của bạn" />
            </div>
            <button className="btn modal-call-btn" onClick={() => { handleToast() }}>GỌI ĐIỆN</button>
        </div>
    )
}
