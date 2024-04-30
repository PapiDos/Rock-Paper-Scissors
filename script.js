// Function to prompt for human choice
function getHumanChoice() {
  let playerChoice = prompt("Choose rock, paper or scissors");
  return playerChoice;
}

// Function to generate computer choice
function getComputerChoice() {
  let ComputerChoice = ["rock", "paper", "scissors"];
  return ComputerChoice[Math.floor(Math.random() * 3)];
}
