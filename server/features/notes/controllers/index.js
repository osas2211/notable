const noteModel = require("../models")
const userModel = require("../../users/model")

// POST Create a Note
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

//GET Get Notes
const getNotes = async (req, res) => {
  try {
    const notes = await noteModel.find({}) //.populate("owner")
    return res.status(200).json({ notes })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

// PUT Invite Collaborators
const inviteCollaborator = async (req, res) => {
  const userName = req.body.userName
  const ownerID = req.params.userID
  const noteID = req.body.noteID
  try {
    const owner = await userModel.findById(ownerID)
    const user = await userModel.findOne({ userName })
    const isInvited = user.invitations.filter((invitation) => {
      return invitation.noteID === noteID
    })[0]
    const isCollaborator = (await owner.populate("notes")).notes.filter(
      (note) => {
        return note.collaborator === user._id
      }
    )[0]

    //send invitation only if the noteID does not appear in user invitations
    //or user is not a note collaborators
    if (isInvited === undefined || isCollaborator !== undefined) {
      await user.updateOne(
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
    return res.status(400).json({
      invitation_sent: false,
      message: "User is already a Collaborator",
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// POST Accept Invitation
const acceptInvitation = async (req, res) => {
  const noteID = req.params.noteID
  const userID = req.body.userID
  try {
    const user = await userModel.findById(userID)
    const note = await noteModel.findById(noteID)
    await user.updateOne(
      {
        $push: {
          collab_notes: noteID,
        },
        $pull: {
          invitations: { noteID: noteID },
        },
      },
      { new: true }
    )
    await note.updateOne(
      {
        $push: {
          collaborators: userID,
        },
      },
      { new: true }
    )
    res.status(200).json({ accepted: true, user })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const noteControls = {
  createNote,
  getNotes,
  inviteCollaborator,
  acceptInvitation,
}

module.exports = noteControls
