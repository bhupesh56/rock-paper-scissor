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
        return(`You Won, ${userChoice} beats ${computerChoice}`);
    }
    else if (computerChoice === "rock" && userChoice === "paper" || 
    computerChoice === "paper" && userChoice === "scissor" ||
    computerChoice === "scissor" && userChoice=== "rock")
    {
        return(`You Lose, ${computerChoice} beats ${userChoice}`);
    }
    else if (userChoice === computerChoice){
        return( "It's a draw. Do a rematch \n");
    }
    else{
        return("enter a valid choice");
    }
  }

  let userChoice = prompt("Enter a Choice:");
  let computerChoice = getComputerChoice();

  console.log(playRound(userChoice, computerChoice));
