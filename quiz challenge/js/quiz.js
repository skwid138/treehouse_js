/*
Quiz App using 2D arrays
Asks user a series of questions
Lets user know how many they got correct
Shows user the correct answers, score
*/

// prints to screen
function print(message) {
  document.write(message);
}

// writes the html to list out the results of the quiz
function printResults( questions ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < questions.length; i += 1) {
    // this needs to be edited, I pulled this from the playlist project code
    listHTML += '<li>' + questions[i][0] + ' by ' + questions[i][1] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

// ask the user questions, compares their input to the correct answer and increases their score if needed
for ( i = 0; i < questions.length; i += 1 ) {
  var answer = prompt( questions[i][0] );
  answer = answer.toLowerCase;
  if ( answer === questions[i][1] ) {      score += 1;
    }
}


var score = 0;
var message = '';

// 2D array with questions, answers, and more details if they were false
var questions = [
  ['The Milky Way is likely a barred spiral galaxy.' , 't'],
  ['Mach 1 refers to the speed of light.' , 'f', 'Mach 1 is the ratio of the speed of a body to the speed of SOUND in the surrounding medium.'],
  ['Red light has a longer wave length then violet light.' , 't'],
  ['The Opportunity rover on Mars has driven over 50 miles.' , 'f', 'As of January 2017 Opportunity has driven just over 27 miles.'],
  ['During the last ice age CO2 levels in the atmosphere were around 200ppm (parts per million). March of 2017 the CO2 levels in the atmosphere surpassed 400ppm for the first time in at least 400,000 years.' , 't']
]


alert("The following are True or False questions, please enter 'T' for true or 'F' false.");


ask();

print(score);