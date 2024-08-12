
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
<br>

## Q. Why node js is single threaded application?
The single thread doesn't require communication between threads. it shares the same memory that's why we can get a quicker response. 

**limitations:**
- Using a single core of processor for all tasks is not good because it may block our main thread.   
- In node js we cannot perform CPU intensive tasks like video editing, high graphics the game. 

<br>

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
<br>

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

<br>

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

<br>

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

<br>

## Q. Difference between spawn and fork

|  Spawn  |  Fork  |
|---------|--------| 
|general purpose of this child method for launching any new process. It is suitable for executing shell commands and interact with their streams.|specialized method to creating new Node.js process. It is optimized for communication between parent and child process via inter-process-communication.
|Running external commands, shell scripts, or any process where you need real-time data streaming.|Running separate Node.js scripts that need to communicate with the parent process, such as forking multiple instances of a Node.js application. 
|communication is limited to standard input/output streams.|Provides an Inter-Process-Communication channel for message passing between parent and child processes.
|Generally better for heavy I/O-bound tasks due to real-time streaming capabilities.| Better for tasks requiring close coordination between Node.js processes, such as shared state management or complex inter-process communication.
|e.g  Real-Time Data Processing, Running a Long-Running Command.|eg  CPU-intensive tasks to separate processes to keep the main event loop responsive.

<br>

## Q. What is different between require() and import in node js?
 |  Required  |  Import |
 | ---------- | ------- |
 | Uses CommonJS syntax. Modules are loaded synchronously.  | Uses ECMAScript (ES6) syntax. Modules are loaded asynchronously.|
 | can be called within functions | must be used at the top level of a module |
 |imported from CommonJS module, eg module.exports| need to export directly|

 <br>

 # Q.23 Common nodejs module system and es6 module systems.

|common js | es6 module|
|-----|-----|
| in common js used required() to import, and module.export to export | In Es6 module directly import and export used.|
| load module synchronously | load module asynchronously|
| good for server side technology because of server side rendering but inefficient client side technology| good for client side technology|
|in node js mostly they are used and also used with tools thats supports node js | this can be used in both client and server side |
 
 ## what are different types of error codes in node js ?
 1. **System Errors**:
    - System errors are related to operating system-level issues and are commonly encountered during file system operations, network operations, and process management.
    - Common system error codes include:
        - `EACCES`: Permission denied
        - `ENOENT`: No such file or directory
        - `EEXIST`: File already exists
        - `EADDRINUSE`: Address already in use
        - `ECONNREFUSED`: Connection refused
        - `ECONNRESET`: Connection reset by peer
        - `ETIMEDOUT`: Operation timed out
2. **HTTP Status Codes**:
    - HTTP status codes are used to represent the result of HTTP requests and responses. While not specific to Node.js, HTTP status codes are commonly encountered when working with HTTP servers and clients.
    - Common HTTP status codes include:
        - `200`: OK
        - `404`: Not Found
        - `500`: Internal Server Error
        - `403`: Forbidden
        - `401`: Unauthorized
        - `429`: Too Many Requests
3. **Database Errors**:
    - Database-related errors occur when performing database operations such as connecting to a database, executing queries, or handling transactions.
    - Common database error codes depend on the database system being used and may include codes such as:
        - `ER_ACCESS_DENIED_ERROR`: Access denied for user
        - `ER_NO_SUCH_TABLE`: Table does not exist
        - `ER_DUP_ENTRY`: Duplicate entry for key
        - `ER_PARSE_ERROR`: SQL syntax error
        - `ER_LOCK_WAIT_TIMEOUT`: Lock wait timeout exceeded
4. **Custom Error Codes**:
    - In addition to built-in error codes, developers may define custom error codes to represent application-specific error conditions.
    - Custom error codes allow developers to define and handle errors that are specific to their application's domain or requirements.
    - Custom error codes are typically documented in the application's documentation or error handling guidelines.

<br>

## Q. difference between npm and yarn? 
**NPM**
- Npm is comes with node js installation.
- compare to yarn npm is slow. 
- npm installs dependencies sequentially, it will takes longer time especially when nested dependencies.
- large community support compared to yarn.

