const express = require("express")
const userControls = require("../controllers")
const router = express.Router()

router.post("/signup", userControls.signUp)
router.post("/signin", userControls.signIn)

module.exports = router
