const express = require("express")
const noteControls = require("../controllers")
const router = express.Router()

router.post("/:userID/create-note", noteControls.createNote)
router.get("/notes", noteControls.getNotes)

module.exports = router
