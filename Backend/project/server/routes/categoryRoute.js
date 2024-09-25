
const express = require('express')
const router = express.Router();

const { CreateCategory, getCategories, updateCategories, deleteCategory } = require("../controller/categoryController");
const { auth } = require('../middleware/auth');
const { adminOnly } = require('../middleware/role');
const upload = require('../middleware/multer');

router.post('/create-category', auth, adminOnly, upload.single("categoryImage"), CreateCategory)
router.get('/get-categories', getCategories)
router.post('/update-categories', auth, adminOnly, upload.single("categoryImage"), updateCategories)
router.delete('/delete-category', deleteCategory)


module.exports = router