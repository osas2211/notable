const { Schema, model } = require("mongoose")

const reference_notes = {
  type: Schema.Types.ObjectId,
  ref: "Note",
}

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "email already exist"],
  },
  userName: {
    type: String,
    maxLength: [20, "username characters must not exceed 20"],
    minLength: [4, "username characters must not be below 4"],
    required: [true, "userName is required"],
    unique: [true, "userName already exist"],
  },

  password: {
    type: String,
    required: [true, "Password is required"],
  },
  avatarURL: {
    type: String,
    default: "",
  },

  notes: [reference_notes],
  collab_notes: [reference_notes],
  quicknotes: {
    type: [],
    default: [],
  },

  invitations: [
    new Schema({
      noteID: {
        type: String,
      },
      ownerID: {
        type: String,
      },
      label: {
        type: String,
      },
    }),
  ],

  token: {
    type: String,
  },
})

module.exports = model("User", userSchema)
