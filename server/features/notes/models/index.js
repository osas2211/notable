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
  created: {
    type: String,
    default: new Date().toISOString(),
  },
  collaborators: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
})

module.exports = model("Note", noteSchema)
