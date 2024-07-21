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

function updateScore(winner) {
    if (winner === "human") {
        const humanScore = document.querySelector(".humanScore");
        humanScore.dataset.score = +humanScore.dataset.score + 1;
        humanScore.textContent = `Human: ${humanScore.dataset.score}`;
    } else if (winner === "computer") {
        const computerScore = document.querySelector(".computerScore");
        computerScore.dataset.score = +computerScore.dataset.score + 1;
        computerScore.textContent = `Computer: ${computerScore.dataset.score}`
    }

    return;
}

function playRound(e) {

    const humanChoice = e.currentTarget.value;
    const computerChoice =  getComputerChoice();

    if (humanChoice === computerChoice) {
        recordResult(`Tie! You both picked ${humanChoice}!`);
        return "tie";
    }
    if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper"
    ) {
        recordResult(`You win! ${capitalize(humanChoice)} beats ${computerChoice}.`);
        updateScore("human");
        return "human";
    }

    recordResult(`You lose! ${capitalize(computerChoice)} beats ${humanChoice}.`);
    updateScore("computer");
    return "computer";
}