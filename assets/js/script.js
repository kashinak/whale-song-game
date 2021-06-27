// Wait for DOM to load before running game//
//Click buttons and add event listeners//
//following code snippet is from Code Institute on eventListeners in the Maths Game lesson"
document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {

        button.addEventListener("click", function () {

            if (this.getAttribute("data-type") === "start-game") {

                alert("Now let's figure out how to really start the game")

            } else {

                let gameType = this.getAttribute("data-type");

                alert(`You clicked ${gameType}`);

            }

        });

    }

});

// User clicks play button //
// Game starts let n = 1; [outer for loop playing n sounds]//
// [inner loop] Play n sounds [n++] select n random sounds and highlight a box//
// game pause for user to select choice box highlights to different color //
/* wait or listen for click on one of four tiles (click event) 
Within this step we have to associate event listeners to each of the tiles JQuery .click function */
/* trigger whichever event occurs i.e. user clicks on one of two options [two logical flows] 
on correct or incorrrect options */
// option a = correct sequence go to line 32 with one more sound //
// option b = incorrect sequence box turns red ans alert and sound 'game over' and go back to line 30//

// 32-39 plays through when user selects correct sequence //







