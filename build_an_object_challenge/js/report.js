// prints students info to html div
function print(message) {
  var div = document.getElementById('output');
  div.innerHTML += message;
}

 while (true) {
  var name = prompt("To search for a student's records, please enter the students name. Once finished type 'quit' to exit").toLowerCase();
  if ( name === 'quit' || name === null ) {
    break;
  } else {
      for ( var i = 0; i < students.length; i += 1 ) {
        if ( name === students[i].name.toLowerCase()) {
          var html = "<h2> Student Name: " + students[i].name + '</h2> <br><p>Track: ' + students[i].track + '<br>Achievments: ' + students[i].acheivments + '<br>Points ' + students[i].points + '</p>'  ;
          print(html);
        }
      };
  };
};
