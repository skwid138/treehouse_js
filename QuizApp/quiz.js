/*
Quiz Game
Will prompt the user to answer a series of
multiple choice questions, display results
at the end and provide the user a rank.
*/

alert ( 'The following is a 5 question multiple choice quiz. After the questions have been answered you will be shown your results as well as your rank.' );

// Prompt user for answers
// var answer1 = 'C';
var input1 = prompt( 'What is the lightest element on the Periodic Table of Elements?\nA) Helium\nB) Oxygen\nC) Hydrogen' );
// var answer2 = 'B';
var input2 = prompt( "What is the earth's core made of?\nA) Lead and Steel\nB) Iron and Nickle\nC) Titanium" );
// var answer3 = 'B';
var input3 = prompt( "What is the process of a solid turning directly into a gas?\nA) Adhesion\nB) Sublimation\nC) Ionization" );
// var answer4 = 'A';
var input4 = prompt( "If a rock from space lands on earth's surface what is it called?\nA) Meteorite \nB) Meteoroid\nC) Asteroid ");
// var answer5 = 'A';
var input5 = prompt( "What type of star is our Sun?\nA) Yellow Dwarf\nB) White Dwarf\nC) Yellow Giant" );

/*
Adds score and create's variables with responses
based on correct or incorrect answers
*/
var score = 0
if ( input1 === 'c' || input1 === 'C' ) {
  score += 1;
  var question1 = 'Correct! The lightest element on the Periodic Table is Hydrogen.';
} else {
  var question1 = 'Nice Try! Hydrogen is the lightest element on the Periodic Table.';
}
if ( input2 === 'b' || input2 === 'B') {
  score += 1;
  var question2 = 'Correct! The Earth\'s core is made of an Iron and Nickle alloy.';
} else {
  var question2 = 'Nice Try! Earth\'s core is an Iron and Nickle alloy.';
}
if ( input3 === 'b' || input3 === 'B') {
  score += 1;
  var question3 = 'Correct! Sublimation is the process of a solid skipping it\'s liquid state and turning directly into a gas.';
} else {
  var question3 = 'Nice Try! Sublimation is the process of a solid skipping it\'s liquid state and turning directly into a gas.';
}
if ( input4 === 'a' || input4 === 'A') {
  score += 1;
  var question4 = 'Correct! A meterorite is a small asteroid or large meteoroid that has survived it\'s fiery passage through Earth\'s atmosphere and landed on Earth\'s surface.';
} else {
  var question4 = 'Nice Try! A meterorite is a small asteroid or large meteoroid that has survived it\'s fiery passage through Earth\'s atmosphere and landed on Earth\'s surface.';
}
if ( input5 === 'a' || input5 === 'A') {
  score += 1;
  var question5 = 'Correct! The Sun is a Yellow Dwarf Star.';
} else {
  var question5 = 'Nice Try! The Sun is a Yellow Dwarf Star.';
}

// assigns string to rank based on the number of correct answers
var rank = 'Loser';
if (score === 5 ) {
  rank = 'Gold';
} else if ( score === 4 || score === 3 ) {
  rank = 'Silver';
} else if ( score === 2 || score === 1 ) {
  rank = 'Bronze';
}

//print user results and rank
document.write ('<p>Your final score was ' + score +'/5.</p>\n<p>Your rank is: ' + rank + '</p>');
document.write ( '<p>1.' + question1 + '</p>' );
document.write ( '<p>2.' + question2 + '</p>' );
document.write ( '<p>3.' + question3 + '</p>' );
document.write ( '<p>4.' + question4 + '</p>' );
document.write ( '<p>5.' + question5 + '</p>' );
