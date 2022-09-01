const { Schema, model } = require("mongoose")

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  userName: {
    type: String,
    maxLength: [20, "username characters must not exceed 20"],
    minLength: [4, "username characters must not be below 4"],
    required: [true, "userName is required"],
    unique: [true, "userName already exist"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "email already exist"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
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

module.exports = model("User", userSchema)
