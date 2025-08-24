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
       alert("You Win! Rock beat Scissors");
              console.log("You Win! Rock beat Scissors");

       humanScore = humanScore + 1;
    }

    else if(humanChoice == "paper" && compChoice == "scissors"){
       alert("You Lose! Scissors beats Paper");
        console.log("You Lose! Scissors beats Paper");
        compScore++;
    }

    else if(humanChoice == "paper" && compChoice == "rock"){
        alert("You Win! Paper beat Rock");
        console.log("You Win! Paper beat Rock");
        humanScore++;    
    }

    else if (humanChoice == "rock" && compChoice == "paper") {
        alert("You Lose! Paper beats Rock");
        console.log("You Lose! Paper beats Rock");
        compScore++;
    }

    else if (humanChoice == "scissors" && compChoice == "rock") {
        alert("You Lose! Rock beats Scissors");
        console.log("You Lose! Rock beats Scissors");
        compScore++;
    }

    else if (humanChoice == "scissors" && compChoice == "paper") {
        alert("You Win! Scissors beats Paper");
        console.log("You Win! Scissors beats Paper");

        humanScore++;
    }

    else if(humanChoice == "paper" && compChoice == "paper" || humanChoice == "rock" && compChoice == "rock" || humanChoice == "scissors" && compChoice == "scissors"){
        alert("Tie!");
        console.log("Tie!");
    }
}
   


   


    function playGame() {
        for(let i = 1; i<=5; i++){
            alert(`Round:${i} `)
            let humanSelection = getHumanChoice();
            console.log(`You Entered: ${humanSelection}`);
            let computerSelection = getComputerChoice();
             console.log(`Computers value: ${computerSelection}`);
             playRound(humanSelection,computerSelection);
        }
    }
    playGame();

    if (humanScore > compScore){
        alert(`You Win! your score: ${humanScore} , computer score: ${compScore}` );
         console.log(`You Win! your score: ${humanScore} , computer score: ${compScore}` );
    }
    else if (humanScore < compScore){
        alert(`You Lose! your score: ${humanScore} , computer score: ${compScore}` );
        console.log(`You Lose! your score: ${humanScore} , computer score: ${compScore}` );

    }
     else{
        alert(`Tie! your score: ${humanScore} , computer score: ${compScore}` );
        console.log(`Tie! your score: ${humanScore} , computer score: ${compScore}` );

    }