**Yarn**
- Yarn is need to be install manually. 
- yarn is comparatively fast.
- Yarn install dependencies concurrently, can fetching and installing multiple dependencies simultaneously.
- less community support compared to npm.

<br>

## Q. tell me something about package.json file 
- The `package.json` file is a crucial component in Node.js projects.
- It contains metadata about the project, its dependencies, scripts, and other configuration details. 
- It's a JSON (JavaScript Object Notation) file located at the root of the project directory.
<br>

## Q. What is express?
- It is a web application framework for node js, that provides features for building web and mobile applications. 
- allows handling of routing, middlewares, error handling, HTTP requests,including GET, POST, and other types.

<br>

## Q. What are the three modules of node js?
1. **Core Modules**: These are built-in modules that come with Node.js installation. E.g HTTP, FS, Path, Util 

2. **Third-Party Modules**: These are modules created by the Node.js community and are available through the npm (Node Package Manager) registry. eg express, mongoose

3. **Custom Modules**: These are modules created by developers for specific functionalities within their applications.
<br>

## Q. What is a blocking code?
If application has waits for some i/o operations in order to complete its further execution. Then the code which responsible for waiting is known as blocking code.
<br>

## Q. What is Chaining in Node? 
Chaining involves connecting multiple stream operations together in a sequence.
Here's an example where we read data from a file, transform it, and then write it to another file using chaining:

```jsx
const fs = require('fs');
const zlib = require('zlib');

// Chaining method calls for streams and event handling
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip()) // Compressing the data
  .pipe(fs.createWriteStream('output.txt.gz')) // Writing the compressed data to a file
  .on('finish', () => { // Handling the 'finish' event
    console.log('File successfully compressed.');
  });

```
<br>

## Q. What is piping?
Piping is a specific method available on Node.js streams that connects the output of one stream directly to the input of another stream.
Here's an example where we copy the contents of one file to another using piping:

```jsx
const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('input.txt');
const gzip = zlib.createGzip();
const writeStream = fs.createWriteStream('output.txt.gz');

// Using .pipe() without chaining
readStream.pipe(gzip);
gzip.pipe(writeStream);

writeStream.on('finish', () => {
  console.log('File successfully compressed.');
});

```
<br>

## Q. What is Libuv node js?
Js is single threaded, blocking and synchronous language. 
To make async programming we need Libuv.   

<img src="https://github.com/nileshhshinde29/MERN_stack_notes/blob/main/Accet/libuv.jpg" alt="image" width="400" height="auto">

# Libuv  
- It is cross platform open-source library write in c language. 
- Handle asynchronous non-blocking operations. 
- Its run the async task using native async mechanism of operating system. 
- If that not possible then use thread pool.  


# Q. Thread Pool in Node.js 
- A Thread pool is a group of worker threads separate from the main thread.
- they are used to preform the tasks that can be slow or blocking.eg reading and righting a file.
- the blocking code pause event loop execution which can be lead to poor performance. So by offering heavy tasks to the worker thread event loop can run smoothly.
-  

Imagine a scenario where you have a Node.js application that needs to read a large file from the file system and perform some calculations. Without the thread pool, the event loop thread would be blocked while the file is being read, leading to poor performance. But with the thread pool, the file reading task is offloaded to a worker thread, allowing the event loop thread to continue handling other requests while the file is being read. 

The thread pool in Node.js is implemented using the libuv library. 
The libuv library provides an abstraction layer over the operating system’s I/O operations.
Node.js use it to handle various I/O operations such as file system access, network communication and more.

By default, libuv uses a thread pool with 4 threads, 
but this number can be changed by setting the UV_THREADPOOL_SIZEenvironment variable. 
This means that you can increase or decrease the number of threads in the thread pool depending on the requirements of your application. 

# Q. event loop in node js / Q. roll of Queue and Event Queue in node js ?

Event loop overview:

<img src="https://media.geeksforgeeks.org/wp-content/uploads/20211017212721/NWAGFGdrawio.png" alt="image" width="400" height="auto">

