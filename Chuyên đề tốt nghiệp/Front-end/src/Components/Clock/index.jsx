import React, { useState, useEffect } from 'react'
import './style.css'


function formatTime() {
    const now = new Date();

    // slice -2 là lấy ở cuối mãng lên 2 phần tử

    let hours = `0${24 - now.getHours()}`.slice(-2);
    let minutes = `0${60 - now.getMinutes()}`.slice(-2);
    let seconds = `0${60 - now.getSeconds()}`.slice(-2);

    return `${hours} : ${minutes} : ${seconds}`;

}

function Clock(props) {

    const [timeString, settimeString] = useState('');
    useEffect(() => {
        const clockInterval = setInterval(() => {
            settimeString(formatTime());
        }, 1000);
        return () => {
            clearInterval(clockInterval);
        }
    }, [])
    return (
        <div className='clock'>
            <span className='titleClock'>Thời gian giảm giá khoá học chỉ còn</span>   <span className='timeSale'> <div className="lineTime"> </div>   <i className="fa fa-clock-o"></i> {timeString}   </span> <div className="lineTime"></div>
        </div>
    )
}

export default Clock

