const hourHand = document.querySelector('[data-hour-hand]');
const secondHand = document.querySelector('[data-second-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');

// Sau 1 giây thì vào gọi hàm đó
setInterval(setClock, 1000);

function setClock() {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(hourHand, hourRatio);
    setRotation(secondHand, secondRatio);
    setRotation(minuteHand, minutesRatio);
}


function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}



