const { Worker, isMainThread, workerData, parentPort } = require('node:worker_threads')

if (isMainThread) {

    const worker = new Worker(__filename, {
        workerData: { input: 10 }
    })

    worker.on('message', (result) => {
        console.log("worker thread result", result)

    })
    worker.on('error', (err) => {
        console.log("worker thread err", err)

    })


}
else {

    const { input } = workerData

    let count = heavyFunction(input)

    parentPort.postMessage(count)


}

function heavyFunction(input) {
    for (let i = 0; i < 10000000000; i++) {

    }
    return input
}