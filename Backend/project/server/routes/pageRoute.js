const express = require('express')
const router = express.Router()
const { createPage } = require('../controller/pageController')
const { auth } = require('../middleware/auth')
const upload = require('../middleware/multer')

router.post('/create-page', auth, upload.fields([{ name: 'banner', maxCount: 10 }, { name: "products", maxCount: 10 }]), createPage)

module.exports = router