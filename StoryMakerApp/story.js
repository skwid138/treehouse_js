alert("Please enter each word the following prompts ask for.");
/*
Once upon a time, there was a dog named [PromperNoun1].
She was the princess of all things and had the most [Adjective1] coat.
If she ever saw any [PluralNoun1] or [PluralNoun2] they were sure to be caught.
One day a new doggo named [ProperNoun2] came to Becky's Palace.
He was a little bit [Adjective2] and just wanted to [Verb1] all the time.
At first this displeased the princess, but after [Number1] days she finally began to enjoy [Verb2] his face while he made [Adjective3] sounds.
*/
var questions = 10;
questions -= 1;
var questionsLeft = ' [' + questions + ' questions left]';
var ProperNoun1 = prompt("Please enter a PROPER NOUN." + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var Adjective1 = prompt("Please enter an ADJECTIVE." + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var PluralNoun1 = prompt("Please enter a PLURAL NOUN." + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var PluralNoun2 = prompt("Please enter another PLURAL NOUN." + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var ProperNoun2 = prompt("Please enter a new PROPER NOUN." + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var Adjective2 = prompt("Please enter an ADJECTIVE." + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var Verb1 = prompt("Please enter a VERB." + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var Number1 = prompt("Please enter a NUMBER." + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var Verb2 = prompt("Please enter a VERB." + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var Adjective3 = prompt("Please enter an ADJECTIVE." + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

alert("All your input has been received, following this prompt you will be able to read your story.");

var Sentence1 = 'Once upon a time, there was a dog named ' + ProperNoun1 + '.';
var Sentence2 = ' She was the princess of all things and had the most ' + Adjective1 + ' coat.';
var Sentence3 = ' If she ever saw any ' +  PluralNoun1 + ' or ' + PluralNoun2 + ' they were sure to be caught.';
var Sentence4 = ' One day a new doggo named ' + ProperNoun2 + ' came to Becky\'s Palace.';
var Sentence5 = ' He was a little bit ' + Adjective2 + ' and just wanted to ' + Verb1 + ' all the time.';
var Sentence6 = ' At first this displeased the princess, but after ' + Number1 + ' days she finally began to enjoy ' + Verb2 + ' his face while he made ' + Adjective3 + ' sounds.';

document.write (Sentence1, Sentence2, Sentence3, Sentence4, Sentence5, Sentence6);
