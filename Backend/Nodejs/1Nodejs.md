## Q. Node js is single threaded or multi-threaded? How can we make node application multi threaded?
- Node.js is single-threaded, but that doesn’t mean you can’t take advantage of multi-threading. 
- The Node.js runtime uses a single main thread for the event loop but utilizes additional worker threads for performing tasks like I/O operations asynchronously. 
- This way, the main thread can continue executing JavaScript code, not having to wait for tasks like file reading or data fetching to complete. 
- This feature is particularly useful for tasks like CPU-bound computations, image processing, or intensive data manipulation, where parallel processing can improve performance without blocking the event loop.

**This way we can achieve multithreading in node js.**

```jsx
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
    // This code runs in the main thread
    const worker = new Worker(__filename, {
        workerData: { input: 10 }
    });

    worker.on('message', (result) => {
        console.log('Result from worker:', result);
    });

    worker.on('error', (error) => {
        console.error('Error in worker:', error);
    });
} else {
    // This code runs in the worker thread
    const { input } = workerData;

    // Simulating a CPU-bound task (CPUIntensiveFunction factorial)
    const value = CPUIntensiveFunction(input);

    // Sending the result back to the main thread
    parentPort.postMessage(value);
}

function CPUIntensiveFunction(n) {
    for (let i = 0; i < 10000000000; i++) {

    }
    return input
}

/* 
- The main thread creates a new worker using the Worker constructor, passing the filename (__filename) and workerData as options. 
  This data ({ input: 10 }) is sent to the worker thread.
- The worker thread performs a CPU-bound task, calculating the factorial of the input number received from the main thread (input: 10 in this case).
- Once the worker thread has completed the task, it sends the result back to the main thread using parentPort.postMessage().
- The main thread listens for messages from the worker thread using worker.on('message', ...), and when it receives the result, it logs it to the console.
- This way, the CPU-intensive task (calculating the factorial) is offloaded to a separate thread, allowing the main thread to remain responsive 
  and handle other tasks concurrently.

*/
```

## Q. Why node js is single threaded application?
The single thread doesn't require communication between threads. it shares the same memory that's why we can get a quicker response. 

**limitations:**
- Using a single core of processor for all tasks is not good because it may block our main thread.   
- In node js we cannot perform CPU intensive tasks like video editing, high graphics the game. 


## Q. What is middleware and how it works? 
- Middlewares are function which having access of req object and res object.
- It is used to perform task on req object or res object.
- It can modify req and response, ending request-response cycle, calling next middleware function.
- middlewares are used for authentication, error handling, 

```jsx

// Request middleware
app.use((req, res, next) => {
    console.log('Request received:', req.method, req.url);
    next(); // Call next to pass control to the next middleware or route handler
});

// Route handler
app.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

// Response middleware
app.use((req, res, next) => {
    // Modify response headers
    res.setHeader('X-Powered-By', 'Express');
    next(); // Call next to pass control to the next middleware or route handler
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
});

```

## Q. Is middleware related with request only or I can use it with response also ?
- NO, middlewares can be modified both request object and response object. 
- middlewares are used for logging, authentication, error handling, response processing.
there are two types of middlewares.

**Request Middleware:**
- It executed before the final route handler is called.
- used for parsing request bodies, validating input, authenticating users, and handling CORS headers. e.g above

**Response Middleware:**
- It executed after the final route handler has sent a response.
- used for modifying response headers, transforming response data, compressing response bodies, or logging response details.


## Q. What is authentication and authorization? 
**Authentication**
- Authentication is an process to verify identity of user to access application.
- this involves user provides credentials(username and password). so we can ensure that users are who they claim to be before granting them access to protected resources.
- common Authentication methods involves 
   1. username password authentication.
   2. using JWT.

**Authorization**
- Authorization is a process of determination of user has permission to access specific resource.
- After authentication node js application ensures that the specific resource has only allowed to authorized user.
- This method involves role base authorization like admin/user.


## Q. What are child processes in node js?
Normally, NodeJS does work with one thread at a time, However, when there’s a lot of work to be done, we use the child_process module to create additional threads. These extra threads can talk to each other using a built-in messaging system.

There are several ways to create child processes in Node.js:

**child_process.exec:**
 used to execute shell commands asynchronously.

 ```jsx
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
 ```

**child_process.execFile:**
 Similar to child_process.exec, but it directly executes a file instead of using a shell.

 ```jsx
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

 ```


**child_process.spawn:**
This method spawns a new process using the provided command. It allows communication with the child process using standard input/output streams.

```jsx
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

 ```


**child_process.fork:**
child_process.fork() is a variant of child_process.spawn() allowing communication between parent and child via send(). 
It facilitates the isolation of compute-heavy tasks from the main event loop, but numerous child processes can impact performance due to each having its own memory.

```jsx
//childForFork.js
process.on('message', (message) => {

    for (let i = 0; i < 10000000000; i++) {

    }
    console.log('Message from parent:', message);
    process.send({ Hi: 'Universe' });
});

// fork.js


const { fork } = require('child_process');

const child = fork('./childForFork.js');

child.on('message', (message) => {
    console.log('Message from child:', message);
});

child.send({ hello: 'world' });

 ```


These child processes can run JavaScript code or execute shell commands, and they operate independently of each other and the main Node.js process. They are useful for tasks such as parallelizing CPU-intensive operations, offloading blocking I/O operations, or running separate parts of an application in isolation.


## Q. Difference between spawn and fork

|  Spawn  |  Fork  |
|---------|--------| 
|general purpose of this child method for launching any new process. It is suitable for executing shell commands and interact with their streams.|specialized method to creating new Node.js process. It is optimized for communication between parent and child process via inter-process-communication.
|Running external commands, shell scripts, or any process where you need real-time data streaming.|Running separate Node.js scripts that need to communicate with the parent process, such as forking multiple instances of a Node.js application. 
|communication is limited to standard input/output streams.|Provides an Inter-Process-Communication channel for message passing between parent and child processes.
|Generally better for heavy I/O-bound tasks due to real-time streaming capabilities.| Better for tasks requiring close coordination between Node.js processes, such as shared state management or complex inter-process communication.
|e.g  Real-Time Data Processing, Running a Long-Running Command.|eg  CPU-intensive tasks to separate processes to keep the main event loop responsive.


## Q. What is different between require() and import in node js?
 |  Required  |  Import |
 | ---------- | ------- |
 | Uses CommonJS syntax. Modules are loaded synchronously. |  allows dynamic loading of modules | can be called within functions |
 | Uses ECMAScript (ES6) syntax. Modules are loaded asynchronously. |  statically analyzed at compile-time | must be used at the top level of a module |

