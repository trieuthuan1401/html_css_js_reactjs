import React from 'react'





export default function Top() {
    // $('.top').click(function (e) {
    //     e.preventDefault();
    //     var offset = $('.header').offset().top;
    //     $('html').animate({ scrollTop: offset }, 1400, "easeOutBounce");
    // });
    function handleChangeTop() {
        let domHTML = document.querySelector('html');
        domHTML.scrollTop = 0;
    }
    return (
        <div className="top float-right" onClick={() => handleChangeTop()}>
            <i className="fa fa-chevron-up"></i>
        </div>
    )
}
