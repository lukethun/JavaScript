// Declaring blank variables
let computerSelection = "";
let computerScore = 0;
let playerScore = 0;

console.log(Math.floor(Math.random() * 3));
// Function to get random selection from computer 

function getComputerChoice(){
if(Math.floor(Math.random() * 3) === 0){
  computerSelection = "rock";
} else if(Math.floor(Math.random() * 3) === 1){
  computerSelection = "paper";
} else {
  computerSelection = "scissors";
}
}

// Function to determine win, lose, or draw
function playGame(playerSelection, computerSelection){
  if(playerSelection === "rock" && computerSelection === "paper" 
  || playerSelection === "paper" && computerSelection === "scissors" 
  || playerSelection === "scissors" && computerSelection === "rock"){
    computerScore += 1;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } else if(playerSelection === computerSelection){
    return "It's a draw";
  } else if (playerSelection === "paper" && computerSelection === "rock" 
  || playerSelection === "scissors" && computerSelection === "paper" 
  || playerSelection === "rock" && computerSelection === "scissors"){
    playerScore += 1;
    return `You win! ${playerSelection} beats ${computerSelection}`
  } else {
    return "Invalid Choice";
  }
}

// Function to initiate games
function game(){
  getComputerChoice();
  let playerChoice = prompt("Rock, Paper or Scissors?"); 
  let playerSelection = playerChoice.toLowerCase();
  console.log(playGame(playerSelection, computerSelection));
}

// Loop until a score of 5 is reached for either player or computer
while(computerScore < 5 && playerScore < 5){
  game();
  console.log(`Computer : ${computerScore}`);
  console.log(`Player : ${playerScore}`);
}


// Display winner
if(playerScore == 5){
  console.log("You win");
} else if(computerScore == 5){
  console.log("You lose...");
}

