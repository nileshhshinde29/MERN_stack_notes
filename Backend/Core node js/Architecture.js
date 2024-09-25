/* 
https://media.geeksforgeeks.org/wp-content/uploads/20211017212721/NWAGFGdrawio.png

Event loop overview:

Users send requests to performing operations.
The requests enter the Event Queue first at the server-side.
The Event queue passes the requests sequentially to the event loop.
The event loop checks the nature of the request (blocking or non-blocking).
Event Loop processes the non-blocking requests which do not require external resources and returns the responses to the corresponding clients
For blocking requests, a single thread/workers is assigned to the process for completing the task by using external resources.
After the completion of the operation, the request is redirected to the Event Loop which delivers the response back to the client.




*/

// 
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

/* 

deep:

js is single threaded, blocking and synchronus laguage. To make it async programing we need of libuv,

Libuv: cross platform open source library written in c language.
       used to handle non-blocking operations.
       run async task using native async mechanism of operating system.

Event loop in deep: 
    Execution order:
      - Any tasks (callbacks) in microtask que will run first. It executes tasks from nextTick que first and then 
        executes promise que.
      -  then all callbacks within the timer que will executed.
      - after execution of timer que it will again come at microtask que and if callbacks present in microtask que 
        will executed in the same sequence i.e. nextTrick => Promise Que
      -  Then all callbacks from executed. it will again come at microtask que and if callbacks present in microtask que 
        will executed in the same sequence i.e. nextTrick => Promise Que.
      - then all callbacks in check que will executed. it will again come at microtask que and if callbacks present in microtask que 
         will executed in the same sequence i.e. nextTrick => Promise Que.
      -  then all callbacks in close que will executed. 
      -  for final time it will again come at microtask que and if callbacks present in microtask que 
        will executed in the same sequence i.e. nextTrick => Promise Que
      - if there are more callback functions then loop keep alive for one more run, otherwise event loop exit. 


process.nextTrick():
       It is function that allows us to schedule a function to run on next iteration of event loop,
       use: handling errors and cleanup before event loop continues;
       cons: prevent rest code of event loop from running; leading to stavation like situation.

Timer que:


I/O pulling: I/O events are pulled and callback functions are added to the que only after I/O completed.
    Pulling : polling is process where the computer or controlling device waits for external device to check its 
            readiness or state.
    Imp: when control enters in i/o que its empty at first time because of polling. so it move to next i.e check que.

Check que: 
        When running setTimeout with delay 0ms and setImmediate method the order of execution can never be guaranteed    

Close que: 
        executes after all other queues callbacks execution.



Thread Pool in Node.js
A thread pool is a group of worker threads separate from the main event loop thread Node.js uses to execute JavaScript code and handle requests. The underlying operating system manages these worker threads. They are used to perform certain types of tasks that can be slow and blocking, such as reading or writing to a file, performing cryptographic functions, etc. These tasks are known as blocking operations, and they can cause the event loop to pause execution, which can lead to poor performance. By offloading these tasks to the worker threads in the thread pool, it allows the event loop thread to continue handling other tasks without being blocked by the slow operations.

Imagine a scenario where you have a Node.js application that needs to read a large file from the file system and perform some calculations. Without the thread pool, the event loop thread would be blocked while the file is being read, leading to poor performance. But with the thread pool, the file reading task is offloaded to a worker thread, allowing the event loop thread to continue handling other requests while the file is being read.

The thread pool in Node.js is implemented using the libuv library. The libuv library provides an abstraction layer over the operating system’s I/O operations. Node.js use it to handle various I/O operations such as file system access, network communication and more. Libuv is platform-agnostic, which means it is designed to work seamlessly across different operating systems, such as Windows, Linux and macOS.

By default, libuv uses a thread pool with 4 threads, but this number can be changed by setting the UV_THREADPOOL_SIZEenvironment variable. This means that you can increase or decrease the number of threads in the thread pool depending on the requirements of your application.
*/