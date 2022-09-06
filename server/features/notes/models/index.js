const { Schema, model } = require("mongoose")

const noteSchema = new Schema({
  label: {
    type: String,
  },
  imgUrl: {
    type: String,
  },
  textContent: {
    type: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  collaborators: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
})

module.exports = model("Note", noteSchema)
