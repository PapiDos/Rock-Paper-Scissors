// Function to prompt for human choice
function getHumanChoice() {
  let humanChoice = prompt("Choose rock, paper or scissors");
  return humanChoice.toLowerCase(); // Normalize human choice for comparison
}

// Function to generate computer choice
function getComputerChoice() {
  let computerChoice = ["rock", "paper", "scissors"];
  return computerChoice[Math.floor(Math.random() * 3)];
}

let humanScore = 0;
let computerScore = 0;

// FUNCTION TO PLAY A SINGLE ROUND OF THE GAME
function playRound(humanChoice, computerChoice) {
  // Determine round outcome and update scores accordingly.
  if (humanChoice === computerChoice) {
    console.log("It's a tie");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
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
