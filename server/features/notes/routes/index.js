const express = require("express")
const noteControls = require("../controllers")
const router = express.Router()

router.post("/:userID/create-note", noteControls.createNote)
router.get("/notes", noteControls.getNotes)
router.put("/notes/:userID/invite", noteControls.inviteCollaborator)
router.post("/notes/:noteID/accept-invitation", noteControls.acceptInvitation)

module.exports = router
