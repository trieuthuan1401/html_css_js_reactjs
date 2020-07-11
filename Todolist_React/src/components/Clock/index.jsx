	import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'


function formatDate() {
    const date = new Date();
    // slice(-2) là lấy 2 phần tử trong mảng nhưng ở vị trí cuối mãng đi lên.
    let hours = `0${date.getHours()}`.slice(-2);
    let minutes = `0${date.getMinutes()}`.slice(-2);
    let seconds = `0${date.getSeconds()}`.slice(-2);
    Number(hours, minutes, seconds)
    hours = 24 - hours;
    minutes = 60 - minutes;
    seconds = 60 - seconds;
    return `${hours}:${minutes}:${seconds}`;
}
function Clock(props) {
    const [timeString, settimeString] = useState('');

    useEffect(() => {
        const clockInterval = setInterval(() => {
            settimeString(formatDate());
        }, 1000);
        return () => {
            // setInterval thì phải clear nó đi
            // Phải clean up bởi vì nếu lở chúng ta unMount clock đi thì thằng interval nó vẫn còn chạy
            // bởi vì chúng ta chưa clear nó và nó sẽ setTimeOut render tiếp thì chúng ta sẽ bị lỗi
            // nên khi Unmout thì chúng ta phải clear nó đi để nó k chạy nữa
            clearInterval(clockInterval);
        }
    }, []);
    return (
        <div className="clock">
            <p>{timeString}</p>
        </div>
    )
}

export default Clock

