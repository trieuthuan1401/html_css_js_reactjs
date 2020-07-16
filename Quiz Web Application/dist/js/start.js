let welcomeForm = document.querySelector('.welcome_form')
let name = document.getElementById('name')
welcomeForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let value = name.value
    sessionStorage.setItem('name', value)
    location.href = "quiz.html"
});