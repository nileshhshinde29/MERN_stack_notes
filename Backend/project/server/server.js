const http = require('http')

const app = require('./app')
const errorHandler = require('./middleware/errorHandler')
const connectDb = require('./config/dbConnection')


connectDb()

const server = http.createServer(app)
// app.use(errorHandler) // that we create middleware for the return error into the json format.


server.listen(8080, console.log('Running'))

