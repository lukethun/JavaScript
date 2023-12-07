// Declaring blank variables
let computerSelection = "";
let computerScore = 0;
let playerScore = 0;


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
    messageDiv.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
  } else if(playerSelection === computerSelection){
    messageDiv.textContent = "It's a draw";
  } else if (playerSelection === "paper" && computerSelection === "rock" 
  || playerSelection === "scissors" && computerSelection === "paper" 
  || playerSelection === "rock" && computerSelection === "scissors"){
    playerScore += 1;
    messageDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`
  } else {
    messageDiv.textContent = "Invalid Choice";
  }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const scoreDiv = document.createElement('div');
const container = document.querySelector('.container');
const messageDiv = document.createElement('div');
const buttons = document.querySelectorAll('button');

messageDiv.textContent = ' ';
scoreDiv.textContent = '0 : 0';
container.prepend(scoreDiv, messageDiv);
scoreDiv.setAttribute('class', 'score');
messageDiv.setAttribute('class', 'message');

rock.addEventListener('click', () => {
  getComputerChoice();
  playGame("rock", computerSelection);
  scoreDiv.textContent = `${playerScore} : ${computerScore}`;
  winner();
})

paper.addEventListener('click', () => {
  getComputerChoice();
  playGame("paper", computerSelection);
  scoreDiv.textContent = `${playerScore} : ${computerScore}`;
  winner();
})

scissors.addEventListener('click', () => {
  getComputerChoice();
  playGame("scissors", computerSelection);
  scoreDiv.textContent = `${playerScore} : ${computerScore}`;
  winner();
})

// Display winner

function disableButtons(){
  buttons.forEach(button => {
    button.disabled = true;
  })
}


function winner(){
  if(playerScore === 5){
    messageDiv.textContent = "You win!";
    disableButtons();
  } else if(computerScore === 5){
    messageDiv.textContent = 'You lose...';
    disableButtons();
  }
}
