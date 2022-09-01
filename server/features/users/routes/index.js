const express = require("express")
const userControls = require("../controllers")
const router = express.Router()

router.post("/signup", userControls.signUp)

module.exports = router
