/*Interpolation*/

// interpolation is a way to inbed values into strings without needing
// to concatinate the string


/*Basic and Multiple Line Strings*/

// 'This is a string'
// "This is a string"
// `This is a string`
//all of these evaluate to the same thing

// Looking at the multiline.js file in the template literal folder you
// can see that using the + to create line breaks is no longer needed
// as well as using quotes on each line, it makes al the code much
// more clean


/*Basic Arrow Syntax

//a function declarion is different than a function Expression

function one() {
  //declarion
  return;
}
var two = function() {
  //expression
  return;
};

const three = function() {
  //expression
  return;
};

const four = () => {
  // arrow Function
  return;
};

// an arrow function is called such because instead of the word function it uses an arrow '=>' like above
// no matter how the function is created it is still called the same way

// if the function only has one parameter or argument then it does not need parentheses

//but if it has 0 or multiple then it needs  ()

// you also do not need to use a return as it will do this already

// if you only have a single line of code you can also remove the {}

// I updated all the files for the track to show what they should look like
*/


/*Overview*/

// const
// - should be the 1st option used
// - use for values you never want reassigned
// - block level scope (anything between {})
//
// let
// - when you want to reassign values
// - use with loops or when adding strings
//
// var
// - not recomended anymore

/*Using let with for Loops*/

// for(let i = 0; i < buttons.length; i++)
//this allows each time through the loop to set i as 0 again rather then showing it's value as  GLOBAL Variable

// in let.html the button number returns as 10 instead of the button number because using var instead of let makes the i variable global


/*Defining a Variable with let*/

// let is similr to var, but it has block level scoping


/*Using Constants with Arrays and Objects*/

//const does not stop arrays or objects from being changed, but does stop them from being overwritten entirely.

// I can add things to an array or object, but cannot recreate an array or object with the same name


/*Creating Unchanging Variables With const*/

//Const is used when the variable should not be changed while a program is run
// using Const effects scope. If const is used globally and that variable is used in a function const must also be used in the function or you'll get errors


/*Declaring Variables in JavaScript

var message = 'hello';
const pi = 3.14159;
let score = 0;

//const and let are similar to var
*/


/*The Student Record Search Challenge Solution*/

// - add something to catch names that are not in the array
// - add something to handle multiple students with the same name
// - creat a function to handle writting the html rather then relying on the loop


/*The Student Record Search Challenge

use a a loop and prompt
- that asks for the student name
- searches the records
- displays a match
- if you type quit exits the loop and the dialog box

/*The Build an Object Challenge, Part 1*/

// create a script that creates a bunch of student records and then prints them to a webpage

// create a data structure to hold info about students
// this should be an array named students
// the array will hold a list of objects

// each object should have the following properties
// name, track(ios, web design, front end dev, etc.), achievments (# value), and points

//create at least five student
// use workspace files

/*JavaScript Object Notation*/

// JSON = JavaScript Object Notation
// commonly used with Ajax


/*Mixing and Matching Arrays and Objects*/

// it's very common to make arrays of objects
// I will update my quiz challenge app so the 2d array is an array with objects
// changing from a 2D array to an array with objects has made the code far easier to read through... for a human


/*Using `for in` to Loop Through an Object's Properties

// a for in loop is only able to be used with objects

var person = {
  name : 'Hunter',
  country : 'US',
  age : 25,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};
for ( var key in person) {
  // do something
}

// key can be named anything

// if you want access to the values in each key you can use []
// dot notation will not work
for ( var key in person) {
  console.log(person[key]);
}

// this will print out the name of the key and it's value with a ': " between them
for ( prop in person) {
console.log(prop, ': ', person[prop]);
}
*/


/*Accessing Object Properties

// an object can be a property of another object

// there are two ways to access a value inside an object
// using the below example

// alert( person['name']); -- similar to an array except

// instead of the index the properties name is used as a string
// the easier and more common way is as follows

// alert( person.name); -- this is called dot notation
// it does not require brackets or quotes
// object_name.property_name

var person = {
  name : 'Hunter',
  country : 'US',
  age : 25,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

// properties values can be updated using this method as well

person.name = 'Banjo';

// you can also add properies this way

person.state = 'MN';


// think of properties like a collection of variables contained inside an object
*/


