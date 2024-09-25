/* 
cluster is used to create multiple instance of node js that can distribute workload.
But worker threads are used to run multiple application threads within a single node js instance.
It runs in separate child process and prevent blocking main thread.

*/

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
