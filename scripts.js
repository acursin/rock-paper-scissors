// Prompt user for choice of rock, paper, or scissors and reject invalid choices
function getHumanChoice() {
    let choice = prompt('Enter choice:', '').toLowerCase();

    while (choice != 'rock' && choice != 'paper' && choice != 'scissors') {
        choice = prompt('Invalid choice. Try again:', '').toLowerCase()
    }

    return choice;
}

// Print the final winner of multiple rounds
function printGameWinner(humanFinalScore, computerFinalScore) {
    const FINAL_SCORE_MSG = `Final score: Human - ${humanFinalScore}, Computer - ${computerFinalScore}`;

    if (humanFinalScore > computerFinalScore) {
        console.log(`You win! ${FINAL_SCORE_MSG}`);
    }
    else if (humanFinalScore < computerFinalScore) {
        console.log(`You lose! ${FINAL_SCORE_MSG}`);
    }
    else {
        console.log(`Tie! ${FINAL_SCORE_MSG}`);
    }

    return;
}

// Play a certain number of rounds, keep track of score, and declare a winner
function playGame(rounds) {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < rounds; i++) {
        let winner = playRound(getHumanChoice(), getComputerChoice());

        if (winner === 'human') {humanScore++};
        if (winner === 'computer') {computerScore++};
    }

    printGameWinner(humanScore, computerScore);

    return;
}

const buttons = document.querySelectorAll("button");
const results = document.querySelector('.results');
buttons.forEach((button) => {
    button.addEventListener("click", playRound);
});

// Randomly choose rock, paper, or scissors for computer
function getComputerChoice() {
    const NUM_CHOICES = 3;

    const choiceNum = Math.floor(Math.random() * NUM_CHOICES);

    switch(choiceNum) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// Capitalize string
function capitalize(str) { return `${str.at(0).toUpperCase()}${str.slice(1).toLowerCase()}`; }

function recordResult(result, humanChoice, computerChoice) {
    switch (result) {
        case 'tie':
            console.log(`Tie! You both picked ${humanChoice}!`);
            break;
        case 'human':
            console.log(`You win! ${capitalize(humanChoice)} beats ${computerChoice}.`);
            break;
        case 'computer':
            console.log(`You lose! ${capitalize(computerChoice)} beats ${humanChoice}.`);
            break;
    }
}

// Play one round of rock paper scissors, return the winner and print message to console
function playRound(e) {
    const humanSelection = e.currentTarget.value;
    const computerSelection =  getComputerChoice();
    if (humanSelection === computerSelection) {
        recordResult('tie', humanSelection, computerSelection);
        return 'tie';
    }

    if (humanSelection === 'rock' && computerSelection === 'scissors'
        || humanSelection === 'paper' && computerSelection === 'rock'
        || humanSelection === 'scissors' && computerSelection === 'paper'
    ) {
        recordResult('human', humanSelection, computerSelection);
        return 'human';
    }

    recordResult('computer', humanSelection, computerSelection);
    return 'computer';
}