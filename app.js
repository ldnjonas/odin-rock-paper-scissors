function getComputerChoice(){
    let randomNumber = Math.random()*3
    if(randomNumber < 1){
        return "rock"
    }else if(randomNumber <2){
        return "paper"
    }else{
        return "scissors"
    }
}

function getHumanChoice(){
    return userChoice = prompt("Choose between rock, paper or scissors")
}

function playRound(humanChoice,computerChoice){
    humanChoice = getHumanChoice().toLowerCase()
    computerChoice = getComputerChoice().toLowerCase()

    if(humanChoice == "rock"){
        if(computerChoice == "paper"){
            computerScore++
            console.log("You lose! Paper beats Rock")
        }
        if(computerChoice == "scissors"){
            humanScore++
            console.log("You win! Rock beats Scissors")
        }else{
            console.log("Both chose Rock, It's a Draw!")
        }
    }

    if(humanChoice == "paper"){
        if(computerChoice == "scissors"){
            computerScore++
            console.log("You lose! Scissors beats Paper")
        }
        if(computerChoice == "rock"){
            humanScore++
            console.log("You win! Paper beats Rock")
        }else{
            console.log("Both chose Paper, It's a Draw!")
        }
    }

    if(humanChoice == "scissors"){
        if(computerChoice == "rock"){
            computerScore++
            console.log("You lose! Rock beats Scissors")
        }
        if(computerChoice == "paper"){
            humanScore++
            console.log("You win! Scissors beats Paper")        }else{
                console.log("Both chose Scissors, It's a Draw!")
            }
    }
}

let humanScore = 0
let computerScore = 0