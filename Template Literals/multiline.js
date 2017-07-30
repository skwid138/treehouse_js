const fruitList =
  "<ul>" +
    "<li>Kiwi</li>" +
    "<li>Lime</li>" +
    "<li>Pineapple</li>" +
  "</ul>";

  const vegList = `
    <ul>
      <li>Onion</li>
      <li>Tomato</li>
      <li>Carrot</li>
    </ul>
  `;

document.querySelector('.fruits').innerHTML = fruitList;
document.querySelector('.vegetables').innerHTML = vegList;
