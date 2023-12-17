let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}

function capitalize(word) {
    return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
}

function getPlayerChoice() {
    let playerChoice = capitalize(prompt('Rock, Paper, or Scissors?', ''));
    let isInputValid = choices.includes(playerChoice);

    while(isInputValid === false) {
        playerChoice = capitalize(prompt('Invalid input. Rock, Paper, or Scissors?', ''));
        isInputValid = choices.includes(playerChoice);
    }

    return playerChoice;
}

let playerSelect = getPlayerChoice();

console.log(playerSelect);

// function playRound(playerSelection, computerSelection) {
//     playerSelection = capitalize(playerSelection);
//     let checkTie = true;

//     while(checkTie === true) {
//         if (playerSelection === computerSelection) {
//             computerSelection = getComputerChoice()
//         }
//     }
// }