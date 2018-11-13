This game uses the following:
HTML, CSS, Javascript, Bootstrap and Jquery
The request was to:
1. There will be four crystals displayed as buttons on the page.
2. The player will be shown a random number at the start of the game.
3. When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
4. Your game will hide this amount until the player clicks a crystal.
5. When they do click one, update the player's score counter.
6. The player wins if their total score matches the random number from the beginning of the game.
7. The player loses if their score goes above the random number.
8. The game restarts whenever the player wins or loses.
9. When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
10. The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
As a result I put:
1. I displayed duckies instead of crystals
2. I defined a function which I used for each button evoked from jquery which did a math.random/floor for each min and max
3. I added ++ for the for this score to the user score i.e userTotalGuess = userTotalGuess + crystalRandom1 - note i retained the original variable names though I switched from crystals to ducks.
4. This is a jqery on click function i.e $('#cristal1').click(function () which will display it on the click event
5. This is tied to the jqery $('#user-wins').text(userWins) - same as get element by id & document write in JS
6. If/ else statement checking to see if userTotalGuess === computerGuess or userTotalGuess > to set win/lose condition
7. If user wins or loses we increment the respective page element with wins++ or losses++ and write to the page with the jqery syntax
8. We then reset the variables to random values (except for the wins and losses which persist.
