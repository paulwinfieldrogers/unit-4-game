/*psuedocode
set variables for:
user guess
computer guess 
sum of user guess values
user # of wins
user # of losses
then 
compare user sum to computer guess and if they=== eachother then win
if not continue
if user guess > than computer guess then end game & user loses
UI 8 divs - images for buttons
*/
/*

There will be four crystals displayed as buttons on the page.
The player will be shown a random number at the start of the game.
When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
Your game will hide this amount until the player clicks a crystal.
When they do click one, update the player's score counter.
The player wins if their total score matches the random number from the beginning of the game.
The player loses if their score goes above the random number.
The game restarts whenever the player wins or loses.
When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
We need to generate a random number
The random number shown at the start of the game should be between 19 - 120.
Each crystal should have a random hidden value between 1 - 12.
*/

//I've subbed out ducks for crystals to mix it up but left the variable names alone from the orig design
var userTotalGuess = 0;
var computerGuess = getRandomIntInclusive(19, 120);// random for computer guess
var crystalRandom1 = getRandomIntInclusive(1, 12) //one for each crystal
var crystalRandom2 = getRandomIntInclusive(1, 12) //one for each crystal
var crystalRandom3 = getRandomIntInclusive(1, 12) //one for each crystal
var crystalRandom4 = getRandomIntInclusive(1, 12); //one for each crystal
var userWins = 0;
var userLosses = 0;

function getRandomIntInclusive(min, max) { //used by vaiables above this was a suggested function from my tutor from mdn instead of coding each line for this - I left the name the same as it was not mine.  Previously I had code for each variable.
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
//this is the main function which does most of the work - I removed this code fromm each button to simplify
//if else to check to see if equal to or over guess
function mainBody(){
if (userTotalGuess === computerGuess) {
    userWins++;
    $('#user-wins').text(userWins);
    alert("You win");
    //now reset the numbers (will put in function later)
    computerGuess = getRandomIntInclusive(19, 120);
    userTotalGuess = 0;
    crystalRandom1 = getRandomIntInclusive(1, 12)
    crystalRandom2 = getRandomIntInclusive(1, 12) //one for each crystal
    crystalRandom3 = getRandomIntInclusive(1, 12) //one for each crystal
    crystalRandom4 = getRandomIntInclusive(1, 12); //one for each crystal
    $('#computer-total').text(computerGuess)// computer guess resets within the fuction at end
}
else if (userTotalGuess > computerGuess) {
    userLosses++;
    $('#user-losses').text(userLosses);
    alert("You lose");
    //now reset the numbers (will put in function later)
    computerGuess = getRandomIntInclusive(19, 120);
    userTotalGuess = 0;
    crystalRandom1 = getRandomIntInclusive(1, 12)
    crystalRandom2 = getRandomIntInclusive(1, 12) //one for each crystal
    crystalRandom3 = getRandomIntInclusive(1, 12) //one for each crystal
    crystalRandom4 = getRandomIntInclusive(1, 12); //one for each crystal
    $('#computer-total').text(computerGuess)
    console.log(userLosses)
}
};

//button no. 1
//On click need to set var = itself plus total so far

$('#computer-total').text(computerGuess);//sets the value before the user starts
console.log(computerGuess + " test1");
//created a function for min max values - dicsussed with tutor  & will look to make one onclick result
$('#cristal1').click(function () {
    userTotalGuess = userTotalGuess + crystalRandom1;
    $('#guessed-total').text(userTotalGuess);
    mainBody();
    });

    //button 2
//On click need to set var = itself plus total so far
$('#cristal2').click(function () {
    userTotalGuess = userTotalGuess + crystalRandom2;
    $('#guessed-total').text(userTotalGuess);
    mainBody();
});

//button 3
//On click need to set var = itself plus total so far
$('#cristal3').click(function () {
    userTotalGuess = userTotalGuess + crystalRandom3;
    $('#guessed-total').text(userTotalGuess);
    mainBody();
});

//button 4
//On click need to set var = itself plus total so far
$('#cristal4').click(function () {
    userTotalGuess = userTotalGuess + crystalRandom4;
    $('#guessed-total').text(userTotalGuess);
    mainBody();
});
