//declare game variables//
let round = 0;
let score = 0;
let highScore = [];
const sequence = [];
const playerSequence = [];
const startButton = document.getElementById("start");

//upon clicking startButton, game console clears and new game sequence is played//

startButton.addEventListener("click", startGame);

function startGame() {
    $("#round-text")[0].reset();
    $("#score-text")[0].reset();
    document.getElementById("start").innerHTML = "Start Game!";
    document.getElementById("start").innerHTML = "";
    gameSequence();
};

