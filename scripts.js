let choices = ['Rock', 'Paper', 'Scissors'];

function capitalize(word) { return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase(); }

function getPlayerChoice() {
    let playerChoice = capitalize(prompt('Rock, Paper, or Scissors?', ''));
    while(!choices.includes(playerChoice)) {
        playerChoice = capitalize(prompt('Invalid input. Rock, Paper, or Scissors?', ''));
    }
    return playerChoice;
}

function getComputerChoice() { return choices[Math.floor(Math.random() * 3)]; }

function playRound(playerSelection, computerSelection) {
    while(playerSelection === computerSelection) {
        console.log(`Tie! You both picked ${playerSelection}`)
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
    }

    if (playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === 'Scissors' && computerSelection === 'Paper' || playerSelection === 'Paper' && computerSelection === 'Rock') {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return 'Player';
    }

    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    return 'Computer';
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundResult = '';

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:\n`)
        roundResult = playRound(getPlayerChoice(), getComputerChoice());
        if (roundResult === 'Player') {
            playerScore++;
        } else {
            computerScore++;
        }
    }

    return playerScore > computerScore ? `You Win! Final score:\nPlayer - ${playerScore}, Computer - ${computerScore}` : `You Lose! Final score:\nPlayer - ${playerScore}, Computer - ${computerScore}`
}

console.log(game());