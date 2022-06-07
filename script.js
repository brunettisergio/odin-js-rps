// Game functionality
let playerWins = 0,
    computerWins = 0,
    computerSelection = "",
    player = "",
    computer = "";

const ROCK = "Rock",
    PAPER = "Paper",
    SCISSORS = "Scissors";

function playRound(playerSelection, computerSelection) {
    if (playerWins < 5 && computerWins < 5) {
        if (playerSelection === computerSelection) {
            result.textContent = "It's a Tie!";
        } else if (
            (playerSelection === ROCK && computerSelection === SCISSORS) || 
            (playerSelection === SCISSORS && computerSelection === PAPER) ||
            (playerSelection === PAPER && computerSelection === ROCK)
        ) {
            playerWins++;
            playerScore.textContent = playerWins;
            result.textContent = 
                "Player wins the round! " + playerSelection + " beats " + 
                computerSelection + ".";
        } else if (
            (playerSelection === ROCK && computerSelection === PAPER) || 
            (playerSelection === SCISSORS && computerSelection === ROCK) ||
            (playerSelection === PAPER && computerSelection === SCISSORS)
        ) {
            computerWins++;
            computerScore.textContent = computerWins;
            result.textContent = 
                "Computer wins the round! " + computerSelection + " beats " + 
                playerSelection + ".";
        }
    } else if (playerWins == 5) {
        result.textContent = "Player wins!";
    } else { 
        result.textContent = "Computer wins!";
    }
}

function computerPlay() {
    let x = Math.floor(Math.random() * 3);
    if (x == 0) return ROCK;
    else if (x == 1) return PAPER;
    else if (x == 2) return SCISSORS;
}


// HTML Elements.
const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");
const playerScore = document.querySelector(".score.player");
const computerScore = document.querySelector(".score.computer");
const result = document.querySelector("#result");
const github = document.querySelector("#github");
const linkedin = document.querySelector("#linkedin");
const instagram = document.querySelector("#instagram");
const twitter = document.querySelector("#twitter");

// "Onclick" functions for buttons and social links.
rockButton.addEventListener('click', function () {
    player = ROCK;
    computer = computerPlay();
    playRound(player, computer);
});

paperButton.addEventListener('click', function () {
    player = PAPER;
    computer = computerPlay();
    playRound(player, computer);
});

scissorsButton.addEventListener('click', function () {
    player = SCISSORS;
    computer = computerPlay();
    playRound(player, computer);
});

github.addEventListener('click', function () {
    window.open("https://github.com/brunettisergio", "_blank")
});

linkedin.addEventListener('click', function () {
    window.open("https://www.linkedin.com/in/brunettisergio/", "_blank")
});

instagram.addEventListener('click', function () {
    window.open("https://www.instagram.com/brunettisergio/", "_blank")
});

twitter.addEventListener('click', function () {
    window.open("https://twitter.com/brunettisergio", "_blank")
});