
function getComputerChoice() {
  const gameArray = ["Rock", "Paper", "Scissors"]
  [Math.floor(Math.random() * 3)];
  return gameArray;
};


let playerSelection = prompt("Choose one: Rock, Paper or Scissors");
console.log(playerSelection);
let computerSelection = getComputerChoice();
console.log(computerSelection);

function playRound(param1, param2) {
  if (param1 === "Rock" && param2 === "Rock") {
    return "Its a draw";
  } else if (param1 === "Rock" && param2 === "Paper") {
    return "You Lose! Paper beats Rock";
  } else if (param1 === "Rock" && param2 === "Scissors") { 
    return "You win! Rock beats Scissors";
  } else if (param1 === "Paper" && param2 === "Paper") {
    return "Its a draw";
  } else if (param1 === "Paper" && param2 === "Rock") {
    return "You Win! Paper beats Rock";
  } else if (param1 === "Paper" && param2 === "Scissors") {
    return "You lose! Scissors beats Paper";
  }else if (param1 === "Scissors" && param2 === "Scissors") {
    return "Its a draw";
  } else if (param1 === "Scissors" && param2 === "Rock") {
    return "You Lose! Rock beats Scissors";
  } else if (param1 === "Scissors" && param2 === "Paper") {
    return "You Win! Scissors beats Paper";}
};

let result = playRound(playerSelection, computerSelection);
console.log(result);