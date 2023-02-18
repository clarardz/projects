let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const result_h2 = document.querySelector(".result > h2");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's']; 
    const randomNumber = Math.floor(Math.random()*3); 
    return choices[randomNumber]; 
}
function convertToWord(letter){
    if (letter === "r") return "Rock"; 
    if (letter === "p") return "Paper"; 
    return "Scissors"; 
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore; 
    result_p.innerHTML = `🔥 You win! 🔥<br>`;
    result_h2.innerHTML=`${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. `; 


    document.getElementById(userChoice).classList.add(`win`); 
    setTimeout(function(){document.getElementById(userChoice).classList.remove(`win`)},500); 
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore; 
    result_p.innerHTML = `💩 You lost... 💩<br>`;
    result_h2.innerHTML=`${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. `; 
    document.getElementById(userChoice).classList.add(`lose`); 
    setTimeout(function(){document.getElementById(userChoice).classList.remove(`lose`)},500); 
}
function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore; 
    result_p.innerHTML = `😐 It's a draw 😐<br>`; 
    result_h2.innerHTML=`${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. `; 
    document.getElementById(userChoice).classList.add(`draw`); 
    setTimeout(function(){document.getElementById(userChoice).classList.remove(`draw`)},500); 
}

function game(userChoice){
    const computerChoice = getComputerChoice(); 
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice); 
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice); 
            break; 
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);  
            break; 
        
    
    }
}


function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });
  paper_div.addEventListener("click", function () {
    game("p");
  });
  scissors_div.addEventListener("click", function () {
    game("s");
  });
}


main(); 