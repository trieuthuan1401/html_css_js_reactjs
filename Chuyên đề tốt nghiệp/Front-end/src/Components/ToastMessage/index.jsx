import React from 'react'
import './style.css'

export default function ToastMessage() {
    function handleChangeClose() {
        let domToast = document.querySelector('.toast-message')
        domToast.classList.remove('active');

    }
    return (

        <div className="toast-message">
            <div className="toast-message__warning">
                <i className="fa fa-exclamation-triangle" />
            </div>
            <div className="toast-message__content">
                <p className='notificationToast'></p>
            </div>
            <div className="toast-message__close close" onClick={() => { { handleChangeClose() } }}>
                <i className="fa fa-times" aria-hidden="true" />
            </div>
        </div >

    )
}
