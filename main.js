// Function for Getting Computer's Choice

function getComputerChoice(){
    let num = 3;
    const selectNum = Math.floor(Math.random()*num);

    if (selectNum == 0){
        return "Rock";
    }
    else if(selectNum== 1){
        return "Paper";
    }
    else if (selectNum==2){
        return "Scissors";
    }
};

console.log(getComputerChoice());

// Function for Getting Human Player's Choice

function getHumanChoice(){
    let humChoice = prompt("Enter Your Choice : ");

    return humChoice;
}

console.log(getHumanChoice());

