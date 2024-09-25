const { fork } = require('child_process');

const child = fork('./childForFork.js');

child.on('message', (message) => {
    console.log('Message from child:', message);
});

child.send({ hello: 'world' });
