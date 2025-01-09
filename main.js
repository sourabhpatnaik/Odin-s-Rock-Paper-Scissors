// Getting Computer's Choice

function getComputerChoice(){
    let num = 3;
    const selectNum = Math.floor(Math.random(3)*num);

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