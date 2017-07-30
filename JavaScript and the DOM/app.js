// selects the element in index.html
const myHeading = document.getElementById('myHeading');

// take selection and then have browser listen for a click event
myHeading.addEventListener('click', () => {
  // for every click even make the heading red
  myHeading.style.color = 'red';
} );
