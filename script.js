const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const choiceButtons = document.querySelectorAll(".choice-button");

let userScoreValue = 0;
let computerScoreValue = 0;

choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const userChoice = button.id;
        const computerChoice = computerPlay();

        userChoiceDisplay.src = `${userChoice}.png`; // Replace with your image paths
        computerChoiceDisplay.src = `${computerChoice}.png`; // Replace with your image paths

        const result = playRound(userChoice, computerChoice);
        displayResult(result);
    });
});

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        userScoreValue++;
        return "You win!";
    } else {
        computerScoreValue++;
        return "Computer wins!";
    }
}

function displayResult(result) {
    userScore.textContent = userScoreValue;
    computerScore.textContent = computerScoreValue;
    alert(result);
}
