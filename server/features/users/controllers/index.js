const userModel = require("../model")
const getToken$HashedPswd = require("../../../utils/getTokenPswd")

const signUp = async (req, res) => {
  const { name, userName, password, email } = req.body
  try {
    const { token, encryptedPassword } = await getToken$HashedPswd(
      {
        userName,
        email,
      },
      password
    )
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

const userControls = {
  signUp,
}

module.exports = userControls
