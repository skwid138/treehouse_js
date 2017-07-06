/*
This app should ask the user for 2 numbers
determine which is lower and which is higher
calculate a random number within the range between them
output the number to the user
*/

function randNum (lowNum, highNum) {
  // generates random number using the users input
  return Math.floor(Math.random() * (highNum - lowNum + 1) + lowNum);
}

function userInput () {
  //collects numbers and converts the string to an int
  input1 = parseInt(prompt ("Please enter a number."));
  input2 = parseInt(prompt ("Please enter a number."));

  // checks if both numbers are ints
  // returns an error if they are not
  // collects user input again
  if ( isNaN(input1) || isNaN(input2) ) {
    throw new Error('Please enter numbers only. i.e., 1,2,3...');
  }

  // sorts the numbers into low and high based on their value
  // and creates new variables
  if ( input1 > input2 ) {
    low = input2;
    high = input1;
  } else {
    low = input1;
    high = input2;
  }

}
var input1 = 0;
var input2 = 0;
var low = 0;
var high = 0;

alert('The following prompts will ask for two numbers then generate a random number within that range.');

userInput();

// provide user with random number by calling the function
alert('Your random number is ' + randNum(low, high));
