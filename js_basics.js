/*Introducing Loops, Arrays and Objects*/




/*Random Number Challenge, Part II

// how to create error messages
if ( || ) {
    throw new Error('error message');
}

isNaN('string')
// returns true
isNaN(9)
//returns false
*/


/*Random Number Challenge*/

// change the random number program so it can
// accept two values
// 1 lower and 1 upper value
// display using alert, document.write, or console.log


/*Variable Scope*/

// variables in a function can have the same name as variables outside the function
// varIblkes contained in a function are exclusive to that function
//variables contained outside the function are global
// it is generally a bad idea to use global variables in a function
// using the var keyword in a function will ensure no global variables are being accessed
// if  function is called after a global variable and it does not use the var keyword it can overwrite the value of the variable


/*Giving Information to Functions

// to give info to a function add a parameter inside the functions ()
// naming a parameter has the same rules as naming a function

function getRandomNumber( upper ) {
  var randomNumber = Math.floor( Math.random() * upper) +1;
  return randomNumber;
}

console.log( getRandomNumber(6) );
console.log( getRandomNumber(138) );
console.log( getRandomNumber(1138) );


function getArea(width, length, unit) {
 var area = width * length;
 return area + " " + unit;
}
console.log(getArea(10, 20, 'sq ft'));

//this passes the value of upper into the function
// then the function value is passed into console log

// functions can have multiple parameters separated by a comma
// when calling the function use a comma to separate the arguments
*/


/*Getting Information From a Function

function getRandomNumber() {
  var randomNumber = Math.floor( Math.random() * 6) +1;
  return randomNumber;
}
getRandomNumber();getRandomNumber


// example of how to use return below
function isEmailEmpty () {
 var field = document.getElemebtByID('email');
 if (field.value === '') {
  return true;
 } else {
   return false;
 }
}

var fieldTest = isEmailEmpty();
if (fieldTest === true) {
 alert('Please provide your email address.');
}

//return can only return a single value and if it is used in the middle of a funtion the code below it will not be run when the function is called
*/

//return is versatile as it can be used with many funtions and is very common


/*Functions Change the Flow of a Program*/

// it's common to have functions call other functions which is
// why it's a good idea to keep them at the top of your code


/*Introducing Functions

function funcName( ) {

}

//Function names can only be letters, numbers, _, and $
// they cannot start with numbers
// they cannot include spaces or other punctuation
//No semi colon at the end

//functions are often declared at the begining of programs

// to run a function do the following
funcName();


function alertRandom() {
  var randomNumber = Math.floor( Math.random() * 6) +1;
  alert(randomNumber);
}
alertRandom();
alertRandom();
alertRandom();

// a function expresion is a function stored inside a variable
var alertRandom = funtion () {
var randomNumber = Math.floor( Math.random() * 6) +1;
  alert(randomNumber);
};
alertRandom();
*/


/*The Conditional Challenge

Quiz App
- ask at least 5 questions
- track number of correct answers
- give user a message after quiz letting them know how many they got correct
- rank the player 5 = gold 4-3 = silver 1-2 = bronze 0 = nothing
*/


/*Combining Multiple Tests Into a Single Condition

&& "and" operator means both conditions must be true for it to be true
example: if (agree === yes && agree === y)
no limit to how many conditions can be used

|| "or" operator means one of the conditions must be true for it to be true
example: if (agree === yes || agree === y)
no limit to how many conditions can be used
*/

/* Document Your Code With Comments

/*
it's common to add multi line comments at the begining of programs detailing what the program should do
- contact info
- copyright notice
- any other relivant data

BELOW IS AN EXAMPLE
*/

/*
The Random Number Guessing Game
Generates a number between 1 and 6
and gives a player two attemps to
guess a number
*/

/*
// assume the player didn't guess correctly
var correctGuess = false;

// generate random number from 1 to 6
var randomNumber = Math.floor(Math.random() * 6 ) + 1;

var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
*/

/*
1. correct
2. guessed too high
3. guessed too low
*/
/*
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

*/


/*Improving the Random Number Guessing Game

var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
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
if ( correctGuess ) {
  document.write('<p>You quessed the number!</p>');
} else {
  document.write('<p>Sorry. The number was ' + randomNumber +'</p>');
}
*/


/*Programming Multiple Outcomes

if () {

} else if () {
// else if will only be ran if the first condition is false

} else {

}

// there is no limit to how many else if conditions you can have
// the last statment should be an else and will only run if all if and else if conditions are false
*/



/*Boolean Values

if ( true ) {
  document.write('The condition is true.');
} else {
  document.write('The condition is false.');
}

var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prmpt('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomNumber ) {
 correctGuess = true;
}
if ( correctGuess ) {
  document.write('<p>You quessed the number!</p>);
} else {
  document.write('<p>Sorry. The number was ' + randomNumber +'</p>');
}
*/


/*Build a Random Number Guessing Game
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prmpt('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomNumber ) {
 document.write('<p>You guessed the number!</p>);
} else {
  document.write('<p>Sorry. The number was ' +randomNumber + '</p>');
}
*/


/*Introducing Conditional Statements

var answer = prompt('What programming language is the name of a gem?');
if ( answer.toUpperCase() === 'RUBY' ) {
  document.write("<p>That's right!</p>");
} else {
  document.write("<p>Sorry, that's wrong.</p>");
}

// example if (condition) {code to run if the condition is true}
// condition can be true or false
//inside brackets "code block" is code that runs only if the condition is true "code block"
// no semi collon
// === means the input must be indenticle
// no semi collon after an else statement either
*/


/* The Random Challenege
- create random number generator
- colect a number from a user - prompt() and parseInt()
- print a random number from 1 - the users entered number - Math.random()


- create a program that accepts 2 numbers and generates a random number between them
*/


