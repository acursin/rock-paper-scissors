function getHumanChoice() {
    let choice = prompt("Enter choice:", "").toLowerCase();

    while (choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = prompt("Invalid choice. Try again:", "").toLowerCase()
    }

    return choice;
}

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

function playGame(rounds) {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < rounds; i++) {
        let winner = playRound(getHumanChoice(), getComputerChoice());

        if (winner === "human") {humanScore++};
        if (winner === "computer") {computerScore++};
    }

    printGameWinner(humanScore, computerScore);

    return;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", playRound);
});

function getComputerChoice() {
    const NUM_CHOICES = 3;

    const choiceNum = Math.floor(Math.random() * NUM_CHOICES);

    switch(choiceNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function capitalize(str) { return `${str.at(0).toUpperCase()}${str.slice(1).toLowerCase()}`; }

function recordResult(resultMessage) {
    const results = document.querySelector(".results");
    const currentResult = document.createElement("p");
    currentResult.textContent = resultMessage;
    results.appendChild(currentResult);
}

function playRound(e) {

    const humanChoice = e.currentTarget.value;
    const computerChoice =  getComputerChoice();

    let resultMessage = "";
    let winner = "";

    if (humanChoice === computerChoice) {
        resultMessage = `Tie! You both picked ${humanChoice}!`
        winner = "tie";
    } else if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper"
    ) {
        resultMessage = `You win! ${capitalize(humanChoice)} beats ${computerChoice}.`
        winner = "human";
    } else {
        resultMessage = `You lose! ${capitalize(computerChoice)} beats ${humanChoice}.`
        winner = "computer";
    }

    recordResult(resultMessage);
    return winner;
}