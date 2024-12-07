const EventEmitter = require('events')
const eventEmitter = new EventEmitter();

eventEmitter.on('myEvent', () => {
    console.log('Data Received');
});

// publish an event
eventEmitter.emit('myEvent');

eventEmitter.on("myEvent", () => {
    console.log("Listener 2");
});

//+++++++++++++++++++++++++++

eventEmitter.on('myEvent1', () => {
    console.log('first called');
});


eventEmitter.on("myEvent1", () => {
    console.log("second called");
});

// publish an event
eventEmitter.emit('myEvent1');

//+++++++++++++++++++++++++++

eventEmitter.on('myEvent2', (data) => {
    console.log(data, '- FIRST');
});

console.log('Statement A');

eventEmitter.on("myEvent2", data => {
    console.log(data, '- SECOND');
});

eventEmitter.emit('myEvent2', 'Emitted Statement');

console.log("Statement B");

//+++++++++++++++++++++++++++++++

/* 
most used emmiters

  once()               will be triggered only once.
  eventNames()         Get all the active event names.  
  addListener()        It’s exactly the same as on(). It’s just an alias for event.on().
  removeListener()      This is used to remove a listener.   
  removeAllListeners()  This is used to remove all active event listeners from an EventEmitter instance.
 */