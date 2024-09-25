const { exec } = require('child_process');

exec('ls -l', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }
    console.log(`Stdout: ${stdout}`);
});

exec('xdg-open https://www.youtube.com/watch?v=ZMb10M8wByE', (error, stdout, stderr) => { // for windows replace xdg-open to start
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }
    console.log(`Stdout: ${stdout}`);
});


/* 
The exec method runs a command in a shell and buffers the output. 
It's suitable for running short-lived commands that return small amounts of data.
In this example, exec runs the ls -l command, which lists files in the current directory. 
instated of "ls-l" if we used long lived command like find / it will gives error.

*/