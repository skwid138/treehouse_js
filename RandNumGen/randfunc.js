/*
This app should ask the user for 2 numbers
determine which is lower and which is higher
calculate a random number within the range between them
output the number to the user
*/

function randNum (lowNum, highNum) {
  return Math.floor(Math.random() * (highNum - lowNum + 1) + lowNum;
}

alert('The following prompts will ask for two numbers then generate a random number within that range.')

//collects numbers and converts the string to an int
var random1 = prompt ("Please enter a number.");
var random2 = prompt ("Please enter a number.");
random1 = parseInt(random1);
random2 = parseInt(random2);

// sorts the numbers into low and high based on their value
// and creates new variables
if (random1 > random2) {
  var low = random2;
  var high = random1;
} else {
  var low = random1;
  var high = random2;
}

// provide user with random number by calling the function
alert('Your random number is ' + randNum(low, high));
