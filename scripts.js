function getHumanChoice() {
    let choice = "";

    do  {
        choice = prompt("Enter choice:", "").toLowerCase();
    } while (choice != 'rock' && choice != 'paper' && choice != 'scissors');

    return choice;
}

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
        console.log('You win!');
    }
    else if (humanFinalScore < computerFinalScore) {
        console.log('You lose!');
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