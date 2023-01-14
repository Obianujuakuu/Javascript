const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')


let choices = ['rock', 'paper', 'scissors']

//function to get random num for computer
function getComputerChoice(){
    let randomNum = choices[Math.floor(Math.random() * choices.length)];
  console.log(randomNum)
};

// Function to play a round of game
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        result = "It's A Tie";
    
    }
    if (
        (playerSelection === "rock" && computerSelection === "paper")
        ||(playerSelection === "paper" && computerSelection === "scissors")
        ||(playerSelection === " scissors" && computerSelection === "rock")
        )
        {
            computerScore++;
            result = "You Lost!";
            
        }
        if(
            (playerSelection === "rock" && computerSelection === "scissors")
            ||(playerSelection === "paper" && computerSelection === "rock")
            ||(playerSelection === "scissors" && computerSelection === "paper")
            ){
                playerScore++;
                result = "You Win!";
                
            }
        
}



