let choices = ['Rock', 'Paper', 'Scissors'];

function capitalize(word) {
    return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
}

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}

function getPlayerChoice() {
    let playerChoice = capitalize(prompt('Rock, Paper, or Scissors?', ''));

    while(!choices.includes(playerChoice)) {
        playerChoice = capitalize(prompt('Invalid input. Rock, Paper, or Scissors?', ''));
    }

    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    while(checkTie === true) {

    }
}