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
    console.log("You tied!")
  } else if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "paper" && computerChoice == "rock" || playerChoice == "scissors" && computerChoice == "paper") {
    console.log("You win!")
  } else if (playerChoice == "rock" && computerChoice == "paper" || playerChoice == "paper" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "rock") {
    console.log("You lose!")
  }
}

let playerChoice = prompt("Choose: Rock, Paper or Scissors").toLowerCase()
playRound(playerChoice, computerPlay())
