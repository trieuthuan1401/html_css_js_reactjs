const choices = ['paper', 'rock', 'scissors']
const buttons = document.querySelectorAll('.btn-circle')
const scoreEl = document.getElementById('score')
const mainEl = document.getElementById('main')
const selectionEl = document.getElementById('selection')
const reset = document.getElementById('reset')
const user_select = document.getElementById('user_select')
const computer_select = document.getElementById('computer_picked')
const winner = document.getElementById('winner')

let score = 0;
let userChoice = undefined

buttons.forEach(button => {
  button.addEventListener('click', () => {
    userChoice = button.getAttribute('data-choice')
    mainEl.style.display = 'none'
    selectionEl.style.display = 'flex'
    checkWinner(userChoice)
  })
})

function updateSelection(selectionEl, choice) {
  selectionEl.classList.remove('btn-paper')
  selectionEl.classList.remove('btn-rock')
  selectionEl.classList.remove('btn-scissors')

  let img = selectionEl.querySelector('img')
  selectionEl.classList.add(`btn-${choice}`)
  img.src = `./images/icon-${choice}.svg`
  img.alt = choice
}

reset.addEventListener('click', () => {
  mainEl.style.display = 'flex'
  selectionEl.style.display = 'none'
})

function checkWinner(userChoice) {
  const computerChoice = pickRandomChoice()

  updateSelection(user_select, userChoice)
  updateSelection(computer_select, computerChoice)

  if (userChoice === computerChoice) {
    winner.innerText = 'draw'
  } else if (userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'paper') {
    updateScore(1)
    winner.innerText = 'win'
  } else {
    updateScore(-1)
    winner.innerText = 'lose'
  }
}



function updateScore(value) {
  score += value
  scoreEl.innerText = score
}

function pickRandomChoice() {
  return choices[Math.floor(Math.random() * choices.length)]
}