1. Users send requests to performing operations.
2. The requests enter the Event Queue first at the server-side.
3. The Event queue passes the requests sequentially to the event loop.
4. The event loop checks the nature of the request (blocking or non-blocking).
5. Event Loop processes the non-blocking requests which do not require external resources and returns the responses to the corresponding clients
6. For blocking requests, a single thread/workers is assigned to the process for completing the task by using external resources.
7. After the completion of the operation, the request is redirected to the Event Loop which delivers the response back to the client.

```jsx
    const fs = require('fs');

    const Asynchronous = () => {
        console.log('1')

        fs.readFile('text.txt', "utf-8", (err, result) => { //non blocking
            console.log(result);
        })

        console.log('3');
    }


    const syncFunction = () => {
        console.log('1');

        console.log(fs.readFileSync('text.txt', "utf-8")); //blocking 

        console.log('3');
    }

    syncFunction()
    // AsyncFunction()

    // https://medium.com/@abeythilakeudara3/nodejs-architecture-42a1d0efad8f


```
<br>

## Event Loop

<img src="https://github.com/nileshhshinde29/MERN_stack_notes/blob/main/Accet/event-loop.jpg" alt="image" width="400" height="auto">


## Execution order:

1. Any callbacks in the microtask queue are executed. First task in the next tick queue and only then in promise queue. 
2. All callbacks within the timer queue are executed. 
3. Callbacks in microtask queue if present executed. Again, first nextTick que and then task in promise queue. 
4. All callbacks within the i/o que are executed. 
5. Callbacks in microtask que if present are executed. nextTick followed by promise que. 
6. All callbacks within the check que are executed. 
7. Callbacks in microtask queue if present executed. Again, first nextTick que and then task in promise queue. 
8. All callbacks within the close que are executed. 
9. For one final time in the same loop the microtask que are executed. NextTick que followed by promise que. 
10. If there are more callbacks to be processed, the loop is kept alive for one more run and the same step are repeated. 
11. On the other hand, if all callbacks are executed and there is no more code to execute. The event loop exits. 


## Process.nextTrick: 

- It is a function, that allows u to schedule a function to run on next iteration of event loop. 

**Use**

- Handling errors and cleanups. 
- After encountering on error, you might use process.nextTrick to allow user to handle error or cleanup resources before the event loop. 
 

 **Disadvantages**

- This prevents the rest of the code in the event loop from the running. 

- Leading to starvation situation where other tasks are delayed. Check codeevoloution 48 videos 

## I/O Polling:

- I/o events are pulled, and callback functions are added to the I/O que only after the I/O complete. 

**Polling:** the process where the computer or controlling device waits for an external device to check for its readiness or state. 

- In event loop when control enters in I/o queue its empty at first time because of polling. So, its moves to next i.e. check queue  

## Check Queue: 

- Microtask queues callbacks are executed in between check queue callbacks. 

- When running setTimeout with delay 0 ms and setImmediate method, the order of execution can never guarantee. 

## Close queue:  

- Close queue callbacks are executed after all other queues callbacks in a given iteration of the event loop. 

# Q. How actually event loop works with callback and microtask Queue?
<br>

# Q. difference between process.nextTick() and setImmediate()
| process.nextTick | setImmediate |
| ---- |----|
|`process.nextTrick` is used to schedule a callback in the next iteration of loop, immediately after the current operation complete|`setImmediate()` is used to schedule a callback in the next iteration of the event loop, immediately after the I/O events are processed|
|Callbacks scheduled with `process.nextTick()` are executed before any I/O events (like timers, network, or file system events) are processed in the event loop.|Callbacks scheduled with `setImmediate()` are executed after any pending I/O events, timers, or other callbacks in the event loop queue|
|Because `process.nextTick()` callbacks are executed before I/O events, they are often used for tasks that need to be executed before any I/O event processing occurs, such as setting up event listeners or initializing variables.|Because `setImmediate()` callbacks are executed after I/O events, they are often used for tasks that need to be executed asynchronously but with lower priority compared to `process.nextTick()`|
<br>

