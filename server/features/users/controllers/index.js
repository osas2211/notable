const userModel = require("../model")
const bcrypt = require("bcrypt")
const generateToken = require("../../../utils/generateToken")
const authenticationFailed = require("../../../utils/authenticationFailed")

/********************************* AUTHENTICATION CONTROLS *********************************/
const signUp = async (req, res) => {
  const { name, userName, password, email } = req.body
  try {
    const encryptedPassword = await bcrypt.hash(password, 10)
    const user = await userModel.create({
      name,
      userName,
      password: encryptedPassword,
      email,
    })
    const token = await generateToken({ userName, id: String(user._id) })
    user.token = token
    res.status(200).json({ userCreated: true, user })
  } catch (err) {
    res.status(400).json({ userCreated: false, message: err.message })
  }
}

const signIn = async (req, res) => {
  const { userName, password } = req.body
  try {
    const user = await userModel.findOne({ userName }).populate("notes")
    if (!user) return authenticationFailed(res, "User does not exist")
    const result = await bcrypt.compare(password, user.password)
    if (!result) return authenticationFailed(res, "Password is incorrect")
    const token = await generateToken({ userName, id: String(user._id) })
    user.token = token
    return res.status(200).json({ authenticated: true, user })
  } catch (error) {
    return res
      .status(400)
      .json({ authenticated: false, message: error.message })
  }
}

/********************************* AUTHENTICATION CONTROLS *********************************/

const getUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.userID).populate("notes")
    return res.status(200).json({ user })
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

const updateProfile = async (req, res) => {
  const userID = req.user.id
  const image = req.file
  try {
    const user = await userModel.findByIdAndUpdate(
      userID,
      { $set: { avatarURL: image.path } },
      { new: true }
    )

    return res.status(200).json({ success: true, image })
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
}

const userControls = {
  signUp,
  signIn,
  getUser,
  updateProfile,
}

module.exports = userControls
