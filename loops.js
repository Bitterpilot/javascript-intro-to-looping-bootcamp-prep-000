function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    array = array.push("I am "i" strange loops.")
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
