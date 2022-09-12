const express = require("express")
const noteControls = require("../controllers")
const router = express.Router()

router.post("/create-note", noteControls.createNote)
router.get("/notes/:noteID", noteControls.getNote)
router.get("/notes", noteControls.getNotes)
router.put("/notes/:noteID", noteControls.updateNote)
router.delete("/notes/:noteID", noteControls.deleteNote)
router.put("/notes/invite", noteControls.inviteCollaborator)
router.post("/notes/:noteID/accept-invitation", noteControls.acceptInvitation)

module.exports = router
