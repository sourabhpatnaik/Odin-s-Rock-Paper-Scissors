// 0 = Rock
// 1 = Paper
// 2 = Scissors

// 0 beats 2
// 1 beats 0
// 2 beats 1

let humanScore = 0;
let computerScore = 0;

//function for displaying message
function showMessage(message) {
  let showResult = document.getElementById("result");
  showResult.textContent = message;
}

// Function for Getting Computer's Choice

function getComputerChoice() {
  let num = 3;
  const selectNum = Math.floor(Math.random() * num);

  if (selectNum == 0) {
    return "rock";
  } else if (selectNum == 1) {
    return "paper";
  } else if (selectNum == 2) {
    return "scissors";
  }
}

// Function for Getting Human Player's Choice

function getHumanChoice() {
  let humanChoice;

  if (
    humanChoice == "rock" ||
    humanChoice == "paper" ||
    humanChoice == "scissors"
  ) {
    console.log("clear");
  } else {
    return "Invalid Selection";
  }
}

// Function for winner

function winner(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    return "tie";
  }
  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice = "scissors" && computerChoice == "paper")
  ) {
    return "human";
  } else {
    return "computer";
  }
}

// function for play round
function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
  let roundWinner = winner(humanChoice, computerChoice);

  if (roundWinner == "tie") {
    alert("Its a TIE");
  } else if (roundWinner == "human") {
    alert("You Won!!! " + humanChoice + " " + "Beats" + " " + computerChoice);
    humanScore++;
  } else {
    computerScore++;
    alert(
      "Computer Wins!!! " + computerChoice + " " + "Beats" + " " + humanChoice
    );
  }

  showMessage(
    `Your Choice: ${humanChoice} | Computer's Choice: ${computerChoice} | Human Score: ${humanScore} and Computer Score: ${computerScore}`
  );

  if (humanScore + computerScore == 5) {
    showMessage("GAME OVER!!!");
    if (humanScore > computerScore) {
      showMessage("YOU WON!!!");
    } else if (humanScore < computerScore) {
      showMessage("COMPUTER WON!!!");
    } else {
      showMessage("ITS A TIE");
    }
    humanScore = 0;
    computerScore = 0;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Function for resetting page
let resetPage = document.getElementById("reset");

resetPage.addEventListener("click", (e) => {
  location.reload();
});
