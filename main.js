// 0 = Rock
// 1 = Paper
// 2 = Scissors

// 0 beats 2
// 1 beats 0
// 2 beats 1




let humanScore = 0;
let computerScore = 0;



// Function for Getting Computer's Choice

function getComputerChoice(){
    let num = 3;
    const selectNum = Math.floor(Math.random()*num);

    if (selectNum == 0){
        return "rock";
        
    }
    else if(selectNum== 1){
        return "paper";
    }
    else if (selectNum==2){
        return "scissors";
    }
};

// console.log(getComputerChoice());

// Function for Getting Human Player's Choice

function getHumanChoice(){
    let humChoice = prompt("Select rock or paper or scissors : ").toLocaleLowerCase();

    return humChoice;
}

// console.log(getHumanChoice());


// Function for winner 

function winner(humanChoice , computerChoice){
   
    if(humanChoice == computerChoice){
        return 'tie'
    }
    if((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice== "paper" && computerChoice == "rock") || (humanChoice= "scissors" && computerChoice == "paper")){
        return 'human'
    }

    else{
        
        return 'computer'
    }
}


// function for play round
function playRound(humanChoice , computerChoice){
    let roundWinner = winner(humanChoice , computerChoice);

    if(roundWinner =='tie'){
        alert("Its a TIE")
    }
    else if(roundWinner == 'human'){
        alert("You Won!!! " + humanChoice +" " + "Beats" +" "+ computerChoice);
        humanScore++;
    }
    else{
        alert("Computer Wins!!! " + computerChoice +" "+  "Beats"+ " " + humanChoice);
    }
}



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection);
console.log(computerSelection);


console.log(playRound(humanSelection,computerSelection));