const noteModel = require("../models")
const userModel = require("../../users/model")
const createNote = async (req, res) => {
  const { userID } = req.params
  const { label, imgUrl, textContent } = req.body
  try {
    const note = await noteModel.create({
      label,
      imgUrl,
      textContent,
      owner: userID,
    })
    await userModel.findByIdAndUpdate(userID, {
      $push: { notes: note.id },
    })
    res.status(200).json({ created: true, note })
  } catch (error) {
    res.status(400).json({ created: false, message: error.message })
  }
}

const getNotes = async (req, res) => {
  try {
    const notes = await noteModel.find({}) //.populate("owner")
    return res.status(200).json({ notes })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const inviteCollaborator = async (req, res) => {
  const userName = req.body.userName
  const ownerID = req.params.userID
  const noteID = req.body.noteID
  try {
    const owner = await userModel.findById(ownerID)
    const user = await userModel.findOne({ userName })
    const invitations = user.invitations.filter((invitation) => {
      return invitation.noteID === noteID
    })

    //send invitation only if the noteID does'nt appear in user invitations
    if (invitations.length === 0) {
      await userModel.findOneAndUpdate(
        { userName },
        {
          $push: {
            invitations: {
              ownerID: ownerID,
              noteID: noteID,
            },
          },
        },
        { new: true }
      )
      return res.status(200).json({ invitation_sent: true, owner })
    }
    return res
      .status(200)
      .json({ invitation_sent: false, message: "User is already invited" })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const acceptInvitation = async (req, res) => {}

const noteControls = {
  createNote,
  getNotes,
  inviteCollaborator,
  acceptInvitation,
}

module.exports = noteControls
