

// User clicks play button //
// Game starts let n = 1; [outer loop for playing n sounds]//
// [inner loop] Play n sounds [n++] select n random sounds and highlight a box//
// game pause for user to select choice box highlights to different color //
/* wait or listen for click on one of four tiles (click event) 
Within this step we have to associate event listeners to each of the tiles JQuery .click function */
/* trigger whichever event occurs i.e. user clicks on one of two options [two logical flows] 
on correct or incorrrect options */
// option a = correct sequence go to line 32 with one more sound //
// option b = incorrect sequence box turns red ans alert and sound 'game over' and go back to line 30//

// 32-39 plays through when user selects correct sequence //

// sound plays when user clicks game box //

// play button sound effects //

function playSound1() {
    document.getElementById('beluga-sound').play();
};

function playSound2() {
    
    document.getElementById('orca-sound').play();

};

function playSound3() {
    document.getElementById('rightwhale-sound').play();
};

function playSound4() {
    document.getElementById('spermwhale-sound').play();
};


// game begiins when user presses start game button //



