// Lets create a new object

var jack = new Object();

jack.firstName = "Jack";
jack.lastName = "Barham";
jack.age = 23;

// console.log('======== Jack ========')
// console.log(jack)
// console.log('=======================')
// console.log('\n');
// console.log('\n');

//
// var ana = new Object({
//   firstName: "Ana",
//   lastName: "Dozd",
// });

// console.log('======== ana ========')
// console.log(ana)
// console.log('=======================')


//
// /*
//   * JS is for lazy people like me
// */
//
// var trump = {
//   firstName: 'Donald',
//   lastName: 'Trump',
//   age: 71,
// };
// //
// console.log({ trump });
//
//
// /*
//   * Objects chaining  ( JS loves it  )
// */
//
var kcl =  {
  name: 'Kings College London',
  campuses: {
    bushHouse: {
      address: 'Bush House, London, UK',
      open: true,
      departmants: 'informatics',
    }
  }
}
//
//
//
console.log('KCL Address',kcl.campuses.bushHouse.address);
//
console.log('University Name:',kcl['name']);
//
//
//
//
//
//
//
// // ============= MORE ADVANCED ================
//
// /*
//   * Arrays can contain anything
// */
//
//
// var realMadrid = {
//   city: 'Madrid',
//   players: ['Benzema', 'Bale', 'Marcelo', 'Ramos'],
//   playGame: function () {
//     return Math.ceil((Math.random()*1000)) % 2 === 0
//   },
//   sendOffRamos: function () {
//     this.players.pop(this.players.indexOf('Ramos'))
//     return this.players;
//   }
// }
//
//
//
// console.log(realMadrid.sendOffRamos());
