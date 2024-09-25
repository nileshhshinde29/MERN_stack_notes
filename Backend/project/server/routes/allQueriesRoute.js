const express = require("express")
const { mainFunction } = require("../controller/allQueries")
const route = express.Router()

route.get('/', mainFunction)

module.exports = route
