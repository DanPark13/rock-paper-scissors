// Player Scores
let playerScore = 0
let computerScore = 0

// Round Results & Scores Display
const results = document.querySelector('#results')

let result = document.createElement('p');
result.classList.add('result');
results.appendChild(result)

let score = document.createElement('p');
score.classList.add('score');
score.textContent = "Player: 0 | Computer: 0"
results.appendChild(score)

// Declare Input Buttons
const rockButton = document.querySelector('#rock-btn');
const paperButton = document.querySelector('#paper-btn');
const scissorsButton = document.querySelector('#scissors-btn');

rockButton.addEventListener('click', function(e) {
    playGame('ROCK', getComputerChoice())
});

paperButton.addEventListener('click', function(e) {
    playGame('PAPER', getComputerChoice())

});

scissorsButton.addEventListener('click', function(e) {
    playGame('SCISSORS', getComputerChoice())
});

// Get Random Choice from Computer
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

// Play Game until Player or Computer Hits Score of 5
function playGame(playerSelection, computerSelection){
    computerSelection = computerSelection.toUpperCase();
    playerSelection = playerSelection.toUpperCase();

    let round = ''

    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        round = "You Win! " + playerSelection + " beats " + computerSelection;
        playerScore++;
    } else if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
        round = "You Lose! " + computerSelection + " beats " + playerSelection;
        computerScore++;
    } else {
        round = "It's a Tie! " + playerSelection + " on " + computerSelection + " is ineffective!";
    }
    
    result.textContent = `${round}`
    score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`

    if (playerScore === 5 || computerScore === 5){
        if (playerScore === 5){
            alert("You Win! Play Again?")
        } else {
            alert("You Lose! Play Again?")
        }
    
        playerScore = 0
        computerScore = 0
    
        round = ""
        score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`
    }
}
