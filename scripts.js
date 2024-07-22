let gameState = "playing";

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
    results.insertBefore(currentResult, results.firstElementChild);
}

function updateScore(winner) {
    if (winner === "human") {
        const humanScore = document.querySelector(".humanScore");
        humanScore.dataset.score = +humanScore.dataset.score + 1;
        humanScore.textContent = `Human: ${humanScore.dataset.score}`;
        return +humanScore.dataset.score;
    }

    if (winner === "computer") {
        const computerScore = document.querySelector(".computerScore");
        computerScore.dataset.score = +computerScore.dataset.score + 1;
        computerScore.textContent = `Computer: ${computerScore.dataset.score}`
        return +computerScore.dataset.score;
    }

    if (winner === "reset") {
        const humanScore = document.querySelector(".humanScore");
        humanScore.dataset.score = 0;
        humanScore.textContent = "Human: 0";

        const computerScore = document.querySelector(".computerScore");
        computerScore.dataset.score = 0;
        computerScore.textContent = "Computer: 0";

        return;
    }
}

function printGameWinner() {
    const humanFinalScore = document.querySelector(".humanScore");
    const computerFinalScore = document.querySelector(".computerScore");

    const FINAL_SCORE_MSG = `Final score: Human - ${humanFinalScore.dataset.score}, Computer - ${computerFinalScore.dataset.score}`;

    if (humanFinalScore.dataset.score > computerFinalScore.dataset.score) {
        recordResult(`You win! ${FINAL_SCORE_MSG}`);
    }
    else {
        recordResult(`You lose! ${FINAL_SCORE_MSG}`);
    }

    return;
}

function clearResults() {
    const results = document.querySelector(".results");
    results.replaceChildren();
}


function playRound(e) {
    if (gameState === "over") {
        clearResults();
        gameState = "playing";
    }

    const humanChoice = e.currentTarget.value;
    const computerChoice =  getComputerChoice();

    let winningScore = 0;

    if (humanChoice === computerChoice) {
        recordResult(`Tie! You both picked ${humanChoice}!`);
        return;
    }

    if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper"
    ) {
        recordResult(`You win! ${capitalize(humanChoice)} beats ${computerChoice}.`);
        winningScore = updateScore("human");
    } else {
        recordResult(`You lose! ${capitalize(computerChoice)} beats ${humanChoice}.`);
        winningScore = updateScore("computer");
    }

    if (winningScore === 5) {
        printGameWinner();
        updateScore("reset");
        gameState = "over";
    }

    return;
}