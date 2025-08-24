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
console.log(getComputerChoice());

function getHumanChoice() {
    let humnValue = prompt("Enter your choice? Rock paper or Scissors");
    return humnValue.toLocaleLowerCase();
}


