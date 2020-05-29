const EventEmitter = require('events');
//Basic event emitter
class MyEmitter extends EventEmitter {}

   const myEmitter = new MyEmitter();
  myEmitter.on('event', () => {
 console.log('an event occurred!');
    });
      myEmitter.emit('event');

//If we want events to be Async in nature


myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously');
  });
});
myEmitter.emit('event', 'a', 'b');

//for emitting event only once

    let m = 0;
    //use on instead of once to emitt many times
    myEmitter.once('event', () => {
    console.log(++m);
    });
    myEmitter.emit('event');
    // Prints: 1
    myEmitter.emit('event');
    // Ignored


    //Printing error emitted events

    myEmitter.on('error', (err) => {
    console.error('whoops! there was an error');
    });
    myEmitter.emit('error', new Error('whoops!'));
    // Prints: whoops! there was an error


    //event emitter in args

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener