var message;
var search;
var student;

// prints students info to html div
function print(message) {
  var div = document.getElementById('output');
  div.innerHTML += message;
}

// complies student information into html format
function reportBuilder(student) {
  var report = "<h2> Student Name: " + student.name + "</h2>";
  report += "<p>Track: " + student.track + "</p>";
  report += "<p>Achievments: " + student.acheivments + "</p>";
  report += "<p>Points: " + student.points + '</p>';
  return report;
}

// prompts the user for a name to search, then creates a report and prints it to the page
 while (true) {
  search = prompt("To search for a student's records, please enter the students name. You can enter as many as you'd like once finished type 'quit' to exit and see the records.");
  if ( search.toLowerCase() === 'quit' || search.toLowerCase() === null ) {
    break;
  }
  for ( var i = 0; i < students.length; i += 1 ) {
    student = students[i];
    if ( student.name === search ) {
      message = reportBuilder(student);
      print(message);
      break;
    } //else {
      //search = prompt("That student isn't in our records, please enter a //different student name.");
    //}

  }
}
