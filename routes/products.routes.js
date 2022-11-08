const express = require('express')
const router = express.Router()
const ctrls = require("../controllers")

router.get("/", ctrls.products.index)
router.post("/new", ctrls.products.create)

module.exports = router;