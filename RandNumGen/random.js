var random1 = prompt ("Please enter the lower of two numbers.");
var random2 = prompt ("Please enter the higher of two numbers.");
random1 = parseInt(random1);
random2 = parseInt(random2);
console.log("Here's the user's input", random1, random2);
var difference = Math.floor(random2 - random1);
console.log('Difference = ', difference);
var result = Math.floor(Math.random() * difference) + random1;
/*
This should take the larger int and subtract the smaller
then create a random number in that range
finlly adding the lower number, to create starting point
*/
alert('Your random number is ' + result);
