const otpGenerator = require("otp-generator")

module.exports.generateOTP = (length = 10) => {
  const otp = otpGenerator.generate(length, {
    digits: true,
    lowerCaseAlphabets: true,
    upperCaseAlphabets: true,
    specialChars: false,
  })

  return otp
}
