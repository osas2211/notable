const mongoose = require("mongoose")
const express = require("express")
const auth = require("../../../middlewares/auth")
const router = express.Router()

const quickNotesSchema = new mongoose.Schema({
  body: {
    type: String,
    min: [5, "total characters must be more than 5"],
    max: [300, "total characters must be less than 300"],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
})

const quickNotesModel = mongoose.model("quickNote", quickNotesSchema)

router.post("/quick-note", auth, () => {})
