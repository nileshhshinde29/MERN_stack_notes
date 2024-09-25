const express = require('express')
const app = express()
const cors = require('cors');
const cookieParser = require("cookie-parser");
const path = require('path')


const userRoute = require('./routes/userRoute')
const uploadRouter = require('./routes/Aggregation/uploadRoute')
// const AggregationDBRoute = require('./routes/aggregationRoute')
// const sendMail = require('./middleware/mailSender')
// const path = require('path')
// app.use('/aggregate', AggregationDBRoute)

const aggregationRoute = require('./routes/Aggregation/AggregationQuestionPracticeRoute')



//------------------------------------------
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json()) // parse the data that we receive form client side to server side.
app.use(express.urlencoded({ extended: false }));
app.set('view engine', "ejs") // ejs is used for server side rendering.
app.set('views', path.resolve('./views'))
app.use('/user', userRoute)


// app.get('/send-email', sendMail) // ethereal mail sender

app.use('/aggregation', aggregationRoute)
app.use('/upload', uploadRouter)
app.use('/PDFfiles', express.static('PDFfiles')) //we can access pdf file from anywhere by this http://localhost:8080/PDFfiles/1708066994298.pdf

/************* online mart ********************/

const categoryRoute = require('./routes/categoryRoute')
const productRoute = require('./routes/productRoute')
const cartRoute = require('./routes/cartRoute')
const pageRoute = require('./routes/pageRoute')


app.use('/uploads', express.static('uploads')) //we can expose this folder to browser by this http://localhost:8080/uploads/1708066994298.pdf
app.use('/', categoryRoute)
app.use('/product', productRoute)
app.use('/cart', cartRoute)
app.use('/pages', pageRoute)




app.use((req, res, next) => {
    res.status(404).json({
        message: 'Default running'
    })
})

module.exports = app



