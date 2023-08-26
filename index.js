function getComputerChoice(){
    let random = Math.floor(Math.random() * 3)
    let choice = ""

    if (random == 0){
        choice = "ROCK"
    } else if (random == 1){
        choice = "PAPER"
    } else if (random == 2){
        choice = "SCISSORS"
    }
    return choice
}

function playRound(playerSelection, computerSelection){
    computerSelection = computerSelection.toUpperCase();
    playerSelection = playerSelection.toUpperCase();

    let result = []

    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        result.push("You Win! " + playerSelection + " beats " + computerSelection)
        result.push(0)
    } else if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
        result.push("You Lose! " + computerSelection + " beats " + playerSelection)
        result.push(1)
    } else {
        result.push("It's a Tie! " + playerSelection + " on " + computerSelection + " is ineffective!")
        result.push(2)
    }
    return result
}

function game(){
    console.log("Initializing Game...")

    let playerScore = 0
    let computerScore = 0

    console.log("Game has Loaded. Please follow the prompt on the popup window.")

    while (playerScore < 5 && computerScore < 5){
        let playerSelection = prompt("Select Rock, Paper, or Scissors")

        let computerSelection = getComputerChoice()

        let currentGame = playRound(playerSelection, computerSelection)

        if (currentGame[1] == 0){
            playerScore += 1
        } else if (currentGame[1] == 1){
            computerScore += 1
        }

        console.log(currentGame[0])
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + computerScore)
    }
    if (playerScore == 5){
        console.log("Player has Won!") 
    } else { 
        console.log("Computer has Won!")
    }
}

game()