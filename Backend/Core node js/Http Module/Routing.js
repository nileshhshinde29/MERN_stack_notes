const Http = require("http")
const fs = require("fs")



Http.createServer((req, res) => {

    if (req.url == "/") {
        res.writeHead(200, { "content-type": "text/plain" })
        res.end('Home')
    }
    else if (req.url == "/about") {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({ "name": "Nilesh" }))
    }
    else if (req.url == "/html") {
        res.writeHead(200, { "content-type": "text/html" })
        const html = fs.readFileSync('./index.html', "utf-8")
        res.end(html)
    }
    else {
        res.writeHead(200, { "content-type": "text/plain" })
        res.end("Not found")
    }

}).listen(3000, () => {
    console.log("running server");
})