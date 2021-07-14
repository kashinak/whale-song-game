//declare game variables//
let round = 0;
let score = 0;
let highScore = [];
const startButton = document.getElementById("start");
let num = 4;

//upon clicking startButton, game console clears and new game sequence is played//

startButton.addEventListener("click", startGame);

function startGame() {
    document.getElementById("start").innerHTML = "Start Game!";
    document.getElementById("start").innerHTML = "";
    gameSequence();
};


//game generates a sequence with a random tile click//
function gameSequence() {
    init();
    let n = Math.floor(Math.random() * num +1);
    setTimeout(() => {
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
    }, 1000);
    end();
};

//end function 
function end() {
    startButton.style.display = "";
};

//link game photo tiles with corresponding game sounds and blink capability//
function playSound1() {
    // console.log("Hello!");
    document.getElementById("game-photo-1").style.outline = '#ffff00 solid 10px';
    document.getElementById('beluga-sound').play();
    blink("game-photo-1");
};

function playSound2() { 
    document.getElementById("game-photo-2").style.outline = '#ffff00 solid 10px';
    document.getElementById('orca-sound').play();
    blink("game-photo-2");
};

function playSound3() {
    document.getElementById("game-photo-3").style.outline = '#ffff00 solid 10px';
    document.getElementById('rightwhale-sound').play();
    blink("game-photo-3");
};

function playSound4() {
    document.getElementById("game-photo-4").style.outline = '#ffff00 solid 10px';
    document.getElementById('spermwhale-sound').play();
    blink("game-photo-4");
};

/*function init() to provide event listeners to make game buttons clickable and to playsound 
and blink when player presses game button*/
function init() {
    document.getElementById("game-photo-1").addEventListener("click", playSound1);
    document.getElementById("game-photo-2").addEventListener("click", playSound2);
    document.getElementById("game-photo-3").addEventListener("click", playSound3);
    document.getElementById("game-photo-4").addEventListener("click", playSound4);
}

/*blink function creates yellow outline border appear when player clicks a gameboard button and 
then the border disappears after 1 second*/
function blink(id) {
    var f = document.getElementById(id);
    // setTimeout(function() {
    //    f.style.display = (f.style.display == 'none' ? '' : 'none');
    // }, 500);
    new Promise((resolve, reject) => {
                f.style.outline = '#ffff00 solid 10px';
                setTimeout(() => {
                    f.style.outline = '';
                    setTimeout(() => {
                        resolve();
                    }, 250);
                }, 1000);
            });
 };

 //add playerSequence to convert player game clicks to numbers in sequence array;
function playerSequence() {
    let playerClick = $(this).attr("id");
    switch(playerClick){
        case "topleft":
            playerSequence.push(0);
            startGame(0);
            break;
        case "topright":
            playerSequence.push(1);
            startGame(1);
            break;

        case "bottomleft":
            playerSequence.push(2);
            startGame(2);
            break;

        case "bottomright":
            playerSequence.push(3);
            startGame(3);
            break;
    }
};


