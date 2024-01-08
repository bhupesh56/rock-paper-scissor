function randomNumber(min=1, max=3) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getComputerChoice(){
    let random = randomNumber();
    return random === 1 ? "rock" :
    random === 2 ? "paper" : "scissor";
  }

  function playRound(userChoice, computerChoice){
    userChoice = userChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (userChoice === "rock" && computerChoice === "paper" || 
    userChoice === "paper" && computerChoice === "scissor" ||
    userChoice === "scissor" && computerChoice === "rock")
    {
        console.log(`You Won, ${userChoice} beats ${computerChoice}\n`);
        return "W";
    }
    else if (computerChoice === "rock" && userChoice === "paper" || 
    computerChoice === "paper" && userChoice === "scissor" ||
    computerChoice === "scissor" && userChoice=== "rock")
    {
        console.log(`You Lose, ${computerChoice} beats ${userChoice}\n`);
        return "L";
    }
    else if (userChoice === computerChoice){
        console.log( "It's a draw. Do a rematch \n");
        return "D";
    }
    else{
        console.log("enter a valid choice\n");
        return "I";
    }
  }

function game(number = 5){
    let userWin = 0;
    let computerWin = 0;

    for (let i = 0; i < number; i++){
        let userChoice = prompt("Enter a Choice:");
        let computerChoice = getComputerChoice();
        let roundResult = playRound(userChoice, computerChoice);
        if (roundResult === 'W'){
            userWin++;
        }
        else if (roundResult === 'L'){
            computerWin++;
        }
        else{
            number++;
        }
        if(number === 20){
            break;
        }
    }

    if (number === 20){
        console.log("Too many tries\n");
    }
    result(userWin, computerWin);
}

function result(userWin, computerWin){
    console.log("\n");
    if (userWin > computerWin){
        console.log("You Won\n");
    }
    else if(userWin < computerWin){
        console.log("You Lose");
    }
    else{
        console.log("It's a draw");
    }
    console.log(`Your score: ${userWin}\nComputer score: ${computerWin}`);
}

game();