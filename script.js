let humanScore = 0;
let computerScore = 0;
let computerChoice;
let computerChoiceString = "";
let humanChoice;
let humanChoiceString = "";

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
    console.log("The computer has selected " + computerChoiceString);
}

function humanTurn() {
    humanChoice = prompt("Please enter a choice for your Rock-Paper-Scissors turn!");

    if (humanChoice != "rock" && humanChoice != "ROCK" && humanChoice != "R" && humanChoice != "r" && 
        humanChoice != "paper" && humanChoice != "PAPER" && humanChoice != "P" && humanChoice != "p" && 
        humanChoice != "scissors" && humanChoice != "SCISSORS" && humanChoice != "S" && humanChoice != "s") {
            console.log("Your input was invalid. Please try again!");
            humanTurn();
        }
    else {
        if (humanChoice == "rock" || humanChoice == "ROCK" || humanChoice == "R" || humanChoice == "r") {
            humanChoiceString = "rock";
        }
        else if (humanChoice == "paper" || humanChoice == "PAPER" || humanChoice == "P" || humanChoice == "p") {
            humanChoiceString = "paper";
        }
        else {
            humanChoiceString = "scissors";
        }
        console.log("Your choice is " + humanChoiceString);
    }
}

function playRound(humanChoiceString, computerChoiceString) {
    if (humanChoiceString == "rock") {
        if (computerChoiceString == "rock") {
            console.log("You both selected rock and therefore ended up in a tie! No points awarded!");
        }
        else if (computerChoiceString == "paper") {
            computerScore++;
            console.log("Your rock was defeated by the computer's paper!");
            console.log("The computer is awarded one point!");
        }
        else {
            humanScore++;
            console.log("Your rock defeated the computer's scissors!");
            console.log("You are awarded one point!");
        } 
    } // Rock selected
    else if (humanChoiceString == "paper") {
        if (computerChoiceString == "rock") {
            humanScore++;
            console.log("Your paper defeated the computer's rock!");
            console.log("You are awarded one point!");
        }
        else if (computerChoiceString == "paper") {
            console.log("You both selected paper and therefore ended up in a tie! No points awarded!");
        }
        else {
            computerScore++;
            console.log("Your paper was defeated by the computer's scissors!");
            console.log("The computer is awarded one point!");
        }
    } // Paper selected
    else {
        if (computerChoiceString == "rock") {
            computerScore++;
            console.log("Your scissors were defeated by the computer's rock!");
            console.log("The computer is awarded one point!");
        }
        else if (computerChoiceString == "paper") {
            humanScore++;
            console.log("Your scissors defeated the computer's paper!");
            console.log("You are awarded one point!");
        }
        else {
            console.log("You both selected scissors and therefore ended up in a tie! No points awarded!");
        }
    }
    console.log("The round has ended! The player has " + humanScore + " points; the computer has " + computerScore + " points.");
}

function playGame() {
    const numberOfRounds = 5;
    for (let i = 0; i < numberOfRounds; i++) {
        humanTurn();
        computerTurn();
        playRound(humanChoiceString, computerChoiceString);
    }
    if (humanScore > computerScore) {
        // You win!
        console.log("You've defeated the computer! Your final score is: " + humanScore);
    }
    else if (computerScore > humanScore) {
        console.log("You've been defeated by the computer! Your final score is: " + humanScore);
    }
    else {
        console.log("You and the computer have ended in a tie! Your final score is: " + humanScore);
    }
}

playGame();