const { Schema, Model } = require("mongoose")

const userSchema = new Schema({
  name: {
    type: [String, "name must be of type string"],
  },
  userName: {
    type: [String, "name must be of type string"],
    maxLength: [20, "username characters must not exceed 20"],
    minLength: [4, "username characters must not be below 4"],
  },
  password: {
    type: String,
  },
  avatarURL: {
    type: String,
    default: "",
  },
  notes: {
    type: [],
    default: [],
  },
  quicknotes: {
    type: [],
    default: [],
  },
})

module.exports = Model("User", userSchema)
