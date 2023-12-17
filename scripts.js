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
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

console.log(playRound(getPlayerChoice(), getComputerChoice()));