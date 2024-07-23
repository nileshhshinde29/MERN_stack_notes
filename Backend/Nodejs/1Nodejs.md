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





