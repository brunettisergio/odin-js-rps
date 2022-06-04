let playerWins = 0,
    computerWins = 0;
    
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
        console.log("Player " + playerWins + " - Computer " + computerWins);
    }
    if (playerWins == computerWins) console.log("It's a tie!");
    else if (playerWins > computerWins) console.log("Player wins!");
    else console.log("Computer wins!")
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    if (playerSelection == computerSelection) return "It's a Tie!";
    else if (playerSelection == 1 && computerSelection == 2) {
        computerWins++;
        return "You lose! Paper beats rock!";
    } else if (playerSelection == 1 && computerSelection == 3) {
        playerWins++;
        return "You won! Rock beats scissors";
    } else if (playerSelection == 2 && computerSelection == 1) {
        playerWins++;
        return "You won! Paper beats Rock.";
    } else if (playerSelection == 2 && computerSelection == 3) {
        computerWins++;
        return "You lose! Scissors beats Paper.";
    } else if (playerSelection == 3 && computerSelection == 1) {
        computerWins++;
        return "You lose! Rock beats Scissors.";
    }  else {
        playerWins++;
        return "You won! Scissors beats Paper.";
    }
}


function playerPlay() {
    let selection = prompt("What's your selection?");
    if (selection.toUpperCase() == "ROCK") return 1;
    else if (selection.toUpperCase() == "PAPERS") return 2;
    else if (selection.toUpperCase() == "SCISSORS") return 3;
}

function computerPlay() {
    return Math.floor(Math.random() * 3);
}

