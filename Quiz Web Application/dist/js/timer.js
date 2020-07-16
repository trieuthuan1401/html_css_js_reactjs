let dt = new Date(new Date().setTime(0))
let time = dt.getTime()

let seconds = Math.floor((time % (100 * 60)) / 1000)
let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
let timex = 0


let myTime = setInterval(() => {
    if (seconds < 59) {
        seconds++
    } else {
        minutes++
        seconds = 0
    }

    let formatSeconds = seconds < 10 ? `0${seconds}` : seconds
    let formatMinutes = minutes < 10 ? `0${minutes}` : minutes
    document.querySelector('.time').innerHTML = `${formatMinutes} : ${formatSeconds}`
}, 1000);