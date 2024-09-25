const express = require("express");
const router = express.Router();
// const auth = require("../middleware/auth");
const { aggregateFunction, queriesPrectice } = require('../controller/aggregateController')

router.get("/", aggregateFunction);
router.get("/queries", queriesPrectice);








module.exports = router;