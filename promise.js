var promise1 = function (){
  return new Promise(function (resolve, reject){
    setTimeout(function(){
        reject(" YAY we resolved ")
    },3000)
  });
}



promise1().then(function resolveOfPromise(value) {
  console.log(value);
}).catch(function(error) {
  console.log('ERROR===> ',error);
})


// console.log('BEFORE WHILE')
// var counter = 0
// while (counter < 10000000000){
//   counter += 1;
//   var waste = 137 * 87;
// }
// console.log('AFTER WHILE')


// Lets do an api call but first install NPM
