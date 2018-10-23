var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('Good example of result');
  }, 300);
});

promise1.then(function(value) {
  console.log(value);
});


// Lets do an api call but first install NPM 
