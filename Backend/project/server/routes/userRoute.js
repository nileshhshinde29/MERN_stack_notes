const express = require('express')
const { register, login, temp, fetchDataAndSaveAsCSV } = require('../controller/userController')
const { refreshToken, auth } = require('../middleware/auth')
const router = express.Router()


router.route('/register').post(register)
router.post('/login', login)
router.post('/refresh', refreshToken)
router.get('/temp', fetchDataAndSaveAsCSV)


module.exports = router



// const express = require("express");
// const router = express.Router();
// const { login, register, self } = require('../controller/userController')
// const auth = require('../middleware/auth')


// router.route("/register").post(register);
// router.post("/login", login)
// router.get('/self', auth, self)




// module.exports = router;