let result = document.getElementById("result");
let player = document.getElementById("playerPoints");
let computer = document.getElementById("computerPoints");
let playerPoints = 0;
let computerPoints = 0;

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3 + 1)
  let choice = ""
  if (randomNumber == 1) {
    choice = "rock"
  } else if (randomNumber == 2) {
    choice = "paper"
  } else if (randomNumber == 3) {
    choice = "scissors"
  }

  return choice
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice == "rock" && computerChoice == "rock" || playerChoice == "paper" && computerChoice == "paper" || playerChoice == "scissors" && computerChoice == "scissors") {
    result.textContent = "You tied!"
  } else if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "paper" && computerChoice == "rock" || playerChoice == "scissors" && computerChoice == "paper") {
    result.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
    playerPoints += 1
    player.textContent = `Player: ${playerPoints}`
  } else if (playerChoice == "rock" && computerChoice == "paper" || playerChoice == "paper" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "rock") {
    result.textContent = `You lose! ${computerChoice} beats ${playerChoice}`
    computerPoints += 1
    computer.textContent = `Computer: ${computerPoints}`
  }


}


const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const reset = document.getElementById("reset");
rock.addEventListener('click', () => {
  let playerChoice = "rock";
  playRound(playerChoice, computerPlay());
  if (playerPoints == 5) {
    result.textContent = "Player wins!"
    playerPoints = 0;
    computerPoints = 0;
  } else if (computerPoints == 5) {
    result.textContent = "Computer wins!"
    playerPoints = 0;
    computerPoints = 0;
  }
});

paper.addEventListener('click', () => {
  let playerChoice = "paper";
  playRound(playerChoice, computerPlay());
  if (playerPoints == 5) {
    result.textContent = "Player wins!"
    playerPoints = 0;
    computerPoints = 0;
  } else if (computerPoints == 5) {
    result.textContent = "Computer wins!"
    playerPoints = 0;
    computerPoints = 0;
  }
})

scissors.addEventListener('click', () => {
  let playerChoice = "scissors";
  playRound(playerChoice, computerPlay());
  if (playerPoints == 5) {
    result.textContent = "Player wins!"
    playerPoints = 0;
    computerPoints = 0;
  } else if (computerPoints == 5) {
    result.textContent = "Computer wins!"
    playerPoints = 0;
    computerPoints = 0;
  }
})

reset.addEventListener('click', () => {
  player.textContent = "Player: "
  computer.textContent = "Computer: "
})
