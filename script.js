// it will randomly return one of these "Rock,Paper or Scissors"
function getComputerChoice() {
    let compValue = (Math.floor(Math.random()*3)+1);
    
    if(compValue === 1){
       return "scissors";
    }
    else if(compValue === 2){
        return "paper"
    }
    else{
        return "rock"
    }

    }  


function getHumanChoice() {
    let humnValue = prompt("Enter your choice? Rock paper or Scissors?" );
    let insensitive = humnValue.toLowerCase();
    return insensitive;
}
  


let compScore = 0;
let humanScore = 0;

function playRound(humanChoice,compChoice) {
    
    if(humanChoice == "rock" && compChoice == "scissors"){
       console.log("You Win! Rock beat Scissors");
       humanScore = humanScore + 1;
    }

    else if(humanChoice == "paper" && compChoice == "scissors"){
       console.log("You Lose! Scissors beats Paper");
        compScore++;
    }

    else if(humanChoice == "paper" && compChoice == "rock"){
        console.log("You Win! Paper beat Rock");
        humanScore++;    
    }

    else if (humanChoice == "rock" && compChoice == "paper") {
        console.log("You Lose! Paper beats Rock");
        compScore++;
    }

    else if (humanChoice == "scissors" && compChoice == "rock") {
        console.log("You Lose! Rock beats Scissors");
        compScore++;
    }

    else if (humanChoice == "scissors" && compChoice == "paper") {
        console.log("You Win! Scissors beats Paper");
        humanScore++;
    }

    else if(humanChoice == "paper" && compChoice == "paper" || humanChoice == "rock" && compChoice == "rock" || humanChoice == "scissors" && compChoice == "scissors"){
        console.log("Tie!")
    }
}
   let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
       console.log(`Computers value: ${computerSelection}`);


    playRound(humanSelection,computerSelection);