# Q. what is V8-Engine ?
- V8 is Google's open-source JavaScript engine. 
- V8 is written in C++ and is used in Google Chrome, the open-source browser from Google. 
- V8 can run standalone or can be embedded into any C++ application. 
<br>

# Q. Browser vs node js 
| Browser | Node js |
| ---- | ---- |
| In browser we have an access of Dom, web Apis like cookies, local storage |Node js don't have an access of window, document object provided by browser|
| The browser don't have all nice apis that node js provides by its module like. Fs access functionality| Node js provides multiple modules like filesystem |
| With a browser, it depends on what the users choose | With Node.js, you control the environment |
<br>

# Q. 66. Q.59 Difference between cluster module, worker threads and child processes in nodejs.

| Feature | Cluster Module | Worker Threads | Child Processes |
| ---- | ---- | ---- | ---- |
| Purpose |- Used to create multiple instances of a Node.js application to take advantage of multi-core systems. - Scale networked applications by distributing incoming connections across multiple workers | Used to run JavaScript code in parallel to achieve better performance for CPU-intensive tasks. Parallelize CPU-intensive tasks within a single Node.js process. |Used to run JavaScript code in parallel to achieve better performance for CPU-intensive tasks. Execute external programs, interact with system-level processes, or perform blocking I/O operations. |
|Parallelism | Parallelizes across multiple processes (workers) on multiple CPU cores.  |Parallelizes within a single Node.js process, utilizing multiple threads. |Spawns separate Node.js processes, each running independently. |
|Communication |Inter-process communication (IPC) between workers. |Shared memory and message passing between threads. |Inter-process communication (IPC), standard input/output, or other methods. |
|Memory Sharing| Each cluster worker runs in a separate process, with its own memory space. |Worker threads share the same memory space with the main thread, allowing for more efficient memory usage. | Each child process runs in its own memory space, separate from the parent process. |
|Use Cases | Web servers, API servers, or other networked applications where scaling across CPU cores is beneficial. |CPU-bound tasks such as image processing, data parsing, or cryptographic operations. |Executing external programs, interacting with system resources, or performing blocking I/O operations. |
|Node.js Version |Available in Node.js core. |Available since Node.js v10. |Available in Node.js core. |
<br>

# Q. Explain Cluster Module.
- cluster is used to run multiple instances of node js. 
- It distributes workload among their application threads 
- each worker gets its own event loop, memory and v8 instance.
- We can create worker threads as many cpu cores in machine

```jsx

const http = require('http')
const cluster = require('cluster')
const numCPUs = require('os').availableParallelism();


if (cluster.isPrimary) {
    cluster.fork()
    cluster.fork()
    console.log(numCPUs);

    console.log(process.pid, "master process is running");
}
else {
    console.log(process.pid, "worker process is running");
    const server = http.createServer((req, res) => {
        if (req.url == "/") {
            res.writeHead(200, { "Content-Type": 'text/plain' })
            res.end('fast server')
        }
        else if (req.url == '/slow') {
            for (let i = 0; i < 10000000000; i++) { }
            res.writeHead(200, { "Content-Type": 'text/plain' })
            res.end('slow server')
        }
    })
    server.listen(8080, () => console.log('server is running'))
}

/* 
Example explanation:
 If we run server normally then and if we fetch slow process first and then fast process. 
 fast process waits until the first process gets completed.
 But if we use cluster then fast request resolve immediately and let the slow task run to cluster.
*/
```
<br>

# What is ODM and ORM?
Both ODM(Object Document Mapping) and ORM(Object Relational Mapping) are used to interact application to database. But they serve 

## ODM
- It is used for document oriented database like MongoDB.
- ODM deals with document structures (e.g., JSON)
- ***Mongoose*** is popular ODM for Mongodb and node.js.
- Provides a structured schema for the documents, allows for validation.

## ORM 
- ORM is used for relational databases, such as MySQL, PostgreSQL, and SQLite.
- ORM deals with table structures (rows and columns).
- ***Sequelize*** is a popular ORM for Node.js, and Hibernate is a popular ORM for Java.
- supports complex queries and relationships.

