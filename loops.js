function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    array.push("I am ${i} strange loops.")
  }
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return 'done'
}

var i = 0;

function incrementVariable() {
  i = i + 1;
}
//
// do {
//   console.log("doo-bee-doo-bee-doo");
//   incrementVariable();
// } while (i < 5);

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 && incrementVariable());
  return array
}
