const userModel = require("../model")
const bcrypt = require("bcrypt")
const generateToken = require("../../../utils/generateToken")
const { generateOTP } = require("../../../utils/generateOTP")
const authenticationFailed = require("../../../utils/authenticationFailed")
const { sendEmail } = require("../../../utils/email")
const {
  EmailVerificationTemplate,
} = require("../../../utils/verifyemail_template")

/********************************* AUTHENTICATION CONTROLS *********************************/

// POST User Sign Up
const signUp = async (req, res) => {
  const { name, userName, password, email } = req.body
  const otp = generateOTP(15)
  try {
    const encryptedPassword = await bcrypt.hash(password, 10)
    const user = await userModel.create({
      name,
      userName,
      password: encryptedPassword,
      email,
      otp: otp,
    })
    const token = await generateToken({ userName, id: String(user._id) })
    user.token = token

    // Send Email Verification Message.
    const htmlBody = EmailVerificationTemplate(`
      ${process.env.BASE_URL}/user/email/verify/${user._id}/${otp}
    `)
    await sendEmail(email, "Verify Email Address", htmlBody)
    res.status(201).json({ userCreated: true, user })
  } catch (err) {
    res.status(400).json({ userCreated: false, message: err.message })
  }
}

// GET Verify Email
const verifyEmail = async (req, res) => {
  const { userID, otp } = req.params

  try {
    const user = await userModel.findById(userID)
    if (user.verified === true) {
      return res
        .status(200)
        .json({ email_verified: true, message: "user is already verified" })
    }
    if (user && user.otp === otp) {
      await user.updateOne({ $set: { verified: true, otp: "" } })
      return res.status(200).json({ email_verified: true })
    } else {
      return res
        .status(400)
        .json({ email_verified: false, message: "invalid parameters" })
    }
  } catch (error) {
    res.status(400).json({ email_verified: false, message: err.message })
  }
}

// POST User Sign In
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

const deleteAccount = async (req, res) => {
  const id = req.body.id
  try {
    await userModel.findByIdAndDelete(id)
    res.status(200).json({ deleted: true })
  } catch (error) {
    res.status(400).json({ deleted: false, message: error.message })
  }
}

const userControls = {
  signUp,
  verifyEmail,
  signIn,
  getUser,
  updateProfile,
  deleteAccount,
}

module.exports = userControls
