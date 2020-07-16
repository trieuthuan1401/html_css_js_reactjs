let namee = sessionStorage.getItem('name')
let points = sessionStorage.getItem('points')
let user_time = sessionStorage.getItem('time')


document.querySelector('span.namee').innerHTML = namee
document.querySelector('span.points').innerHTML = points
document.querySelector('.time').innerHTML = user_time
