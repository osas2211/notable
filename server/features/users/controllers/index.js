const userModel = require("../model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

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
    const token = jwt.sign({ userName, email }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    })
    user.token = token
    res.status(200).json({ success: true, user })
  } catch (err) {
    res.status(400).json({ success: false, msg: err.message })
  }
}

const userControls = {
  signUp,
}

module.exports = userControls
