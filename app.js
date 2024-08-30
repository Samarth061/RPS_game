let arr = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const totalRounds = 5;

function getComputerChoice() {
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
}

function updateScores() {
    console.log("Computer Choice: " + getComputerChoice());
    console.log("Human Choice: " + human_choice);
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
}

function playRound(human_choice) {
    let clickMessage = document.createElement("p");
    let finalMessage = document.createElement('p');
    let comp_choice = getComputerChoice();

    if (comp_choice === "paper" && human_choice === "rock" ||
        comp_choice === "scissors" && human_choice === "paper" ||
        comp_choice === "rock" && human_choice === "scissors") {
        computerScore++;
        clickMessage.textContent = "Haha, Computer wins!";
    } else if (human_choice === "paper" && comp_choice === "rock" ||
               human_choice === "scissors" && comp_choice === "paper" ||
               human_choice === "rock" && comp_choice === "scissors") {
        humanScore++;
        clickMessage.textContent = "Haha, Human wins!";
    } else {
        clickMessage.textContent = "It's a tie!";
    }

    updateScores();
    roundsPlayed++;
    showOutput.appendChild(clickMessage);
    // End game after totalRounds
    if (roundsPlayed >= totalRounds) {
        finalMessage.textContent = " All rounds completed!";
        if(humanScore > computerScore)
        {
            finalMessage.textContent += " Human Wins!";
        }
        else if(computerScore > humanScore)
        {
            finalMessage.textContent += " Computer Wins!";
        }
        else{
            finalMessage.textContent += " Tie!";
        }
        showOutput.appendChild(finalMessage);
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}

let showOutput = document.createElement("div");
let body = document.querySelector("body");
body.appendChild(showOutput);

let rockButton = document.createElement("button");
rockButton.textContent = "Rock";
let paperButton = document.createElement("button");
paperButton.textContent = "Paper";
let scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";


showOutput.appendChild(rockButton);
showOutput.appendChild(paperButton);
showOutput.appendChild(scissorsButton);


let human_choice = '';

// Set up event listeners for buttons
rockButton.addEventListener('click', () => {
    human_choice = 'rock';
    playRound(human_choice);
});

paperButton.addEventListener('click', () => {
    human_choice = 'paper';
    playRound(human_choice);
});

scissorsButton.addEventListener('click', () => {
    human_choice = 'scissors';
    playRound(human_choice);
});
