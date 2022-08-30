let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
  const gameArray = ["Rock", "Paper", "Scissors"]
  [Math.floor(Math.random() * 3)];
  return gameArray;
};

function playRound(param1, param2) {
  if (param1 === "Rock" && param2 === "Rock") {
    return "Its a draw";
  } else if (param1 === "Rock" && param2 === "Paper") {
    compScore++;
    return "You Lose! Paper beats Rock";
  } else if (param1 === "Rock" && param2 === "Scissors") {
    playerScore++;
    return "You win! Rock beats Scissors";
  } else if (param1 === "Paper" && param2 === "Paper") {
    return "Its a draw";
  } else if (param1 === "Paper" && param2 === "Rock") {
    playerScore++;
    return "You Win! Paper beats Rock";
  } else if (param1 === "Paper" && param2 === "Scissors") {
    compScore++;
    return "You lose! Scissors beats Paper";
  } else if (param1 === "Scissors" && param2 === "Scissors") {
    return "Its a draw";
  } else if (param1 === "Scissors" && param2 === "Rock") {
    compScore++;
    return "You Lose! Rock beats Scissors";
  } else if (param1 === "Scissors" && param2 === "Paper") {
    playerScore++;
    return "You Win! Scissors beats Paper";
  }
};

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose one: Rock, Paper, Scissors");
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    console.log("You choose: " + playerSelection);
    let computerSelection = getComputerChoice();
    console.log("Computers selection: " + computerSelection);
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
  }
  if (playerScore > compScore) {
    return "Congrats you outplayed computer";
  } else if (compScore > playerScore) {
    return "Sorry but you lost, better luck next time"
  } else {
    return "You are tied with computer!"
  }

}

console.log(game());
console.log("Your final score is: " + playerScore);
console.log("Computers final score is: " + compScore);
