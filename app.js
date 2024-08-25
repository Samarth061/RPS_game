let arr = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let i = Math.floor(Math.random()*arr.length);
    return arr[i];
}

function getHumanChoice() {
    let human_input;
    do {
        human_input = prompt("Choose rock, paper, or scissors:").toLowerCase(); 
    } while (!arr.includes(human_input)); 
    
    return human_input;
}

function playRound(getComputerChoice, getHumanChoice){
    let comp_choice = getComputerChoice();
    let human_choice = getHumanChoice();

    console.log("Computer Choice: " + comp_choice);
    console.log("Human Choice: " + human_choice);    

    if(comp_choice === "paper" && human_choice === "rock" || comp_choice === "scissors" && human_choice == "paper" 
        || comp_choice === "rock" && human_choice === "scissors")
    {
        computerScore++;
        console.log("Haha, Computer wins!");
    }
    else if(human_choice === "paper" && comp_choice === "rock" || human_choice === "scissors" && comp_choice == "paper" 
        || human_choice === "rock" && comp_choice === "scissors")
    {
        humanScore++;
        console.log("Haha, Human wins!");
    }
    else
    {
        console.log("It's a tie!");
    }

    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
}

for(let i = 0; i < 5; i++)
{
    playRound(getComputerChoice,getHumanChoice);
}


