const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const getToken$HashedPswd = async (payload, password) => {
  try {
    const encryptedPassword = await bcrypt.hash(password, 10)
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "2h",
    })
    return { token, encryptedPassword }
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = getToken$HashedPswd
