function Play() {
    let originalPlayerSelection = prompt("Choose: Rock, Paper or Scissors")
    let playerSelection = originalPlayerSelection.toLowerCase()
    console.log(playerSelection)
    let computerChoice = Math.floor(Math.random() * 3 + 1)
    
    if (playerSelection == "rock" && computerChoice == "1") {
        console.log("Player choice: " + playerSelection)
        console.log("Computer choice: Rock")
        console.log("You tied!")
    }
    if (playerSelection == "rock" && computerChoice == "2") {
        console.log("Player choice: " + playerSelection)
        console.log("Computer choice: Paper")
        console.log("You lose!")
    }
    if (playerSelection == "rock" && computerChoice == "3") {
        console.log("Player choice: " + playerSelection)
        console.log("Computer choice: Scissors")
        console.log("You win!")
    }

    if (playerSelection == "paper" && computerChoice == "1") {
        console.log("Player choice: " + playerSelection)
        console.log("Computer choice: Rock")
        console.log("You win!")
    }
    if (playerSelection == "paper" && computerChoice == "2") {
        console.log("Player choice: " + playerSelection)
        console.log("Computer choice: Paper")
        console.log("You tied!")
    }
    if (playerSelection == "paper" && computerChoice == "3") {
        console.log("Player choice: " + playerSelection)
        console.log("Computer choice: Scissors")
        console.log("You lose!")
    }

    if (playerSelection == "scissors" && computerChoice == "1") {
        console.log("Player choice: " + playerSelection)
        console.log("Computer choice: Rock")
        console.log("You lose!")
    }
    if (playerSelection == "scissors" && computerChoice == "2") {
        console.log("Player choice: " + playerSelection)
        console.log("Computer choice: Paper")
        console.log("You win!")
    }
    if (playerSelection == "scissors" && computerChoice == "3") {
        console.log("Player choice: " + playerSelection)
        console.log("Computer choice: Scissors")
        console.log("You tied!")
    }
}

Play()