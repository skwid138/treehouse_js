// selects the element in index.html
// document is the entire page, so this searches the entire webpage for the id
const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

// take selection and then have browser listen for a click event
myButton.addEventListener('click', () => {
  // for every click even make the heading red
  myHeading.style.color = myTextInput.value;
});