# What is MVC in node js ?
- Model view controller are design pattern commonly used for web development.
- It separate application into parts i.e ***Model***, ***View*** and ***Controller***

**1. Model**
- It represents the data and business logic of application. 
- It directly manages data, logic and rules of the application.
- functionality
    - Interacts with the database.
    - Performs data validation.
    - Implements business rules.

```jsx 
    const mongoose = require('mongoose');

    const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
    });

    const User = mongoose.model('User', userSchema);

    module.exports = User;
 
```   
**2. View**
- It Represents the user interface of the application.
- It displays data to the user and sends user commands to the controller.
- e.g HTML file

**3. Controller**
- Acts as an intermediate between the Model and the View. 
- It process input request, interact with model to fetch or update data, and render the view.
- Example in node js (using express)

```jsx
    const express = require('express');
    const router = express.Router();
    const User = require('../models/user'); // Model

    // Route to get a user by ID
    router.get('/user/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.render('user', { user }); // Render View
    } catch (error) {
        res.status(500).send(error);
    }
    });

    module.exports = router;

```

# services vs controller in node js.
**Controllers** and **Services** serve distinct roles in a Node.js application, especially when following the MVC (Model-View-Controller) pattern.

#### Controllers
- **Purpose**: Handle HTTP requests and responses.
- **Responsibilities**:
  - Map HTTP requests to functions.
  - Validate incoming data.
  - Format and send responses.
  - Tied to specific routes.
- **Example**:
  ```javascript
  // userController.js
  const userService = require('../services/userService');

  exports.getUser = async (req, res) => {
    try {
      const user = await userService.findUserById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  <!-- };

  exports.createUser = async (req, res) => {
    try {
      const user = await userService.createUser(req.body); -->
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  ```

#### Services
- **Purpose**: Contain business logic and interact with the data layer.
- **Responsibilities**:
  - Implement core application logic.
  - Perform data operations (query, update, delete).
  - Ensure reusability across different controllers.
  - Reusable across multiple controllers.
- **Example**:
  ```javascript
  // userService.js
  const User = require('../models/User');

  exports.findUserById = async (id) => {
    try {
      return await User.findById(id);
    } catch (error) {
      throw new Error('User not found');
    }
  };

  exports.createUser = async (userData) => {
    try {
      const user = new User(userData);
      return await user.save();
    } catch (error) {
      throw new Error('Error creating user');
    }
  };
  ```

  <br>

  # what is options method in context of restAPI?


- OPTIONS method is one of the HTTP methods used to provide information about the *communication options* available for a target resource. 
- It is used to allow a client to determine which HTTP methods and headers are supported by the server for a specific resource.

- When a client sends an OPTIONS request to a server, the server responds with a list of allowed methods, supported headers, and other information about the resource. This allows the client to understand what actions it can perform on that resource.

Here's a breakdown of how the OPTIONS method is commonly used in a REST API:

**CORS Preflight Requests:** When making cross-origin requests (requests from a different domain), browsers first send an OPTIONS request as a preflight check to determine if the actual request (e.g., GET, POST) is safe to send. The server responds with CORS headers indicating which origins, methods, and headers are allowed.

**Discovery and Documentation:** APIs can use the OPTIONS method to provide metadata or documentation about the available endpoints and their capabilities. This can include information such as supported HTTP methods, allowed headers, authentication requirements, and links to further documentation.

**Allowing Cross-Origin Requests:** In addition to CORS preflight requests, the OPTIONS method can be used to respond to direct OPTIONS requests from clients. By including appropriate CORS headers in the response, servers can explicitly allow cross-origin requests from specific origins.

**Server Configuration:** Some servers may use the OPTIONS method to provide information about server configuration or status. For example, an OPTIONS request to a server's root URL might return information about server version, supported features, or available endpoints.

<br/>

# 18. Q.12 difference between put and patch

| PUT |	PATCH |
|------|------|
|Update or replace an existing resource entirely|	Update a part of an existing resource |
|Replaces the entire resource with the provided data |	Modifies a portion of the resource with the provided data |
|Payload	Expects a full representation of the resource |	Expects a partial representation of the resource |
|Updating user profile with all fields provided |	Updating user profile with only specific fields |

