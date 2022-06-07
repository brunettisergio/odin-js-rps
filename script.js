let playerWins = 0,
    computerWins = 0,
    playerSelection = 0,
    computerSelection = 0;

function playRound(playerSelection) {
    if (playerWins < 5 && computerWins < 5) {
        computerSelection = computerPlay();
        if (playerSelection == computerSelection) {
            result.textContent = "It's a Tie!";
        } else if (playerSelection == 1 && computerSelection == 2) {
            computerWins++;
            result.textContent = "You lose! Paper beats rock!";
        } else if (playerSelection == 1 && computerSelection == 3) {
            playerWins++;
            result.textContent = "You won! Rock beats scissors";
        } else if (playerSelection == 2 && computerSelection == 1) {
            playerWins++;
            result.textContent = "You won! Paper beats Rock.";
        } else if (playerSelection == 2 && computerSelection == 3) {
            computerWins++;
            result.textContent = "You lose! Scissors beats Paper.";
        } else if (playerSelection == 3 && computerSelection == 1) {
            computerWins++;
            result.textContent = "You lose! Rock beats Scissors.";
        }  else {
            playerWins++;
            result.textContent = "You won! Scissors beats Paper.";
        }
    } else if (playerWins == 5) {
        result.textContent = "Player wins!";
    } else { 
        result.textContent = "Computer wins!";
    }
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;
}

function computerPlay() {
    return Math.floor(Math.random() * 3);
}

const rock = document.querySelector("#rock");
rock.addEventListener('click', function () {
    playRound(1)
});

const paper = document.querySelector("#paper");
paper.addEventListener('click', function () {
    playRound(2)
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', function () {
    playRound(3)
});

const playerScore = document.querySelector(".score.player");
const computerScore = document.querySelector(".score.computer");

const result = document.querySelector("#result");

const github = document.querySelector("#github");
github.addEventListener('click', function () {
    window.open("https://github.com/brunettisergio", "_blank")
});

const linkedin = document.querySelector("#linkedin");
linkedin.addEventListener('click', function () {
    window.open("https://www.linkedin.com/in/brunettisergio/", "_blank")
});

const instagram = document.querySelector("#instagram");
instagram.addEventListener('click', function () {
    window.open("https://www.instagram.com/brunettisergio/", "_blank")
});

const twitter = document.querySelector("#twitter");
twitter.addEventListener('click', function () {
    window.open("https://twitter.com/brunettisergio", "_blank")
});