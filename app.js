console.log("Hello World");

let arr = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let i = Math.floor(Math.random()*arr.length);
    return arr[i];
}

console.log(getComputerChoice())