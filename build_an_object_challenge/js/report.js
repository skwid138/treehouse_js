var html = '';
var search;

// prints students info to html div
function print(message) {
  var div = document.getElementById('output');
  div.innerHTML += message;
}

// complies student information into html format
function reportBuilder(name) {
  var report = "<h2> Student Name: " + students[i].name + "</h2>";
  report += "<p>Track: " + students[i].track + "</p>";
  report += "<p>Achievments: " + students[i].acheivments + "</p>";
  report += "<p>Points: " + students[i].points + '</p>';
  return report;
}

// prompts the user for a name to search, then creates a report and prints it to the page
 while (true) {
  search = prompt("To search for a student's records, please enter the students name. You can enter as many as you'd like once finished type 'quit' to exit and see the records.");
  search = search.toLowerCase();
  if ( search.toLowerCase() === 'quit' || search.toLowerCase() === null ) {
    break;
  } else {
      for ( var i = 0; i < students.length; i += 1 ) {
        if ( students[i].name === search ) {
          html = reportBuilder(search);
          print(html);
        }
      }
  }
}
