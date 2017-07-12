var person = {
  name : 'Hunter',
  country : 'US',
  age : 25,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

// This worked, but I noticed in the challenges after it wanted me to use "var" before prop I also noticed in atom my addon is saying to add var as well
for ( prop in person) {
console.log(prop, ': ', person[prop]);
}

/*
var person = {
  name : 'Hunter',
  country : 'US',
  age : 25,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = '<p>Hello. My name is ' + person.name + '.</p>';
message += '<p>I live in the ' + person.country + '.</p>';
person.name = 'Reggie Marcus'
message += '<p>I wish my name was ' + person.name + '.</p>';
person.age += 1;
message += '<p>This year I will be my ' + person.age + 'th birthday.</p>';
message += '<p>I have ' + person.skills.length + ' skills: ' ;
message += person.skills.join(', ') + '.</p>';
print(message);
*/