/*Create a random number

// Math.random()
// Math.floor rounds numbers down to the nearest int
// Math.ceil rounds numbers up to the nearest int

//to simulate a roll of a 6 sided die
// Math.floor( Math.random() * 6) + 1
// Math.ceil has a slight chance of generating 0 so floor is used

var dieRoll = Math.floor(Math.random() * 6) +1
alert ('You rolled a ' + dieRoll + '!')
*/


/* Math Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/


/* JS Basics - The Mad Libs Challenge Revisited */

//I updated story.js to now have a counter, but this can be done more efficiently with functions and loops later.


/* JS Basics - Numbers and Strings

//Adding numbers together that are strings the numbers will be concatinated rather then added ie input1 = 1 and input2 = 2 the total woul be 12  unless the string is converted
var HTMLBadges = prompt('How many HTML Badges do you have?');
var CSSBadges = prompt('How many CSS BAdges do you have?');
var totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges);
alert('Wow! You have ' + totalBadges + ' badges!');

// parseInt() - this is used to convert strings to ints 1, 2 ...
// parseInt() will also cut off the decimal places
// parseFloat() - this is used to convert strings to floats 3.14
// NaN in console means Not a Number
// can be used with numbers in strings if the number is first in the string
*/


/* JS Basics - Numbers

//score = score + 10; same as score += 10;

//score = score - 20; same as score -= 20;

//score = score * 5; same as score *= 5;

//score = score / 2; same as score /= 2;

// App that calculates number of seconds in a day and seconds a person has been alive

var secondsPerMin = 60;
var minutesPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin * minutesPerHour * hoursPerDay;
document.write('There are ' + secondsPerDay + ' seconds in a day.');
var yearsAlive = prompt('What\'s your age?');
var secondsAlive = yearsAlive * weeksPerYear * daysPerWeek * secondsPerDay
document.write(' You\'ve been alive for ' + secondsAlive + ' seconds!');
*/


/* JS - Basics - Numbers

// numbers in quotes are strings not numbers
// JS can use ints, floats, and scientific notation
// when using numbers they should not be in quotes or have commas

/* JS Basics - The Variable Callenge*/

// Story Maker app
/* 1. Create a variable and capture input
2. Create a separate variable for each piece of input
3. Add an alert to tell the visitor that they're finished
4. Combine the input with other strings to create a message
5. Print the story to the browser window
*/




/* JS Basics - Working with Strings and Finding Help

var passphrase = 'Open Sesame';
console.log(passphrase.length);

//This will show the length of the string (including the space) in the console log
// the "." before length means that you want to use a property associated with the object passphrase
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

console.log(passphrase.toLowerCase());
console.log(passphrase);
console.log(passphrase.toUpperCase());
*/

/* shout app

var stringToShout = prompt("What should I shout?");
var shout = stringToShout.toUpperCase();
shout += "!!";
alert(shout);
*/


/* JS Basics - Combinig Strings

// combining strings is called "concatenation"

var visitor = prompt('What is your name?');
var message = 'Hello ' + visitor +'!';
document.write(message);

// + can be used to connect unlimited numbers of strings
// you can also use the following to add strings to a variable
message = " " + message + " Have a great day!";
document.write(message);

// += is the same as refrencing the variable and then adding a string
message = message + "string";
// this is the same as
message += "string";
*/


/* JS Basics - Capturing Vistor Input

var visitorName = prompt('What is your name?');
alert(visitorName);
console.log(visitorName);
*/


/* JS Basics - Spaces, tabs and new lines in JS */

// spaces, tabs and carriage returns can be used in a lot of ways, but best practice is to use them in such a way that makes the code easier for humans to read

// when creating variables there MUST be a space between var and the name of the variable being declared


/* JS Basics - Strings and Numbers

// strings can be contained within "" or '', but if you want to use those characters in the string you can use the other on the outside or put a slash before them
var message = "Hunter's string";
var greeting = 'Hunter\'s greeting';
alert(message);
alert(greeting);
*/


/* JS Basics - Naming Variables

//variables cannot start with a number at the begining, but they can start with letters, dollar signs and underscores
// Variables can also have capitalized letters in them example: "PricePerPound"
// best practice is to use clear and descriptive names for variables even if it requires more typing as it will be easier for others or yourself to interpret latter
*/


/* JS Basics - Introducing Variables

// var = variable
// example: var score = 0:
// characters between "" in a variable are called strings
// variables can be changed without using "var" to declare them as a variable once they've been created they can be manipulated be refrencing them by name (see example below)

var message = "Hello!";
alert(message);
message = "New Message String!";
alert(message);
*/


/*JS Basics - The Console Challenge

//the following seems to be a best practice, I'm assuming so other devs can see what you're doing and probably helps with debugging even for the original engineer

console.log("Start program.";
 <js here>
console.log("End program.");
*/

/*JS Basics - The JS Console

// CMD Opt J - opens the JS console in chrome
// console shows only 1 error at a time working top down
// console also allows you to log notes

alert("Howdy!");
document.write("Writting on the page!");
console.log("Program complete");
*/


/*JS Basics - Where Does JS Go

alert("Howdy!");
// to link a js file in an html document use the following
// <script src="<FILE NAME.js>"></script>
// using the script tags you can also write js directly in an html file, it appears these must be on separate lines tag open on one line, then js, then tag close
// cannot use both in the same set of tags
// the html file will run top to bottom so the placment of your script tags changes when the js is run

/*JS Basics - Your First JS Program

alert("Hello Hunter");
//statments end in a ";"
document.write("<h1>Writting on the page using JS</h1>");
alert("goodbye");
*/