/*The Object Literal

// objects have properties and methods
// a property is like a variable that belongs to the object
// a method is something the object can do or something that can be done to an object

// var name =;  -- this creates a variable
// var name = [];  -- this creates an array
// var name = {};  -- this creates an object

// the example below name is the 'property name' or 'key'
// it is followed by a collon and a value
// the value must be a string, number, boolean, or an array

// the property nam / key is similar to a variable
// the naming rules for variables apply to it

// keys should have a ',' following each similar to an array

// spaces and charage returns are optional
// var object = {name:"Hunter",code:['HTML', 'CSS', 'JavaScript']};

var object = {
  name: "Hunter",
  code: ['HTML', 'CSS', 'JavaScript']
};
*/


/*Build a Quiz Challenge, Part 2*/

// not many devs use document.write now
// DOM - document object model

//using the dom you can dynamically access elements in the html document

// document.getElementByID('ID NAME of HTML TAG'):


/*Build a Quiz Challenge, Part 1

// ask at least 3 questions
// track questions answered correctly
// display number of questions answered correctly
// display questions that player got wrong

// use a loop to cycle through each question and compare the response to the answer in the array
// use prompt method to ask questions
// use a conditional statment to see if the payers answer matches the real answer
// 2 dimmensional array to hold questions and answer
// each array in the 2d array should contain the question and answer

*/




/*Two-Dimensional Arrays

// arrays can hold strings, numbers, and booleans
// an array can also contain arrays
// an array that only contains other arrays is called a two-dimensional array
// it's easier to think of this like a spread sheet with rows and collums
// the rows are the arrays and the collumns are items in the arrays


var masterList = [
  [80, 90, 100, 95],
  [75, 95, 85, 100],
  [60, 80, 77, 90]
];

// updated code in playlists.js
*/

/*Useful Array Methods

var list [
  one,
  two,
  three,
  four,
  five
]
// this joins all five strings into one and adds a comma between each, but not after the last one
var list2 = list.join( ', ' );

var extraList = [
  six,
  seven,
  eight,
  nine
]

// this combines the two lists and keeps the items as separate items it adds the items in the () to the end
var list3 = list.concat( extraList );

// this produces the index position which would be 2 and is assigned to the variable position
// if an item is not in an array it returns a value of -1
var position = list.indexOf('three');
*/


/*Using For Loops with Arrays

//this will index each fruit in the array and log it to the console
// apple = 0 etc.
var fruit = ['apple', 'peach', 'banana', 'grape'];
for (var i =0; i < fruit.length; i += 1) {
 console.log(fruit[i]);
}
*/

