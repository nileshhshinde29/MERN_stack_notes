const http = require('http');
const fs = require('fs');
const path = require('path');

// Function to parse the multipart form data
const parseFormData = (data, boundary) => {
    // Split the data by the boundary and filter out empty parts
    const parts = data.split(`--${boundary}`).filter(part => part.length > 0 && part !== '--\r\n');
    const files = [];

    parts.forEach(part => {
        // Find the index where headers end and body starts
        const headersEndIndex = part.indexOf('\r\n\r\n');
        // Extract headers and body
        const headers = part.substring(0, headersEndIndex).split('\r\n');
        const body = part.substring(headersEndIndex + 4, part.length - 2); // Remove the trailing \r\n

        let fileName = '';
        headers.forEach(header => {
            if (header.includes('filename')) {
                // Extract filename from the headers
                const match = header.match(/filename="(.+)"/);
                console.log(match);
                if (match) {
                    fileName = match[1];
                }
            }
        });

        if (fileName) {
            // Push the file information into the files array
            files.push({
                fileName,
                content: Buffer.from(body, 'binary') // Convert body to buffer
            });
        }
    });

    return files;
};

// Create an HTTP server
const server = http.createServer((req, res) => {
    if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
        // Get the boundary from the content-type header
        const boundary = req.headers['content-type'].split('; ')[1].replace('boundary=', '');
        const chunks = [];

        // Collect data chunks
        req.on('data', chunk => {
            chunks.push(chunk);
        });

        // When all data is received
        req.on('end', () => {
            // Concatenate all chunks into a single buffer and convert to binary string
            const data = Buffer.concat(chunks).toString('binary');
            // Parse the form data using the boundary
            const files = parseFormData(data, boundary);

            // Save each file
            files.forEach(file => {
                fs.writeFileSync(path.join(__dirname, 'uploads', file.fileName), file.content);
            });

            // Respond to the client
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('File uploaded successfully');
        });
    } else if (req.url === '/' && req.method.toLowerCase() === 'get') {
        // Serve a basic HTML form for file upload
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
            <style>
            .btn{
               color:red
            }
            </style>
            <body>
            <form action="/upload" method="post" enctype="multipart/form-data">
                <input  type="file" multiple name="upload" />
                <button class="btn" type="submit">Upload</button>
            </form>
            </body>
            </Html>
        `);
    } else {
        // Handle 404 Not Found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Ensure the uploads directory exists, create it if it doesn't
if (!fs.existsSync(path.join(__dirname, 'uploads'))) {
    fs.mkdirSync(path.join(__dirname, 'uploads'));
}

// Start the server and listen on port 3000
server.listen(3000, () => {
    console.log('Server listening on http://localhost:3000/');
});
