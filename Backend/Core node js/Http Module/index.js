const http = require("http")
const fs = require('fs')

http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    // res.end('hello world')

    let html = fs.readFileSync('index.html', "utf-8")
    // res.end(html)

    fs.createReadStream('./index.html').pipe(res)  // if Html file is too large then we can load in chunk using this method.

}).listen(3000, () => {
    console.log("server is running");
})