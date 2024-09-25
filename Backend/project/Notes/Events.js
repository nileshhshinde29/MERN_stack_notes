/* 


# Event: 
-node js has inbuilt module i.e event.
- where u can create, fire, and listen your own event.

most use methods:   
- once(): triggered only once.
- eventNames():   console.log(eventEmitter.eventNames())  Get all the active event names.
- addListener() : same as a .on()
- removeListener() : eventEmitter.removeListener("myEvent", func1); used to remove listener.




 */

var events = require('events');
var eventEmitter = new events.EventEmitter();

function myEventHandler() {
    console.log('I hear a scream!');
}

eventEmitter.on('scream', myEventHandler);
eventEmitter.on('scream', () => console.log('hii'));

eventEmitter.emit('scream');
eventEmitter.emit('scream');



//*****************

const syncFunction = () => {

    eventEmitter.on('myEvent', (data) => {
        console.log(data);
    });

    console.log('Statement A');
    eventEmitter.emit('myEvent', 'Statement B');
    console.log("Statement C");
}

syncFunction() // its prove that event emitters are synchronously executed.


//********************

const order = () => {

    const eventEmitter = new EventEmitter();

    eventEmitter.on('myEvent', (data) => {
        console.log(data, '- FIRST');
    });

    console.log('Statement A');

    eventEmitter.on("myEvent", data => {
        console.log(data, '- SECOND');
    });

    eventEmitter.emit('myEvent', 'Emitted Statement');

    console.log("Statement B");
}