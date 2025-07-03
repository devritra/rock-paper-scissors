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