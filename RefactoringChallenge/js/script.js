function num () {
  return Math.floor(Math.random() * 256 );
}

for (i = 0; i < 10; i += 1) {
  var rgb = 'rgb(' + num() + ',' + num() + ',' + num() + ')';
  document.write( '<div style="background-color:' + rgb + '"></div>' );
}
