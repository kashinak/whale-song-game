$('#how-to').click(function() {
    $('#words').show(1000);
});

const startButton = document.getElementById('start');

// //My code snippet//
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
//code snippet from session with Moosa//
//This is an init function to initialize the game-photos connecting to their corresponding whale sounds//
function init() {
    document.getElementById("game-photo-1").addEventListener("click", playSound1);
    document.getElementById("game-photo-2").addEventListener("click", playSound2);
    document.getElementById("game-photo-3").addEventListener("click", playSound3);
    document.getElementById("game-photo-4").addEventListener("click", playSound4);
}

//code snippet from my session with Moosa//
let round = 0;
let num = 4;
let score = 0;
// function reStartGame() {
//     let level = 0;
//     let num = 4;
//     let score = 0;
//     startGame();
// };
let startButton = getElementById('start');
//Code snippet from session with Moosa//
//game begins when user presses start button//
function startGame() {
  init();
/*fixed bug of making 'start' button disappear after clicking using document.getElementById("start").hidden = true; but it stoppped working so I used the below code in conjunction 
with div id 'start' and wrapped around button onclick element. got workaround .innerHTML working solution from the following 
Youtube tutorial: https://www.youtube.com/watch?v=gYtGSbbqaY8*/
  document.getElementById("start").innerHTML = "Start Game!";
  document.getElementById("start").innerHTML = "";
  let n = Math.floor(Math.random() * num +1);
  setTimeout(() => {
      console.log("timeout #2");
   //code snippet from my session with Moosa//
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
  }, 1500); 
 end();
};
startButton.addEventListener('click', startGame());

function end() {
    startButton.style.display = '';
};

//code snippet from session with Moosa//
//blink(id) function makes selected photo border disappear after 1 second//
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
 };s
 
const playerSequence = [];
const gameSequence = [];

//Converts player clicks into numbers and pushes number into a new array//
(".panel").click(function(e) {
    let playerClick = $(this).attr("id");
    switch(playerClicked){
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
    checkSequence(playerSequence.length-1);
});

//checks if player sequence matches game sequence//
function checkSequence(indexOfArray) { 

    if(playerSequence[indexOfArray] === gameSequence[indexOfArray]){
       
      if(gameSequence.length === playerSequence.length) {
           setTimeout(function () {
            nextSequence();
           }, 1000);
        }
    } else {
      launchError();
    }
}
        
 // Launches error sequence if player sequence and game sequence do not match//
function launchError(){
    $("body").css("background-color", "red")
    $("h1").text("Game Over");
        setTimeout(function () {
            $("#start").show();
            $("body").css("background-color", "#011F3F");
        }, 1500)
    audio[4].play();
    round=0;
    gameSequence = [];
    }