var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print( message ) {
 document.write( '<p> + message + '</p>');
}

while (true) {
 search = prompt.toLowerCase("Search for a product in our store. Type 'list' to show all of the produce and 'quit' to exit");
   if ( search === 'quit'.toLowerCase()) {
     break;
   }
 }

/*Removing Items From Arrays

//.pop and .shift are the two

// this would create a variable of the
// first item in the array called numbers
// and name it first item
var firstItem = numbers.shift();


//first in first out
// "eth0"


//Updated the playlist.js file I had messed with earlier
var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene'
];

function print(message) {
  document.write(message);
}

function printList( list ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < list.length; i += 1) {
   listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}
printList(playList);
*/


/*Adding Data to Arrays

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

var list = ['a', 'b', 'c'] ;
list.length
// this should show 3?

var numbers = [1, 2, 3, 4, 5, 6];
numbers[ numbers.length ] = 7;
// this adds the number 7 to the end of the array

// this accomplishes the same thing
numbers.push(7);

numbers.push( 7, 8, 9 );
// this would add 7, 8, and 9

numbers.unshift( 0 );
// this adds 0 to the front of the array

numbers.unshift ( -1, 0);
// this adds multiple items to the front of the array in the order listed

var playList = [];
playList.push('I Did It MY Way');
playList.push('Respect', 'Imagine');
playList.unshift('Born to be Wild');
playList.unshift('Louie Lpouie', 'Venus');

printList( playList );

*/

/*Accessing Items in an Array

// items in an array can be accessed by using their index value, which starts at 0 and goes up

var list = [ 3, 2, 1 ];
alert( list[0] );
// this would produce the number 3

var shopping = [ 'milk', 'eggs', 'bread', 'butter' ];
console.log( shopping[0] );
console.log( shopping[1] );
console.log( shopping[4] );
*/


/*What is an Array?

//arrays are flexible and can hold any number of things which do not need to be defined beforehand

// example, notice it uses brackets, unlike a regular varribale.
// the array below has strings separated by commas

var myShopping = [ 'carrots', 'milk', 'butter' ];

// arrays can also be written over multiple lines like below
var shoppingList = [
  'carrots',
  'milk',
  'eggs'
];
*/


/*The Refactor Challenge*/

// reduce the code as much as possible "refactor"

//DRY programming - Don't Repeat Yourself


/* this for loop will run 6 times
for (var i = 0; i <= 5; i += 1) {
  console.log( i );
}

// this one will run 5 times
for (var i = 0; i < 5; i += 1) {
console.log( i );
}
*/

/*Exiting Loops

var randomNumber = getRandomNumber (10);
var guess;
var guessCount = 0;
var correctGuess = false;
// this variable is often referred to as a flag

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper ) +1;
 return num;
}

while ( guessCount < 10 ) {
   guess = prompt('I am thinking of a number between 1 and 10. What is it?')
   guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
    break;
  }
}

if ( correctGuess ) {
  document.write('<h1>You guessed the number!</h1>');
  document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);
} else {
 document.write('<h1>Sorry, you did not guess the number.</h1>');
}
*/



/*For Loops

// for loops are typically used when loops need to be ran a certin number of times
// they are also used to interact with arrays

var counter = 0:
while (counter < 10) {
 document.write( counter );
  counter += 1;
}

// these loops accomplish the same thing

for ( var counter = 0; counter < 10; counter +=1 ) {
  document.write( counter );
}
// often the counter variable is 'i' or 'j' normally variables should be named something more descriptive, but because it is onoy being used as a counter this is common

// creates html divs
var html = '';

for ( var i = 1; i <= 10; i += 1 ) {
  html += '<div>' + i + '</div>';
}
document.write(html);
*/


/*`do ... while` Loops

// do while loops will run at least once regardless of the condition
// after that it runs just like a while loop

do {

} while( )


var randomNumber = getRandomNumber (10);
var guess;
var guessCount = 0;
var correctGuess = false;
// this variable is often referred to as a flag

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper ) +1;
 return num;
}

do {
   guess = prompt('I am thinking of a number between 1 and 10. What is it?')
   guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
  }
} while ( ! correctGuess)
  document.write('<h1>You guessed the number!</h1>');
document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);
*/


/*A Closer Look at Loop Conditions

var upper = 10000
var randomNumber = getRandomNumber (upper);
var guess;
var attempts = 0;

function getRandomNumber( upper ) {
 return Math.floor( Math.random() * upper ) +1;
}

while ( guess !== randomNumber ) {
  guess = getRandomNumber( upper );
  attempts += 1;
}
document.write("<p>It took the computer " + attempts + " attempts to guess the number correctly.</p>");
*/


/*What are Loops?

//while loops run over and over as long as the condition is true
while ( ) {

}
// no semi colon at the end

function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}
var counter = 0;
while ( counter < 10 ) {
  var randNum = randomNumber(6);
  document.write(randNum + ' ');
  counter += 1;
}
// as long as the counter variable is less then 10 it will run the loop
*/


/*Introducing Loops, Arrays and Objects*/

// arrays allow you to store lists of information or lots of info
// loops allow you to repeat actions
// objects are a way to store info, and can be used to communicate with some types of databases


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
