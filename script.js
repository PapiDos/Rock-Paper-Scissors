// Select DOM elements
let gameStatus = document.querySelector(".game-status");
let scoreDisplay = document.querySelector(".score");
let playerSelection = document.querySelectorAll(".player-selection button");

// Captures player and computer selection and initiate a round 
playerSelection.forEach((btn) => {
  btn.addEventListener("click", () => {
    let humanChoice = btn.textContent.toLowerCase();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});

// Function to generate computer choice
function getComputerChoice() {
  let computerChoice = ["rock", "paper", "scissors"];
  return computerChoice[Math.floor(Math.random() * 3)];
}

// Initialize scores
let humanScore = 0;
let computerScore = 0;
let winningScore = 5;

// Function to play a single round of the game
function playRound(humanChoice, computerChoice) {
  // Determine round outcome of the round
  if (humanChoice === computerChoice) {
    gameStatus.textContent = `It's a tie, choose again`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    gameStatus.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    gameStatus.textContent = `You lose, ${computerChoice} beats ${humanChoice}`;
  }
  // Check for overall winner of the game
  if (humanScore === winningScore || computerScore === winningScore) {
    determineWinner();
  }
  // Update score display
  updateScoreDisplay();
}
// FUNCTION TO PLAY THE ENTIRE GAME (5 ROUNDS)
function playGame() {
  for (i = 0; i < 5; i++) { // Loop for 5 rounds
    // Get choices from human and computer
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    // Play a round with computer and human choices
    playRound(humanSelection, computerSelection);
  }
  // Determine the winner of the game
  if (humanScore > computerScore) {
    console.log(`Game over. You won! ${humanScore} x ${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`Game over. You lost ${humanScore} x ${computerScore}`);
  } else {
    console.log(`Game over. It's a tie: ${humanScore} x ${computerScore}`);
  }
}
// START THE GAME
playGame();
