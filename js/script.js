


let playerScore = 0;
let compScore = 0;

function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    if(randomNum === 0){
        return "Rock"
    }
    if(randomNum === 1){
        return "Paper"
    }
    if(randomNum === 2){
        return "Scissors"
    }
}


function playRound(playerSelection, computerSelection){
    console.log("1", playerSelection, "2", computerSelection);
    if(playerSelection === computerSelection)
        console.log("It's a Tie!")
        if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") {
            compScore++; 
            return "You Lose! Paper Beat Rock"
        } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") {
            playerScore++;
            return "You Win! Rock Beat Sissors"
        } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") {
            playerScore++
            return "You Win! Paper Beat Rock"
        } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") {
            compScore++
            return "You Lose! Scissors Beat Paper" 
        } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {
            compScore++
            return "You Lose! Rock Beat Sissors"
        } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {
            playerScore++
            return "You Win! Scissors Beat Paper" 
        }
}



function game(){
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Make a choice").toLowerCase()
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
     }

     if (playerScore > compScore){
        return "You Beat The Computer! Congratulations"
     } else if (playerScore < compScore) {
        return "You Lost To The Computer! Practice More"
     } else {
        return "It,s A Game Tie! Not Bad At All"
     }
}
 
console.log(game())