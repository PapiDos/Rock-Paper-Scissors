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
  // Determine round outcome
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

// Function to update the score display
function updateScoreDisplay() {
  scoreDisplay.textContent = `Your score ${humanScore} | PC score ${computerScore}`;
}

// Function to determine the overall winner of the game
function determineWinner() {
  if (humanScore === winningScore) {
    gameStatus.innerHTML = `You won ${humanScore} x ${computerScore}<br>Choose to start another game`;
  } else {
    gameStatus.innerHTML = `You Lost ${humanScore} x ${computerScore}<br>Choose to start another game`;
  }
  resetScore();
}

// Function to reset scores after game ends
function resetScore() {
  humanScore = 0;
  computerScore = 0;
}
