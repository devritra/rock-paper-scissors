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