// // import React, { Component } from 'react'
// // 


// // // import React, { Component } from 'react'

// // // event.preventDefault()
// // // alert('Đổi mật khẩu thành công');
// // // console.log(this.refs.newPass);
// // // console.log(this.refs.newRePass);
// // // window.location.replace("http://localhost:3000/custommer")



// export default class ChangePassWord extends Component {


//     handleReload = (event) => {
//         event.preventDefault()
//         alert('Đổi mật khẩu thành công');
//         console.log(this.refs.newPass);
//         console.log(this.refs.newRePass);
//         window.location.replace("http://localhost:3000/custommer")
//     }
//     render() {
//         return (
//             <div className="wrapper">
//                 <div className="form-container">
//                     <span className="form-headingg">Đổi mật khẩu</span>
//                     <form className='form_chagePass'>
//                         <div className="input-groupp">
//                             <i className="fa fa-lock" />
//                             <input type="password" placeholder="Mật khẩu cũ" required id="taiKhoan" />
//                             <span className="barr" />
//                         </div>
//                         <div className="input-groupp">
//                             <i className="fa fa-lock" />
//                             <input type="password" placeholder="Mật khẩu mới"
//                                 required
//                                 id="matKhau"
//                                 ref="newPass"
//                             />
//                             <span className="barr" />
//                         </div>
//                         <div className="input-groupp">
//                             <i className="fa fa-lock" />
//                             <input type="password" placeholder="Nhập lại mật khẩu" required id="matKhau" ref="newRePass" />
//                             <span className="barr" />
//                         </div>
//                         <div className="logiin" onClick={(event) => handleCustom(event)}>
//                             <button className='btnChangePass'>
//                                 <i className="fa fa-telegram-plane" aria-hidden="true" /> <span >Lưu mật khẩu</span>
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }



import React from 'react'
import './style.css'

export default function ChangePassWord() {
    function handleCustom(event) {
        event.preventDefault()
        // alert('Đổi mật khẩu thành công');

        let domNewPass = document.querySelector('#newPass').value
        let domNewRePass = document.querySelector('#newRePass').value

        // console.log(domNewPass)
        // console.log(domNewRePass)

        // if (domNewPass === domNewRePass) {
        //     window.location.replace("http://localhost:3000/custommer")
        // }

    }

    function checkNewPass() {
        let domNewPass = document.querySelector('#newPass').value
        let domNewRePass = document.querySelector('#newRePass').value
        let domErrRePass = document.querySelector('.error-repass')
        // console.log(domNewRePass)
        if (domNewPass !== domNewRePass) {
            domErrRePass.classList.add('active')
        } else if (domNewPass === domNewRePass) {
            domErrRePass.classList.remove('active')
        }
    }

    function handleBlur() {
        let domWrap = document.querySelector('.wrapperr');
        domWrap.classList.add('blur')
        let domToast = document.querySelector('.notificationSuccess')
        domToast.classList.add('active')

    }

    function handleRemove() {
        let domWrap = document.querySelector('.wrapperr');
        domWrap.classList.remove('blur')
        let domToast = document.querySelector('.notificationSuccess')
        domToast.classList.remove('active')
        window.location.replace("http://localhost:3000/custommer")
    }

    var countIndexClass = 0;
    function handeleChangeClose() {
        let domEye = document.getElementsByClassName('fa-eye-slash')
        let domInput = document.getElementsByClassName('changePass')
        for (let index = 0; index < domEye.length; index++) {
            domEye[index].onclick = function () {
                countIndexClass += 1;
                if (countIndexClass % 2 !== 0) {
                    this.classList.remove('fa-eye-slash')
                    this.classList.add('fa-eye')
                    if (this.classList.contains('1')) {
                        domInput[0].type = 'text'
                    } else if (this.classList.contains('2')) {
                        domInput[1].type = 'text'
                    } else {
                        domInput[2].type = 'text'
                    }
                } else if (countIndexClass % 2 === 0) {
                    this.classList.remove('fa-eye')
                    this.classList.add('fa-eye-slash')
                    if (this.classList.contains('1')) {
                        domInput[0].type = 'password'
                    } else if (this.classList.contains('2')) {
                        domInput[1].type = 'password'
                    } else {
                        domInput[2].type = 'password'
                    }
                }
            }
        }
    }


    return (
        <div>
            <div className="wrapperr" >
                <div className="form-container">
                    <span className="form-headingg">Đổi mật khẩu</span>
                    <form className='form_chagePass'>
                        <div className="input-groupp">
                            <i className="fa fa-lock" />
                            {/* <i class="far fa-eye-slash"></i> */}
                            <input type="password" placeholder="Mật khẩu hiện tại" required id="taiKhoan" className='changePass' />
                            <span className="barr" />

                            <i className="fa fa-eye-slash 1" onClick={() => handeleChangeClose()} ></i>
                        </div>

                        <div className="input-groupp">
                            <i className="fa fa-lock" />
                            <input type="password" placeholder="Mật khẩu mới"
                                required
                                id="newPass"
                                className='changePass'
                            />

                            <span className="barr" />

                            <i className="fa fa-eye-slash 2" onClick={() => handeleChangeClose()} ></i>
                        </div>
                        <div className="input-groupp">
                            <i className="fa fa-lock" />
                            <input type="password" placeholder="Nhập lại mật khẩu mới" required id="newRePass" className='changePass' onChange={() => { checkNewPass() }} />
                            <span className="barr" />
                            <i className="fa fa-eye-slash 3" onClick={() => handeleChangeClose()} ></i>
                        </div>
                        <span className="error-repass"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/e9MKv7IClnn.gif" alt="" className='error_img' /> Mật khẩu không khớp</span>
                        <div className="logiin" onClick={(event) => handleCustom(event)}>
                            <button className='btnChangePass' onClick={() => { handleBlur() }}>
                                <i className="fa fa-telegram-plane" aria-hidden="true" /> <span >Lưu thay đổi</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div >

            <div className="notificationSuccess">
                <div className="notificationSuccess_content">
                    Đổi mật khẩu thành công
                </div>
                <div className="notificationSuccess_btn" onClick={() => handleRemove()}>
                    <i className="fa fa-arrow-left"></i> Quay về
                </div>
            </div >
        </div >
    )
}


