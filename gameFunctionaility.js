const scoreBoard = document.querySelector("#resultsBoard");
const clearBoard = document.querySelector("#clearBoard");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const tieScore = document.querySelector("#tieScore");

let playerScoreInt = 0;
let computerScoreInt = 0;
let tieScoreInt = 0;

clearBoard.addEventListener("click", (e) => {
  playerScore.textContent = "Wins: 0";
  playerScoreInt = 0;
  computerScoreInt = 0;
  computerScore.textContent = "Losses: 0";
  tieScore.textContent = "Ties: 0";
  tieScoreInt = 0;
  scoreBoard.textContent = "Choose your Move";
});

function declareWinner() {
  if (playerScoreInt > computerScoreInt) {
    alert("Congratulations! You won best out of 5!");
  } else {
    alert("You lost out 5. Play Again!");
  }

  playerScore.textContent = "Wins: 0";
  playerScoreInt = 0;
  computerScore.textContent = "Losses: 0";
  computerScoreInt = 0;
  tieScore.textContent = "Ties: 0";
  tieScoreInt = 0;
  scoreBoard.textContent = "Choose Your Move";
}

function playRound(playerSelection, computerSelection) {
  let result = "";
  if (playerSelection === computerSelection) {
    result = "It's a draw";
    tieScoreInt++;
    tieScore.textContent = `Ties: ${tieScoreInt}`;
  }
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "rock")
  ) {
    result = "You lost!";
    computerScoreInt++;
    computerScore.textContent = `Losses: ${computerScoreInt}`;
  }
  if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    result = "You won!";
    playerScoreInt++;
    playerScore.textContent = `Wins: ${playerScoreInt}`;
  }

  if (playerScoreInt === 5 || computerScoreInt === 5) {
    declareWinner();
  }
}

function computerPlay() {
  const choices = ["rock", "paper", "scissor"];
  let computerSelection = choices[Math.floor(choices.length * Math.random())];
  return computerSelection;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (button.getAttribute("value") == "rock") {
      playerSelection = "rock";
      scoreBoard.textContent = playRound(playerSelection, computerPlay());
    } else if (button.getAttribute("value") === "paper") {
      playerSelection = "paper";
      scoreBoard.textContent = playRound(playerSelection, computerPlay());
    } else if (button.getAttribute("value") === "scissor") {
      playerSelection = "scissor";
      scoreBoard.textContent = playRound(playerSelection, computerPlay());
    }
  });
});
