## Q.1 Node js is single threaded or multi-threaded? How can we make node application multi threaded?
Node.js is single-threaded, but that doesn’t mean you can’t take advantage of multi-threading.

The Node.js runtime uses a single main thread for the event loop but utilizes additional worker threads for performing tasks like I/O operations asynchronously. 

This way, the main thread can continue executing JavaScript code, not having to wait for tasks like file reading or data fetching to complete. 

This feature is particularly useful for tasks like CPU-bound computations, image processing, or intensive data manipulation, where parallel processing can improve performance without blocking the event loop.

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


