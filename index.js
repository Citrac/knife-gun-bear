// JavaScript source code
var playerScore = 0;
var aiScore = 0;

const player_score = document.getElementById("player-score");
const ai_score = document.getElementById("ai-score");

const result_verb = document.getElementById("result-verb");

const knife_choice = document.getElementById("knife-choice");
const gun_choice = document.getElementById("gun-choice");
const bear_choice = document.getElementById("bear-choice");

const win_choice = document.getElementById("win-choice");
const lose_choice = document.getElementById("lose-choice");

const choices = ["Knife","Gun","Bear"];
const maxIndex = choices.length - 1;
const winVerbs = ["stabs", "shoots", "mauls"];
const drawVerb = "equals";


knife_choice.addEventListener("click", () => playRound(choices.indexOf("Knife")));
gun_choice.addEventListener("click", () => playRound(choices.indexOf("Gun")));
bear_choice.addEventListener("click", () => playRound(choices.indexOf("Bear")));

function playRound(playerInput) {

    const aiInput = getRandomChoice();
    if (playerInput + 1 == aiInput || playerInput == maxIndex && aiInput == 0) {
        win();
        displayResult(playerInput, aiInput, true);
    }
    else if (playerInput - 1 == aiInput || playerInput == 0 && aiInput == maxIndex) {
        lose();
        displayResult(playerInput, aiInput, false);
    }
    else {
        //draw
        displayResult(playerInput, aiInput, true);
    };
}

function win() {
    playerScore++;
    player_score.innerHTML = playerScore;
}

function lose() {
    aiScore++;
    ai_score.innerHTML = aiScore;
}

function displayResult(playerInput, aiInput, playerWon) {
    var winInput;
    var aiInput;

    win_choice.removeAttribute("class");
    lose_choice.removeAttribute("class");

    if (playerWon) {
        winInput = playerInput;
        loseInput = aiInput;
        win_choice.classList.add("player-color");
        lose_choice.classList.add("ai-color");
    } else {
        winInput = aiInput;
        loseInput = playerInput;
        win_choice.classList.add("ai-color");
        lose_choice.classList.add("player-color");
    }

    const displayVerb = playerInput == aiInput ? drawVerb : winVerbs[winInput];

    win_choice.innerHTML = choices[winInput];
    lose_choice.innerHTML = choices[loseInput]

    result_verb.innerHTML = ` ${displayVerb} `;
}

function getRandomChoice() {
    return Math.floor(Math.random() * choices.length);
}