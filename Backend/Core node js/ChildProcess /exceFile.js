const { execFile } = require('child_process');

execFile('node', ['-v'], (error, stdout, stderr) => {
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

The execFile method is similar to exec, but it directly executes a file without being passed to a shell interpreter (like Bash on Unix/Linux or CMD.exe on Windows).
It's more efficient and secure for running executable files.

*/