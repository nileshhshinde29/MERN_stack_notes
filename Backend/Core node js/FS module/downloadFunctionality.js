const express = require('express')
const app = express()
const http = require('http')
const fs = require('fs')


app.use('uploads', express.static('uploads'))
const server = http.createServer(app)

app.get('/download', (req, res) => {
    let path = __dirname + '/uploads/Sam_Group_Reel_Final.zip'
    console.log(path);
    res.download(path)
})

app.get('/download1',

    async (req, res) => {
        try {
            const fileName = 'socialFeed.pdf'
            let path = __dirname + `/uploads/${fileName}`
            const stream = fs.createReadStream(path);
            // res.set({
            //     'Content-Disposition': `attachment; filename=${fileName}`, // If we removed this set method then Browser will preview this pdf only.
            //     'Content-Type': 'application/pdf',
            // });
            stream.pipe(res);
        } catch (e) {
            console.error(e)
            res.status(500).end();
        }
    }
)

server.listen(8080, () => {
    console.log("server is running on 8080")
})