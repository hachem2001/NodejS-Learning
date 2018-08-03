// const stuff = require('./stuff');
//
// console.log(stuff.countlen(["hello", "hi", 'hellooo']));
// console.log(`PI is equal to ${stuff.PI}\.\.\.`);
// console.log(stuff.adder(5, 3));

const events = require('events');
const util = require('util');
// var myEmitter = new events.EventEmitter();
//
// myEmitter.on('someEvent', function(mssg){
//   console.log(mssg);
// })
//
// myEmitter.emit('someEvent', 'The event was emitted');

var Person = function(name) {
  this.name = name;
}

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu= new Person('ryu');
var people = [james, mary, ryu];

people.forEach(function(person){
  person.on('speak', function(msg){
    console.log(`${person.name} said ${msg}`);
  });
})
var myname = 'Yimo'
james.emit('speak', `Hey ${myname}! How are you doing right now?`);
mary.emit('speak', 'This is pretty fun');
