const { spawn } = require('child_process');

const child = spawn('ls', ['-l']);

child.stdout.on('data', (data) => {
    console.log(`Stdout: ${data}`);
});

child.stderr.on('data', (data) => {
    console.error(`Stderr: ${data}`);
});

child.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
});


/* 

The spawn method launches a new process with a given command and arguments. 
It's suitable for long-running processes and handling large outputs, as it streams the output.

*/