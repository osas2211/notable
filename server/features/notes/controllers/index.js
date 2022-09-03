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

const noteControls = {
  createNote,
  getNotes,
}

module.exports = noteControls
