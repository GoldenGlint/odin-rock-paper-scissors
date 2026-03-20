let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    let num=Math.random()*3;
    
    if(num<=1){
        return "rock";
    }
    else if(num<=2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    let ans=prompt("Please enter either rock, paper, or scissors: ");
    return ans.toLowerCase();
}

function playRound(){
    let humanChoice=getHumanChoice();
    let computerChoice=getComputerChoice();
    if(humanChoice==computerChoice){
        console.log("It's a tie!. You both had: "+humanChoice+" "+computerChoice);
    }
    else if(humanChoice=="rock"&&computerChoice=="paper"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }
    else if(humanChoice=="rock"&&computerChoice=="scissors"){
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }
    else if(humanChoice=="paper"&&computerChoice=="scissors"){
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
    else if(humanChoice=="paper"&&computerChoice=="rock"){
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    else if(humanChoice=="scissors"&&computerChoice=="paper"){
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }
    else if(humanChoice=="scissors"&&computerChoice=="rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }
    else{}
    return true;
}

function playGame(){
    for(let i=0; i<5; i++){
        playRound();
    }
    if(humanScore>computerScore){
        console.log("You win the tournament");
    }
    else if(humanScore<computerScore){
        console.log("You lost the tournmanet");
    }
    else{
        console.log("It's a tie");
    }
}

console.log(playGame());