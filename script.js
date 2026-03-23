let humanScore=0;
let computerScore=0;

const btn = document.querySelector(".container");

btn.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.className){
        case 'rock':
            playRound("rock");
            break;
        case 'paper':
            playRound("paper");
            break;
        case 'scissors':
            playRound("scissors");
            break;

    }
})

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



function playRound(playerSelection){
    let humanChoice=playerSelection;
    let computerChoice=getComputerChoice();
    document.querySelector(".log").textContent = ""; // ← clears it each round

    if(humanChoice==computerChoice){
        let logging=document.querySelector(".log");
        let msg=document.createElement("p");
        let completeMsg="It's a tie! You both had: "+humanChoice;
        msg.textContent=completeMsg;
        logging.appendChild(msg);
        
    }
    else if(humanChoice=="rock"&&computerChoice=="paper"){
        let logging=document.querySelector(".log");
        let msg=document.createElement("p");
        let completeMsg="You lose! Paper beats Rock";
        msg.textContent=completeMsg;
        logging.appendChild(msg);
        computerScore++;
        checkScore();
    }
    else if(humanChoice=="rock"&&computerChoice=="scissors"){
        let logging=document.querySelector(".log");
        let msg=document.createElement("p");
        let completeMsg="You win! Rock beats Scissors";
        msg.textContent=completeMsg;
        logging.appendChild(msg);
        humanScore++;
        checkScore();
        
    }
    else if(humanChoice=="paper"&&computerChoice=="scissors"){
        let logging=document.querySelector(".log");
        let msg=document.createElement("p");
        let completeMsg="You lose! Scissors beats Paper";
        msg.textContent=completeMsg;
        logging.appendChild(msg);
        computerScore++;
        checkScore();
    }
    else if(humanChoice=="paper"&&computerChoice=="rock"){
        let logging=document.querySelector(".log");
        let msg=document.createElement("p");
        let completeMsg="You win! Paper beats Rock";
        msg.textContent=completeMsg;
        logging.appendChild(msg);
        humanScore++;
        checkScore();
    }
    else if(humanChoice=="scissors"&&computerChoice=="paper"){
        let logging=document.querySelector(".log");
        let msg=document.createElement("p");
        let completeMsg="You win! Scissors beats Paper";
        msg.textContent=completeMsg;
        logging.appendChild(msg);
        humanScore++;
        checkScore();
    }
    else if(humanChoice=="scissors"&&computerChoice=="rock"){
        let logging=document.querySelector(".log");
        let msg=document.createElement("p");
        let completeMsg="You lose! Rock beats Scissors";
        msg.textContent=completeMsg;
        logging.appendChild(msg);
        computerScore++;
        checkScore();
    }
    else{}
    return true;
}

function checkScore(){
   if(humanScore==5){
        document.querySelector(".result").textContent="";
        const score =  document.createElement("h1");
        score.textContent="YOU: "+humanScore+" COMPUTER: "+computerScore;
        const result=document.querySelector(".result");
        result.appendChild(score);
        const msg =  document.createElement("h1");
        msg.style.color="green";
        msg.textContent="Congratulations, you won!";
        result.appendChild(msg);
        disableButtons();
   }
   else if(computerScore==5){
        document.querySelector(".result").textContent="";
        const score =  document.createElement("h1");
        score.textContent="YOU: "+humanScore+" COMPUTER: "+computerScore;
        const result=document.querySelector(".result");
        result.appendChild(score);
        const msg =  document.createElement("h1");
        msg.style.color="red";
        msg.textContent="Sorry, you lost!";
        result.appendChild(msg);
        disableButtons();
   }
   else{
        document.querySelector(".result").textContent="";
        const score =  document.createElement("h1");
        score.textContent="YOU: "+humanScore+" COMPUTER: "+computerScore;
        const result=document.querySelector(".result");
        result.appendChild(score);
        
   }
}

function disableButtons(){
    document.querySelectorAll(".container button").forEach(btn => {
        btn.disabled = true;
    });
}
