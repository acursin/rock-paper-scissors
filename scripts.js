function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

