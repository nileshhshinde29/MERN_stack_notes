const express = require('express')

const router = express.Router()

router.get('/get-users', (req, res, next) => {
    res.status(200).json({
        message: 'Get all users route'
    })
})


router.post('/create-user', (req, res, next) => {
    res.status(200).json({
        message: 'create user route'
    })
})


module.exports = router;