# What is interceptor in node js.

- interceptors are a middleware used in intercept or modify HTTP request/response before they processed by main logic.
- interceptors are commonly used in framework like Express.js for tasks like authentication, error handling.

- **Request Interceptors**: this intercepts incoming request before they reach to application routes or controller. 
  eg. for Validating authentication, parsing the request body.

- **Response Interceptors:** These interceptors are used to intercept response before they send to client.
  eg.  used for tasks like adding custom headers, transforming response data. 

```jsx

      const express = require('express');
      const app = express();

      // Request interceptor middleware
      app.use((req, res, next) => {
        console.log(`Incoming request: ${req.method} ${req.url}`);
        next(); // Pass control to the next middleware or route handler
      });

      // Response Error handling middleware 
      app.use((err, req, res, next) => {
          console.error(err.stack);
          res.status(500).send('Something went wrong!');
      });

      // Route handler
      app.get('/', (req, res) => {
        res.send('Hello World!');
      });

      app.listen(3000, () => {

      console.log('Server is running on port 3000');

      });

  ```


# Decorators in javascript. 

- Decorators allow you to add metadata or behavior to classes, methods, and properties. They are applied using the @decorator syntax.

- Decorators help in separating concerns and improving code readability. 
-  Decorators are not natively supported in JavaScript (as of ES2022), but they are a proposed feature as part of the ECMAScript standard, and they are commonly used with tools like Babel or TypeScript.

```jsx

      // Define a decorator function
      function myDecorator(target, name, descriptor) {
          console.log('Decorator was called on:', name);
      }

      // Apply the decorator to a class method
      class MyClass {
          @myDecorator
          myMethod() {
              console.log('Method called');
          }
      }

      const obj = new MyClass();
      obj.myMethod(); // Output: Method called
```
In this example:

- The myDecorator function is a decorator that logs a message when it's applied to a method.
- It takes three arguments: target (the class the method belongs to), name (the name of the method), and descriptor (an object containing information about the method).
- The @myDecorator syntax applies the decorator to the myMethod of the MyClass class.

As mentioned earlier, in order to use decorators like this in your JavaScript code, you typically need to use a transpiler like Babel or TypeScript, as decorators are not yet officially part of the JavaScript language standard.




# Q.30 can node js work without v8 engine ? 
NO, V8 is responsible for parsing and executing JavaScript code in Node.js. Without V8, Node.js would not be able to run JavaScript.

#  Q.27 what is blocking code in node js ?
blocking code is code that hold execution other code until complete execution of blocking code.


# what is assert in node js?
- Assert is the most elementary way to write tests. 
- used for testing and debugging
- console only when test fails

``` jsx
    const assert = require('assert')
    const myFunction = (a, b) => {
        return a + b

    }
    let b = myFunction(1, 3)
    assert(b == 5, "hii") // it give "hii" in console only if condition fail;
    assert.strictEqual(2, 2, 'Values are not strictly equal');

```

# what is function composition in javascript?
- This is the technique of combining two or more functions together and create single function.
- This is take output of one function and use it as the input of another function.
- this is 



```jsx
      const f = (x) => x + 2
      const g = (x) => x * 3

      // Composing f and g
      const composedFunction = (x) => f(g(x)) // f(g(x)) = f(3x) = 3x + 2

      console.log(composedFunction(2)) // Outputs 8
```

# Q.35 what are the globals which are provided by node itself in node application
Node. js global objects are global in nature and available in all modules.
You don't need to include these objects in your application; rather they can be used directly.

- __dirname
- __filename
- Console
- Process
- Buffer
- setImmediate()
- setInterval()
- setTimeout()
- clearImmediate()
- clearInterval()
- clearTimeout()

# 44. suppose I haven't pass lifetime in jwt , by default how long a token will survive ? 
- with out an expiredIn it will last indefinitely, which can be security risk.
- Its highly recommended to set expiry time in jwt.
 
# Worker Thread Pool.









