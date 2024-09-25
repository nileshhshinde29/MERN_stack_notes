process.on('message', (message) => {

    for (let i = 0; i < 10000000000; i++) {

    }
    console.log('Message from parent:', message);
    process.send({ Hi: 'Universe' });
});
