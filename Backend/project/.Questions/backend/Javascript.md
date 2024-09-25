0 docker, pdf save using multer, pdf download using handlebar.
1.What is package.json? How we can create it in frontend and backend?
2.Node js is multithreaded or single threaded.
3.what is use of http in backend?
4.What is CORS?
5.What are access token and refresh token?    
6.Authentication vs Authorization.       
7.What is cluster
8.Whats are event emitters? 
9.Difference between get and post.
8.what is process?
9.what are threads / worker threads?
10.Caching in node js
11 Authentication and authorization difference
12 Lookups
13 How Mongodb creates ObjectID
14 shallow and deep copy
15 private routes


Event loop and concurrency in nodejs
- process.nextTick and setImmediate
- what is Expressjs
- routing using Expressjs
- what is middleware and how to create it
- Reactor Pattern in Node.js
- http status codes with their use
- why node is single threaded ?
- what is callback function
- promise vs callback with example
- callback hell problem
- async and await
- what is mongoose
- event emitter in nodejs
- fork() and spawan()
- what is libuv
- what is passport in Nodejs
- explain auth implementation using JWT
- explain file module in NodeJs





Q.1 What is package.json? How we can create it in frontend and backend?
- metadata file for Node.js projects.
- it includes details about the project, dependencies, versions of libraries and scripts.
- create using npm init.

Q.2 why node is single threaded ?
- The single thread doesn't require communication between threads. it shares the same memory that's why we can get a 
  more quick response.

  limitations :
- Using a single core of processor for all tasks is not good because it may block our main thread.  
- In node js we can not perform CPU intensive tasks like video editing, high graphics the game.


Q.3 what is use of http in backend?
- used for communication between web servers and clients.
- It enables the fetching of resources, like HTML pages, images, and data, from servers.  

Q.4 What is CORS? (Cross-Origin Resource Sharing)
- security feature implemented by web browsers to prevent other websites from accessing resources and data from
  another domain without permission.

Q.5 What is cluster?
- Clusters of Node.js processes can be used to run multiple instances of Node.js
- distribute workloads among their application threads.
  https://nodejs.org/api/cluster.html#how-it-works

Q.6 What is express?
   A node js web application framework that provides features for building web and mobile applications.
- handling of HTTP requests, including GET, POST, and other types, 
- allows you to add extra tools or functions ( middleware ).

Q.7 What is Process?
- In computing, a process is an instance of a running program. When you execute a script in Node.js,
  a new process is started to manage the execution of that code. 
  process as an independent unit that contains all the resources needed to execute a given program.

Q.8  What is a Thread?
- A thread is a smaller unit of process that the CPU handles directly. 
- It’s like a to-do list of instructions for the CPU to execute. 
- A single process can contain multiple threads, sharing the same resources but executing independently.

            For example, let’s say you have a Node.js application that’s handling file I/O,
             network requests, and data processing. Each of these tasks could potentially be handled by a separate thread within the same process.

5. Threads in Node.js
             Node.js is single-threaded, but that doesn’t mean you can’t take advantage of multi-threading.
            The Node.js runtime uses a single main thread for the event loop but utilizes additional worker threads for performing tasks like I/O operations asynchronously.
             This way, the main thread can continue executing JavaScript code, not having to wait for tasks like file reading or data fetching to complete.

Q. 9 what are worker threads:
- Workers are useful for performing CPU-intensive JavaScript operations; do not use them for I/O, 
- since Node.js’s built-in mechanisms for performing operations asynchronously already treat it more efficiently than
  Worker threads can.  

Q.10 what is mongoose.
- Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. 
- It manages relationships between data, provides schema validation, and is used to translate between objects in code 
  and the representation of those objects in MongoDB.  

Q. 11 Whats are event emitters? 
- allows Interaction between objects in Node.js through events. 
- It allows an object to publish (emit) events when something of interest occurs and allows other objects to listen (subscribe) to these events.

https://medium.com/developers-arena/-event-emitters-for-beginners-and-for-experts-591e3368fdd2#:~:text=EventEmitter%20is%20a%20class%20that,%20performed%20for%20the%20event.  

Q.12 Difference between get and post.

Q. 13 what is Middleware.
- Middleware are functions or modules that have access of request and response objects in the application's HTTP  
  request-response cycle.
- They can perform tasks, modify requests or responses, or end the request-response cycle.
- In Node.js, middleware functions are commonly used with frameworks like Express.

- e.g.
        const express = require('express');
        const app = express();

        // Custom middleware function
        const myMiddleware = (req, res, next) => {
        console.log('Middleware executed!');
        // You can perform tasks here or modify the request/response
        // Call next() to pass control to the next middleware or route handler
        next();
        };

        // Use the middleware globally for all routes
        app.use(myMiddleware);

        // Define a route
        app.get('/', (req, res) => {
        res.send('Hello World!');
        });

        // Start the server
        const PORT = 3000;
        app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        });

        app.get('/special', myMiddleware, (req, res) => {
        res.send('Special route!');
        });
       
Q.  http code with uses
-       1xx: Informational
            100 Continue
            2xx: Success
            200 OK
            201 Created
            204 No Content
        3xx: Redirection
            301 Moved Permanently
            302 Found
            304 Not Modified
        4xx: Client Error
            400 Bad Request
            401 Unauthorized
            403 Forbidden
            404 Not Found
            405 Method Not Allowed
        5xx: Server Error
            500 Internal Server Error
            501 Not Implemented
            502 Bad Gateway
            503 Service Unavailable

   Q. achive multithreading using worker threads.         









5.What are access token and refresh token?  
  https://stackoverflow.com/questions/27726066/jwt-refresh-token-flowhttps://www.geeksforgeeks.org/jwt-authentication-with-refresh-tokens/