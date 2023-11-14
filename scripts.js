const result = document.querySelector(".result")
const myScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")
const GAME_OPTIONS = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors"
}

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choicesMachine = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choicesMachine[randomNumber]
}

const playTheGame = (human, machine) => {

    if (human === machine) {
        result.style.color = "wheat"
        result.innerHTML = "Deu empate!"
    } else if (
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
    ) {
        humanScoreNumber++
        myScore.innerHTML = humanScoreNumber
        result.style.color = "blue"
        result.innerHTML = "Parabéns! Você ganhou! : )"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.style.color = "red"
        result.innerHTML = "Que pena... você perdeu : ("
    }
}