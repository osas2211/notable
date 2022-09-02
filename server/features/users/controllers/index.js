const userModel = require("../model")
const bcrypt = require("bcrypt")
const generateToken = require("../../../utils/generateToken")
const authenticationFailed = require("../../../utils/authenticationFailed")

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
    const token = await generateToken({ userName, name, email })
    user.token = token
    res.status(200).json({ userCreated: true, user })
  } catch (err) {
    res.status(400).json({ userCreated: false, message: err.message })
  }
}

const signIn = async (req, res) => {
  const { userName, password } = req.body
  try {
    const user = await userModel.findOne({ userName })
    if (!user) return authenticationFailed(res, "User does not exist")
    const result = await bcrypt.compare(password, user.password)
    if (!result)
      return res.status(401).json({
        authenticated: false,
        message: "User authentication has failed: Password is incorrect",
      })
    return res.status(200).json({ authenticated: true, user })
  } catch (error) {
    return res
      .status(400)
      .json({ authenticated: false, message: error.message })
  }
}

const userControls = {
  signUp,
  signIn,
}

module.exports = userControls
