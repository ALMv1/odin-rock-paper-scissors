
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

    console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}!`);

    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log("You win this round!");
        humanScore++;
    } else if ((humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "scissors")){
        console.log("You tied.");
    } else {
        console.log("You lost!");
        computerScore++;
    }
}



for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

console.log(`The final score is:`);
console.log(`You: ${humanScore}. Computer: ${computerScore}.`);
switch (humanScore) {
    case 5:
    case 4:
    case 3:
        console.log("congrats, You win!");
        break;
    default:
        console.log("You lost! Try again!");
}

