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
