const userModel = require("../model")
const bcrypt = require("bcrypt")
const generateToken = require("../../../utils/generateToken")

const signUp = async (req, res) => {
  const { name, userName, password, email } = req.body
  try {
    const encryptedPassword = await bcrypt.hash(password, 10)
    const token = await generateToken({ userName, name, email })
    const user = await userModel.create({
      name,
      userName,
      password: encryptedPassword,
      email,
    })
    user.token = token
    res.status(200).json({ success: true, user })
  } catch (err) {
    res.status(400).json({ success: false, msg: err.message })
  }
}

const signIn = async (req, res) => {}

const userControls = {
  signUp,
}

module.exports = userControls
