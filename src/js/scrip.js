let res = document.querySelector(".result")
let scoreUser = document.querySelector(".user-score");
let scoreComput = document.querySelector(".comput-score");
const btns = document.querySelectorAll(".btn");
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
let player;
let computer;
let round = 0;


btns.forEach(button => button.addEventListener("click", () => {
    player = button.id.toUpperCase()
    getComputerChoice();
    game()
    console.log(playerScore);
}))

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;

    switch (randomNum) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
        case 3:
            computer = "SCISSORS";
    }
}

let playerScore = 0;
let computerScore = 0;
let resetButton;

function update() {
    scoreUser.textContent = `Player Score: ${playerScore}`;
    round++;
    console.log(round);
    scoreComput.textContent = `Computer Score: ${computerScore}`;
    if (playerScore == 5) {
        res.textContent = "🎉YOU WIN!🎉";
        gameover()
    } else if (computerScore === 5) {
        res.textContent = "GAME OVER! COMPUTER BEATS YOU!"
        gameover()
    };
};

function game() {
    if (player == computer) {
        res.textContent = "DRAW"
    } else if (player == "ROCK" && computer == "SCISSORS") {
        res.textContent = "YOU WON! ROCK BEATS SCISSORS!"
        playerScore++
        update()
        return playerScore;
    } else if (player == "PAPER" && computer == "ROCK") {
        res.textContent = "YOU WON! PAPER BEATS ROCK!"
        playerScore++
        update()
        return playerScore;

    } else if (player == "SCISSORS" && computer == "PAPER") {
        res.textContent = "YOU WON! SCISSORS BEATS PAPER!"
        playerScore++
        update()
        return playerScore;
    } else {
        res.textContent = `YOU LOSE! ${computer} BEATS ${player}`
        computerScore++
        update()
        return computerScore;
    }

}

function gameover() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    resetButton = document.createElement("button")
    resetButton.textContent = "Start new game"
    document.body.append(resetButton)
    resetButton.addEventListener("click", refreshPage)
}

function refreshPage() {
    window.location.reload(true);
}


