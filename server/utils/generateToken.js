const jwt = require("jsonwebtoken")

const generateToken = async (payload) => {
  try {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "2h",
    })
    return { token, encryptedPassword }
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = generateToken
