const userModel = require("../model")
const getToken$HashedPswd = require("../../../utils/getTokenPswd")

const signUp = async (req, res) => {
  const { name, userName, password, email } = req.body
  try {
    const { token, encryptedPswd } = await getToken$HashedPswd(
      userName,
      password
    )
    const user = await userModel.create({
      name,
      userName,
      password: encryptedPswd,
      email,
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
