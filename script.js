function getComputerChoice(){
    const rock = 0;
    const paper = 1;
    const scissor = 2;
    let randomValue;
    randomValue = Math.floor(Math.random() * 3);
    if( randomValue === rock ){
        return "rock";
    } else if( randomValue === paper ) {
        return "paper";
    } else {
        return "scissor";
    }
}
function getHumanChoice(){
    let choice = Number(prompt("Type 1 for rock\nType 2 for paper\nType 3 for scissor"));
    if( choice === 1 ){
        return "rock";
    } else if( choice === 2 ){
        return "paper";
    } else if( choice === 3) {
        return "scissor";
    }
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice()

playRound(humanSelection,computerSelection);

function playRound(humanChoice, computerChoice){
    
    if ( computerChoice === "rock" && humanChoice === "scissor" )
    {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
        return console.log( "Your score: " + humanScore + " computer's score: " + computerScore );
    } 
    
    else if  (computerChoice === "rock" && humanChoice === "paper" )
    {
        console.log("You Win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
        return console.log( "Your score: " + humanScore + " computer's score: " + computerScore );
    } 
    
    else if ( computerChoice === "paper" && humanChoice === "scissor" )
    {
        console.log("You Win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
        return console.log( "Your score: " + humanScore + " computer's score: " + computerScore );
    } 
    
    else if ( computerChoice === "paper" && humanChoice === "rock" )
    {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
        return console.log( "Your score: " + humanScore + " computer's score: " + computerScore );
    }

    else if ( computerChoice === "scissor" && humanChoice === "rock" )
    {
        console.log("You Win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
        return console.log( "Your score: " + humanScore + " computer's score: " + computerScore );
    }

    else if( computerChoice === "scissor" && humanChoice === "paper" )
    {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
        return console.log( "Your score: " + humanScore + " computer's score: " + computerScore );
    }

    else if ( computerChoice === humanChoice)
    {
        console.log("It's a tie!");
        return console.log( "Your score: " + humanScore + " computer's score: " + computerScore );
    }
}