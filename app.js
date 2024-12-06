function playRound(humanChoice){
    
    checkForWinner()
    if(gameFinished){
        return
    }
    
    humanChoice = arguments[0].toLowerCase()
    computerChoice = getComputerChoice()
    
    switch(humanChoice){
        case "rock":
            if(computerChoice == "paper"){
                incrementComputerScore()
                printResultToDiv("computer","rock","paper")
            }
            else if(computerChoice == "scissors"){
                incrementHumanScoreScore()
                printResultToDiv("human","rock","scissors")
            }else{
                //console.log("Both chose Rock, It's a Draw!")
                printResultToDiv("neither","rock","rock")
            }
        break;
    
        case "paper":
            if(computerChoice == "scissors"){
                incrementComputerScore()
                printResultToDiv("computer","paper","scissors")
            }
            else if(computerChoice == "rock"){
                incrementHumanScoreScore()
                printResultToDiv("human","paper","rock")
            }else{
                printResultToDiv("neither","paper","paper")
            }
        break;

        case "scissors":
            if(computerChoice == "rock"){
                incrementComputerScore()
                printResultToDiv("computer","scissors","rock")
            }
            else if(computerChoice == "paper"){
                incrementHumanScoreScore()
                printResultToDiv("human","scissors","paper")
                
            }else{
                printResultToDiv("neither","scissors","scissors")            
            }
        break;
    }
}
    

function printResultToDiv(winner,humanChoice,computerChoice){
    const paragraph = document.createElement("p")
    if(winner.toLowerCase() === "human"){
        paragraph.textContent = "You win! " +humanChoice+ " beats "+computerChoice
    }else if(winner.toLowerCase() === "computer"){
        paragraph.textContent = "You lose! " +computerChoice+ " beats "+humanChoice
    }else{
        paragraph.textContent = "Both chose " + humanChoice + ", It's a Draw!"
    }
    resultDiv.append(paragraph)
}


function getComputerChoice(){
    let randomNumber = Math.random()*3
    console.log(randomNumber)
    if(randomNumber<=1){
        return "rock"
    }else if(randomNumber <=2){
        return "paper"
    }else{
        return "scissors"
    }
}

function checkForWinner(){
    if(gameFinished===true){
        return true
    }

    if(humanScore === 5 || computerScore === 5){
        let gameWinner = ""
        const h2elem = document.createElement("h2")
        humanScore === 5 ? gameWinner = "Human" : gameWinner = "Computer"
        h2elem.textContent = gameWinner + " won!"
        resultDiv.appendChild(h2elem)
        gameFinished = true
        return true
    }
}

function incrementComputerScore(){
    computerScoreDisplay.textContent = ++computerScore
}

function incrementHumanScoreScore(){
    humanScoreDisplay.textContent = ++humanScore
}

let gameFinished = false
let humanScore = 0
let computerScore = 0
    
const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")
const resultDiv = document.querySelector("#result")
const humanScoreDisplay = document.querySelector("#humanScore")
const computerScoreDisplay = document.querySelector("#computerScore")

humanScoreDisplay.addEventListener("change",function(event){
    alert(event)

})

rockButton.addEventListener("click", () => {
    playRound("Rock")
});
    
paperButton.addEventListener("click", () => {
    playRound("Paper")
});
    
scissorsButton.addEventListener("click", () => {
    playRound("Scissors")
});