function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  console.log("I am " + i + " strange loops.");
  }
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return 'done'
}

function doWhileLoop(array) {
  var i = 0;

  function incrementVariable() {
    i = i + 1;
  }

  do {
    array.pop();
  } while (array.length > 0 && incrementVariable());

  return array
}
