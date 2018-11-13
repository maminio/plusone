// Global object

console.log('========= Global this =========');
console.log(this);
console.log('===============================');


// function myScope(){
//   console.log('========= MyScope this =========');
//   console.log(this);
//   console.log('===============================');
// }
//
//
// myScope()



function myScope(){
  this.bucket = {
    someData: [ 'all bitcoin data here' ]
  }
}

// Bind it with this
myScope()


// console.log('this',this);




var realMadrid = {
  city: 'Madrid',
  players: ['Benzema', 'Bale', 'Marcelo', 'Ramos'],
  playGame: function () {
    return Math.ceil((Math.random()*1000)) % 2 === 0
  },
  sendOffRamos: function () {
    console.log('sendOffRamos Scope',this);
    players.pop(this.players.indexOf('Ramos'))
    return this.players;
  },
  // sendOffRamos: function () {
  //   this.players.pop(this.players.indexOf('Ramos'))
  //   return this.players;
  // }
}

// realMadrid.sendOffRamos()


// Arrow Functions

// const myScope = ()=>{
//   console.log('========= MyScope this =========');
//   console.log(this);
//   console.log('===============================');
// }
//
// myScope()
