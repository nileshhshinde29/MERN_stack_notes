const fs = require('fs')
const http = require('http')

// write file

fs.writeFileSync('.temp.html', "<h1>Hello</h1>") // this is async 

fs.writeFile('.temp.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('writeFile! created temp.txt');
});
fs.open('.temp.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});

// Read files


http.createServer(function (req, res) {
    fs.readFile('.temp.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);

// http://localhost:8080/



// update file
fs.appendFile('.temp.txt', ' This is my appended (updated) text.', function (err) {
    if (err) throw err;
    console.log('Updated! previous data');
});

fs.writeFile('.temp.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced! previous data');
});


