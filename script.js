// Function to prompt for human choice
function getHumanChoice() {
  let humanChoice = prompt("Choose rock, paper or scissors");
  return humanChoice.toLowerCase(); // Normalize human choice for comparison
}

// Function to generate computer choice
function getComputerChoice() {
  let ComputerChoice = ["rock", "paper", "scissors"];
  return ComputerChoice[Math.floor(Math.random() * 3)];
}
