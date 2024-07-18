function capitalize(str) { return `${str.at(0).toUpperCase()}${str.slice(1).toLowerCase()}`; }

function getHumanChoice() {
    let choice = "";

    do  {
        choice = capitalize(prompt("Enter choice:", ""));
        console.log(choice);
    } while (choice != 'Rock' && choice != 'Paper' && choice != 'Scissors');

    return choice;
}

function getComputerChoice() {
    const NUM_CHOICES = 3;

    const choiceNum = Math.floor(Math.random() * NUM_CHOICES);

    switch(choiceNum) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function playRound() {
    const humanChoice =  getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        console.log(`Tie! ${humanChoice} is the same as ${computerChoice}.`);
        return 'tie';
    }

    if (humanChoice === 'rock' && computerChoice === 'scissors'
        || humanChoice === 'paper' && computerChoice === 'rock'
        || humanChoice === 'scissors' && computerChoice === ''
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        return 'human';
    }

    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    return 'computer';
}

function printGameWinner(humanFinalScore, computerFinalScore) {
    if (humanFinalScore > computerFinalScore) {
        console.log(`You win! Final score: Human ${humanFinalScore}, Computer ${computerFinalScore}`);
    }
    else if (humanFinalScore < computerFinalScore) {
        console.log(`You lose! Final score: Human ${humanFinalScore}, Computer ${computerFinalScore}`);
    }
    else {
        console.log('Tie!');
    }

    return;
}

function playGame(rounds) {

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < rounds; i++) {
        let winner = playRound();

        if (winner === 'human') {humanScore++};
        if (winner === 'computer') {computerScore++};
    }

    printGameWinner(humanScore, computerScore);

    return;
}

const NUM_ROUNDS = 5;

playGame(NUM_ROUNDS);