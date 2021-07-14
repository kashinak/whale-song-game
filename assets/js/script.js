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

//game generates a sequence with a random tile click//
function gameSequence() {
    let n = sequence[Math.floor(Math.random() * sequence.length)];
    setTimeout => {
        switch(n){
            case 1:
            playSound1();
            break;
            case 2: 
            playSound2();
            break;
            case 3:
            playSound3();
            break;
            case 4:
            playSound4();
            break;
            default:         
        }
    }, 1000;
    end();
};
