let humanScore = 0;
let computerScore = 0;
let computerChoice;
let computerChoiceString = "";
let humanChoice;
let humanChoiceString = "";

const selectionContainer = document.querySelector(".selection-container");
const message = document.querySelector(".message");
const scoreMessage = document.querySelector(".score-message");
const score = document.querySelector(".score");

function computerTurn() {
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        computerChoiceString = "rock";
    }
    else if (computerChoice == 1) {
        computerChoiceString = "paper";
    }
    else {
        computerChoiceString = "scissors";
    }
}

function playRound(humanChoiceString, computerChoiceString) {
    if (humanChoiceString == "rock") {
        if (computerChoiceString == "rock") {
            message.textContent = "Player selects rock! Computer selects rock! Tie!";
            scoreMessage.textContent = "Owing to a tie, no points are awarded!";
        }
        else if (computerChoiceString == "paper") {
            computerScore++;
            message.textContent = "Player selects rock! Computer selects paper! Computer wins!";
            scoreMessage.textContent = "Computer is awarded one point!";
        }
        else {
            humanScore++;
            message.textContent = "Player selects rock! Computer selects scissors! Human wins!";
            scoreMessage.textContent = "Human is awarded one point!";
        } 
    }
    else if (humanChoiceString == "paper") {
        if (computerChoiceString == "rock") {
            humanScore++;
            message.textContent = "Player selects paper! Computer selects rock! Human wins!";
            scoreMessage.textContent = "Human is awarded one point!";
        }
        else if (computerChoiceString == "paper") {
            message.textContent = "Player selects paper! Computer selects paper! Tie!";
            scoreMessage.textContent = "Owing to a tie, no points are awarded!";
        }
        else {
            computerScore++;
            message.textContent = "Player selects paper! Computer selects scissors! Computer wins!";
            scoreMessage.textContent = "Computer is awarded one point!";
        }
    }
    else {
        if (computerChoiceString == "rock") {
            computerScore++;
            message.textContent = "Player selects scissors! Computer selects rock! Computer wins!";
            scoreMessage.textContent = "Computer is awarded one point!";
        }
        else if (computerChoiceString == "paper") {
            humanScore++;
            message.textContent = "Player selects scissors! Computer selects paper! Human wins!";
            scoreMessage.textContent = "Human is awarded one point!";
        }
        else {
            message.textContent = "Player selects scissors! Computer selects scissors! Tie!";
            scoreMessage.textContent = "Owing to a tie, no points are awarded!";
        }
    }
    score.textContent = "Score (Human " + humanScore + " / Computer " + computerScore + ")";
    if (humanScore >= 5) {
        alert("Human wins!");
        location.reload();
    }
    if (computerScore >= 5) {
        alert("Computer wins!");
        location.reload();
    }
}

function compareScores() {
    if (humanScore > computerScore) {
        console.log("You've defeated the computer! Your final score is: " + humanScore);
    }
    else if (computerScore > humanScore) {
        console.log("You've been defeated by the computer! Your final score is: " + humanScore);
    }
    else {
        console.log("You and the computer have ended in a tie! Your final score is: " + humanScore);
    }
}

selectionContainer.addEventListener("click", (e) => {
    let target = e.target;
    computerTurn();
    if (target.id == "rock") {
        playRound("rock", computerChoiceString);
    }
    else if (target.id == "paper") {
        playRound("paper", computerChoiceString);
    }
    else {
        playRound("scissors", computerChoiceString);
    }
    
});



