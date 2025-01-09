let playerScore = 0;
let computerScore = 0;

let computerChoice = Math.floor(Math.random() * 3); // Generates a number between 0 and 2
let computerChoiceString = "";
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

/*
Pseudo-code for Step 3:

VAR HumanChoiceChar
VAR HumanChoice = ""
while(HumanChoiceChar != "r" || HumanChoiceChar != "p" || HumanChoiceChar != "s")
    Prompt the user for an input (r=rock, p=paper, s=scissors
                                rock=rock, paper=paper, scissors=scissors, 
                                Rock=rock, Paper=paper, Scissors=scissors)
    if (HumanChoiceChar == "r") HumanChoice = "rock"
    if (HumanChoiceChar == "p") HumanChoice = "paper"
    if (HumanChoiceChar == "s") HumanChoice = "scissors"
    else alert("You need to enter either r, p, or s!")

Pseudo-code for Step 4:
VAR HumanScore = 0
VAR ComputerScore = 0

function playRound(humanChoice, computerChoice) {
    First consolidate everything so that the humanChoice is reduced to standard format: rock, paper, scissors
    if (humanChoice == rock) {
        if (computerChoice == rock) TIE, no increment, try again
        else if (computerChoice == paper) COMPUTER WINS, increment comp score, announce
        else HUMAN WINS, increment human score, announce
    }
    else if(humanChoice == paper) {
        if (computerChoice == rock) HUMAN WINS, increment human score, announce
        else if (computerChoice == paper) TIE, no increment, try again
        else COMPUTER WINS, increment comp score, announce
    }
    else {
        if (computerChoice == rock) COMPUTER WINS, increment comp score, announce
        else if (computerChoice == paper) HUMAN WINS, increment human score, announce
        else TIE, no increment, try again
    }
}

    function playGame() {
        Determine how many times to play, in this case, 5 rounds
        var playerScore = 0
        var computerScore = 0
        for (int i = 0; i < 5; i++) {
            prompt user for a guess
            generate a guess for computer
            playRound(humanGuess, computerGuess) (playerScore is incremented if they win, otherwise...)
        }
        After five rounds, the scores should be incremented and kept track of
        Compar human score and computer score and announce winner
    }

*/