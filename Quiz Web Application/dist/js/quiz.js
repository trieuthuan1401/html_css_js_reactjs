


let questions = [
    {
        id: 1,
        question: "What is the full form of RAM ?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Aceapt Memory",
            "None of these"
        ]
    },

    {
        id: 2,
        question: "What is the full form of CPU?",
        answer: "Central Processing Unit",
        options: [
            "Central Program Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None of these"
        ]
    },

    {
        id: 3,
        question: "What is the full form of E-mail",
        answer: "Electronic Mail",
        options: [
            "Electronic Mail",
            "Electric Mail",
            "Engine Mail",
            "None of these"
        ]
    }
];


// SELECTORS
let name = document.getElementById('name')
let btnNext = document.querySelector('.btn_next')
let question = document.getElementById('questions')
let questionCount = 0;
let quizPoint = 0;
// ADD EVENTS FUNCTION

window.onload = function () {
    show(0)
}


btnNext.addEventListener('click', () => {
    let user_aswer = document.querySelector('li.option.active').innerHTML
    if (user_aswer === questions[questionCount].answer) {
        quizPoint += 10
        sessionStorage.setItem("points", quizPoint)
    }
    // let answer
    if (questionCount === questions.length - 1) {
        sessionStorage.setItem('time', `${minutes} minutes and ${seconds} seconds`)
        clearInterval(myTime)
        location.href = "end.html"
        return
    }
    questionCount++
    show(questionCount)
})


function show(count) {
    question.innerHTML =
        `<h2>Q${count + 1}. ${questions[count].question}</h2>
        <ul class="option_group">
            <li class="option">${questions[count].options[0]}</li>
            <li class="option">${questions[count].options[1]}</li>
            <li class="option">${questions[count].options[2]}</li>
            <li class="option">${questions[count].options[3]}</li>
        </ul>`
    toggleActive()
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].addEventListener('click', function () {
            for (let i = 0; i < option.length; i++) {
                if (option[i].classList.contains("active")) {
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
        )
    }
}



