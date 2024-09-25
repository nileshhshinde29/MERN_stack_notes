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
 If we run server normally then and if we fetch slow process first and then fast process. fast process waits until the first process gets completed.
 But if we use cluster then fast request resolve immediately and let the slow task run to cluster.
*/



/* 
- cluster is used to run multiple instances of node js. 
- It distributes workload among their application threads 
- each worker gets its own event loop, memory and v8 instance.
- We can create worker threads as many cpu cores in machine
*/




