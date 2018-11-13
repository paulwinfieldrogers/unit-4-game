//document.getElementById("red-cr").onclick = function(){
//console.log("I'm the 1st button");
//}
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

var userTotalGuess = 0;
var computerGuess = getRandomIntInclusive(19,120);
// 120-19+1 = 102 -this is the random result of computer guess btw 19-120
var crystalRandom1 = getRandomIntInclusive(1,12)
var crystalRandom2 = getRandomIntInclusive(1,12) //one for each crystal
var crystalRandom3 = getRandomIntInclusive(1,12) //one for each crystal
var crystalRandom4 = getRandomIntInclusive(1,12); //one for each crystal
var userWins = 0;
var userLosses = 0;

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

//$(document).ready(function(){
//}
//button no. 1
//On click need to set var = itself plus total so far

    $('#computer-total').text(computerGuess);//sets the value befoee the user starts

   //created a function for min max values - dicsussed with tutor  & will look to make one onclick result
    $('#cristal1').click(function(){
        userTotalGuess = userTotalGuess + crystalRandom1;
        $('#guessed-total').text(userTotalGuess);
        console.log(userTotalGuess + " user total guess");
        console.log(computerGuess);
        console.log(crystalRandom1 + " button 2 random number");
        //now record if number exceeds the computer num and log wins and losses
        if (userTotalGuess === computerGuess){
            userWins ++;
            $('#user-wins').text(userWins);
            alert("You win");
            //now reset the numbers (will put in function later)
            computerGuess = getRandomIntInclusive(19,120);
            userTotalGuess = 0;
            crystalRandom1 = getRandomIntInclusive(1,12)
            crystalRandom2 = getRandomIntInclusive(1,12) //one for each crystal
            crystalRandom3 = getRandomIntInclusive(1,12) //one for each crystal
            crystalRandom4 = getRandomIntInclusive(1,12); //one for each crystal
            $('#computer-total').text(computerGuess)// computer guess resets within the fuction at end

        }
        else if (userTotalGuess > computerGuess){
            userLosses ++;    
            $('#user-losses').text(userLosses);
            alert("You lose");
              //now reset the numbers (will put in function later)
              computerGuess = getRandomIntInclusive(19,120);
            userTotalGuess = 0;
            crystalRandom1 = getRandomIntInclusive(1,12)
            crystalRandom2 = getRandomIntInclusive(1,12) //one for each crystal
            crystalRandom3 = getRandomIntInclusive(1,12) //one for each crystal
            crystalRandom4 = getRandomIntInclusive(1,12); //one for each crystal
              $('#computer-total').text(computerGuess)
            console.log(userLosses)
    }});
    computerGuess = Random=Math.floor(Math.random()* 102) + 19;
   console.log(computerGuess + "computer guess")

   //button 2
//On click need to set var = itself plus total so far
$('#cristal2').click(function(){
    userTotalGuess = userTotalGuess + crystalRandom2;
    $('#guessed-total').text(userTotalGuess)
    console.log(userTotalGuess + " user total guess");
    //now record if number exceeds the computer num
           if (userTotalGuess === computerGuess){
        alert("You win");
    }
   else if (userTotalGuess > computerGuess){
        alert("You lose");
        console.log(crystalRandom2 + "button 2 random number");
 
}});



//button 3
//On click need to set var = itself plus total so far
$('#cristal3').click(function(){
    userTotalGuess = userTotalGuess + crystalRandom3;
    $('#guessed-total').text(userTotalGuess)
    console.log(userTotalGuess + " user Total guess");
    //now record if number exceeds the computer num
    if (userTotalGuess === computerGuess){
        alert("You win");
    }
   else if (userTotalGuess > computerGuess){
        alert("You lose");
        console.log(crystalRandom3 + " button 3 random number");
}});


//button 4
//On click need to set var = itself plus total so far
$('#cristal4').click(function(){
    userTotalGuess = userTotalGuess + crystalRandom4;
    $('#guessed-total').text(userTotalGuess)
    console.log(userTotalGuess + "user total guess");
    //now record if number exceeds the computer num
    if (userTotalGuess === computerGuess){
        alert("You win");
    }
   else if (userTotalGuess > computerGuess){
        alert("You lose");
        console.log(crystalRandom4 + " button 4 random number");
}});

//for (var i = 0; i < 4; i++){*/
