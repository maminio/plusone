function doNothing() {
  console.log('Doing Nothing');
  return null;
}


function turnIntoPickle(character) {
  return `pickle${character}`;
}


function turnIntoPickleWithDefault(character = 'wayne') {
  return `pickle${character}`;
}


function square (number) {
  return number * number;
};


function factorial(n) {
  return n < 2 ? 1 : n * factorial(n - 1);
};

function doMatch(number) {
  return square(factorial(number));
}

console.log('doMatch', doMatch(50));
