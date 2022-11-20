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
            console.log("You Lose! Paper Beat Rock")
            return false   
        } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") {
           console.log("You Win! Rock Beat Sissors") 
           return true
        } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") {
            console.log("You Win! Paper Beat Rock") 
            return true
        } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") {
            console.log("You Lose! Scissors Beat Paper") 
            return false
        } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {
            console.log("You Lose! Rock Beat Sissors") 
            return false
        } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {
            console.log("You Win! Scissors Beat Paper") 
            return true
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