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
