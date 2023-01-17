const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const winner = document.querySelector('#winner')
const compScore = document.querySelector('#comscore')
const plyScore = document.querySelector('#plyscore')
const resultDiv = document.getElementById('result')
const roundWinner = document.getElementById('round-display')

 


let choices = ['rock', 'paper', 'scissors']

//function to get random num for computer
const getComputerChoice = () => {
    let randomNum = choices[Math.floor(Math.random() * choices.length)];
  return randomNum;
};

// Function to play a round of game
let playerScore = 0;
let computerScore = 0;

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection){
        result = `It's A Tie <br> ${playerSelection} against ${computerSelection}`;
    
    }
    if (
        (playerSelection === "rock" && computerSelection === "paper")
        ||(playerSelection === "paper" && computerSelection === "scissors")
        ||(playerSelection === " scissors" && computerSelection === "rock")
        )
        {
            computerScore++;
            result = `You Lost!<br> ${computerSelection} beats ${playerSelection}`;
            
        }
        if(
            (playerSelection === "rock" && computerSelection === "scissors")
            ||(playerSelection === "paper" && computerSelection === "rock")
            ||(playerSelection === "scissors" && computerSelection === "paper")
            ){
                playerScore++;
                result = `You Win!<br> ${playerSelection} beats ${computerSelection}`;
                
            }
     return result;
    
    
}
// Event listeners

rock.addEventListener('click', () => {
    const ComputerChoice = getComputerChoice();
    const result = playRound(choices[0], ComputerChoice);
    console.log(result);
    winner.innerHTML = result;
    compScore.innerHTML = computerScore;
    plyScore.innerHTML = playerScore;
    const round = gameOver(playerScore, computerScore)
    resultDiv.innerHTML = round;
})

paper.addEventListener('click', () => {
    const ComputerChoice = getComputerChoice();
    const result = playRound(choices[1], ComputerChoice);
    console.log(result);
    winner.innerHTML = result;
    compScore.innerHTML = computerScore;
    plyScore.innerHTML = playerScore;
    const round = gameOver(playerScore, computerScore)
    resultDiv.innerHTML = round;
})

scissors.addEventListener('click', () => {
    const ComputerChoice = getComputerChoice();
    const result = playRound(choices[2], ComputerChoice);
    console.log(result);
    winner.innerHTML = result;
    compScore.innerHTML = computerScore;
    plyScore.innerHTML = playerScore;
   const round = gameOver(playerScore, computerScore)
    resultDiv.innerHTML = round;
})
// function to get overall winner
const gameOver = (playerScore, computerScore) => {
    
    if (playerScore === 5){
         round = `<h1><strong>CONGRATULATIONS,<br> YOU WIN!</strong><h1>`
         const resultDiv = document.getElementById('result').style.color = 'green';
         
    } else if (computerScore === 5){
       round =`<h1><strong>'COMPUTER WIN THE GAME!<strong><h1>`; 
       const resultDiv = document.getElementById('result').style.color = 'red';
       
    } 
      return round
  }
 
  //restart game
 document.querySelector('.restart').addEventListener('click', function() {
    window.location.reload();
    return false;
 });