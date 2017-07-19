// prints students info to html div
function print(message) {
  var div = document.getElementById('output');
  div.innerHTML += message;
}

//loops through the objects to create html text that prints to the page
for ( var i = 0; i < students.length; i += 1 ) {
  var html = "<h2> Student Name: " + students[i].name + '</h2> <br><p>Track: ' + students[i].track + '<br>Achievments: ' + students[i].acheivments + '<br>Points ' + students[i].points + '</p>'  ;
  print(html);
}
