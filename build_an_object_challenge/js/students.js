// prints students info to html div
function print(message) {
  var div = document.getElementById('output');
  div.innerHTML += message;
}

// student records
var students = [
  {
    name : 'Hunter',
    track : 'Full Stack Development',
    acheivments : ['JS Basics', 'HTML Basics', 'CSS Basics'],
    points : 2892
  },
  {
    name : 'Becky',
    track : 'SQL',
    acheivments : ['Smart', 'Beutiful', 'Driven'],
    points : 5000000000
  },
  {
    name : 'Nebuchadnezzar',
    track : 'Sleep City',
    acheivments : ['Big', 'Hairy', 'Audacious'],
    points : 138
  },
  {
    name : 'Banjo',
    track : 'Lord of Dogtown',
    acheivments : ["Wiggle Butt", "Lick Face", "Fast hole digger of 2017"],
    points : 31
  },
  {
    name : 'Princess Lola',
    track : 'Barkocolyps',
    acheivments : ['Dance of Dog', 'Belly Rub Champion', 'SBA Award 2014, 2015, 2016, 2017'],
    points : 86
  }
];

//loops through the objects to create html text that prints to the page
for ( var i = 0; i < students.length; i += 1 ) {
  var html = "<h2> Student Name: " + students[i].name + '</h2> <br><p>Track: ' + students[i].track + '<br>Achievments: ' + students[i].acheivments + '<br>Points ' + students[i].points + '</p>'  ;
  print(html);
}
