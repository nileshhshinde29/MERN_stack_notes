const express = require('express')
const { createProduct, getAllProducts } = require('../controller/productController')
const { adminOnly } = require('../middleware/role')
const { auth } = require('../middleware/auth')
const router = express.Router()
const upload = require('../middleware/multer')

router.post('/create-product', auth, adminOnly, upload.array('img', 4), createProduct)
router.get('/get-all-products', getAllProducts)


module.exports = router