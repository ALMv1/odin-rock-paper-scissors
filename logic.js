
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

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

function playRound(humanChoice, computerChoice){

    const matchEnd = document.querySelector("#matchEnd");
    if (roundCounter === 0){
        matchEnd.textContent = "";
    }
    
    const log = document.querySelector("#roundLog");
    log.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice}!`;

    const result = document.querySelector("#result");
    
    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        result.textContent = "You win this round!";
        humanScore++;
    } else if ((humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "scissors")){
        result.textContent = "You tied this round!";
    } else {
        result.textContent = "You lost this round!";
        computerScore++;
    }
    
    const disphumanScore = document.querySelector("#humanScore");
    const dispcomputerScore = document.querySelector("#computerScore");
    
    disphumanScore.textContent = `Your score: ${humanScore}`;
    dispcomputerScore.textContent = `CPU score: ${computerScore}`;

    roundCounter++;
    
    if (roundCounter === 5){
        if (humanScore > computerScore){
            matchEnd.textContent = "Congrats, You win!";

        } else if (humanScore === computerScore){
            matchEnd.textContent = "You tied!";
        } else {
            matchEnd.textContent = "You lost! Try again!";
        }
        humanScore = 0;
        computerScore = 0;
        roundCounter = 0;
    }

}

const rock = document.querySelector("#rock")
rock.addEventListener("click", () => playRound("rock", getComputerChoice()))

const paper = document.querySelector("#paper")
paper.addEventListener("click", () => playRound("paper", getComputerChoice()))

const scissors = document.querySelector("#scissors")
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()))



// console.log(`The final score is:`);
// console.log(`You: ${humanScore}. Computer: ${computerScore}.`);
// if (humanScore > computerScore) {
//     console.log ("Congrats, You win!");
// }
// else if (humanScore === computerScore) {
//     console.log ("You tied!");
// }
// else {
//     console.log("You lost! Try again!");
// }

