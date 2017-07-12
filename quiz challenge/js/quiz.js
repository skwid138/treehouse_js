/*
Quiz App using 2D arrays
Asks user a series of questions
Lets user know how many they got correct
Shows user the correct answers, score
*/

// prints to screen
function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

// writes the html to list out the questions, user's answers, correct asnwers and score
function ask( ) {
  var listHTML = '<ol>';
  var listScore = '<h2><b>Your score is: ';
  var score = 0;
  // ask the user questions, compares their input to the correct answer and increases their score if needed then adds html to the listHTML variable
  for ( i = 0; i < questions.length; i += 1 ) {
    var answer = prompt( questions[i].question ).toLowerCase();
    if ( answer === questions[i].answer ) {
      score += 1;
      listHTML += '<li> Your answer <b>' + answer + '</b> is <b>Correct!</b> - ' + questions[i].question + ' is <b>' + questions[i].answer + '</b>' + questions[i].moreInfo + '</li>';
    } else {
      listHTML += '<li> Your answer <b>' + answer + '</b> is <b>Incorrect!</b> - ' + questions[i].question + ' is <b>' + questions[i].answer + '</b>' + questions[i].moreInfo + '</li>';
    }
  }
  //In order for the score variable's value to show properly I had to list it here
  // combined the score string and html strings
  // wrote all the html to the page
  listScore += score + '/' + questions.length + '</b></h2>';
  listHTML = listScore.concat(listHTML);
  print(listHTML);
}

// 2D array with questions, answers, and more details if they were false
var questions = [
  {
      question : 'The Milky Way is likely a barred spiral galaxy.',
      answer : 't',
      moreInfo : ''
  },
  {
      question : 'Mach 1 refers to the speed of light.' ,
      answer : 'f',
      moreInfo : '<br>Mach 1 is the ratio of the speed of a body to the speed of SOUND in the surrounding medium.'
  },
  {
      question : 'Red light has a longer wave length then violet light.',
      answer : 't',
      moreInfo : ''
  },
  {
      question : 'The Opportunity rover on Mars has driven over 50 miles.',
      answer : 'f',
      moreInfo : '<br>As of January 2017 Opportunity has driven just over 27 miles.'
  },
  {
      question : 'During the last ice age CO2 levels in the atmosphere were around 200ppm (parts per million). March of 2017 the CO2 levels in the atmosphere surpassed 400ppm for the first time in at least 400,000 years.',
      answer : 't',
      moreInfo : ''
  }
];

alert("The following are True or False questions, please enter 't' for true or 'f' false.");

ask();
