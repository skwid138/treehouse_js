/*
The Random Number Guessing Game
Generates a number between 1 and 6
and gives a player two attemps to
guess a number
*/

// assume the player didn't guess correctly
var correctGuess = false;

// generate random number from 1 to 6
var randomNumber = Math.floor(Math.random() * 6 ) + 1;

var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

/*
1. correct
2. guessed too high
3. guessed too low
*/
if (parseInt(guess) === randomNumber ) {
 correctGuess = true;
} else if ( parseInt(guess) < randomNumber ) {
  var guessMore = prompt(guess + ' is too low, try again!');
  if (parseInt(guessMore) === randomNumber) {
   correctGuess = true;
  }
} else if (parseInt(guess) > randomNumber ) {
  var guessLess = prompt(guess + ' is too high, try again!');
  if (parseInt(guessMore) === randomNumber) {
   correctGuess = true;
  }
}

// test if player is corrct and output response
if ( correctGuess ) {
  document.write('<p>You quessed the number!</p>');
} else {
  document.write('<p>Sorry. The number was ' + randomNumber +'</p>');
}
