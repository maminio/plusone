function doNothing() {
  console.log('Doing Nothing');
  return null;
}

// doNothing();


// var runNow = function () {
//   console.log('No name function');
// }
//
// runNow();


//
//
function turnIntoPickle(character) {
  // return 'pickle' + character;
  return `pickle${character}`;
}



// console.log(turnIntoPickle('Rick'))

//
//
function turnIntoPickleWithDefault(character = 'wayne') {
  return `pickle${character}`;
}
// console.log(turnIntoPickleWithDefault());

//
// ======================================================================
function square (number) {
  return number * number;
};


function factorial(n) {
  /*

  if(n < 2){
    return 1;
  }
  return n * factorial(n - 1);

  */
  return n < 2 ? 1 : n * factorial(n - 1);
};



function doMatch(number) {
  return square(factorial(number));
}

// console.log('doMatch', doMatch(50));






var random = true



var randomObject = {
  random1: 'String element of this object',
}

console.log('BEFORE ===>',randomObject);
console.log('\n');
console.log('\n');
randomObject.random1 = true;

console.log('AFTER ===>',randomObject);
