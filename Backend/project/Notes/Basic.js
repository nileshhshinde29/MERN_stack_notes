/* 

1. Http: Node.js has a built-in module called HTTP,
         which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

2. Express:  A node js web application framework that provides features for building web and mobile applications.
             - handling of HTTP requests, including GET, POST, and other types, 
             - allows you to add extra tools or functions ( middleware ) at different points to process requests in a special way.

3. Process: 
            In computing, a process is essentially an instance of a running program. When you execute a script in Node.js,
            a new process is started to manage the execution of that code. 
            process as an independent unit that contains all the resources needed to execute a given program.

4. What is a Thread?
            A thread is a smaller unit within a process that the CPU handles directly. 
            It’s like a to-do list of instructions for the CPU to execute. 
            A single process can contain multiple threads, sharing the same resources but executing independently.

            For example, let’s say you have a Node.js application that’s handling file I/O,
             network requests, and data processing. Each of these tasks could potentially be handled by a separate thread within the same process.

5. Threads in Node.js
             Node.js is single-threaded, but that doesn’t mean you can’t take advantage of multi-threading.
            The Node.js runtime uses a single main thread for the event loop but utilizes additional worker threads for performing tasks like I/O operations asynchronously.
             This way, the main thread can continue executing JavaScript code, not having to wait for tasks like file reading or data fetching to complete.

6. worker threads:
            Workers are useful for performing CPU-intensive JavaScript operations; do not use them for I/O, 
            since Node.js’s built-in mechanisms for performing operations asynchronously already treat it more efficiently than Worker threads can.
            
7. What is mongoose:             




*/