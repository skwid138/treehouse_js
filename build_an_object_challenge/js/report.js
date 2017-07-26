// prints students info to html div
function print(message) {
  var div = document.getElementById('output');
  div.innerHTML += message;
}

function reportBuilder(name) {
  var report = "<h2> Student Name: " + students[i].name + "</h2>";
  report += "<p>Track: " + students[i].track + "</p>";
  report += "<p>Achievments: " + students[i].acheivments + "</p>";
  report += "<p>Points: " + students[i].points + '</p>';
  return report;
}

var html;
var search;

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
