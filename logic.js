
let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let ran = Math.floor(Math.random() * 3)
    let computerChoice;

    if (ran === 0){
        computerChoice = "rock";
    }
    else if (ran === 1){
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }

    return computerChoice
}

function getHumanChoice() {
    const humanChoice = prompt("Rock, Paper or Scissors? ");
    return humanChoice.toLowerCase();
}   

function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice == "")
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

