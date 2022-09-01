require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connectDB = require("./db/connectDB")
const startApp = require("./utils/startApp")
const userModel = require("./features/users/model")
const app = express()

// essential middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/api/v1/signup", async (req, res) => {
  const { name, userName, password } = req.body
  try {
    const user = await userModel.create({
      name,
      userName,
      password,
    })
    res.status(200).json({ success: true, user })
  } catch (err) {
    res.status(400).json({ success: false, msg: err.message })
  }
})

const PORT = process.env.PORT || 4000

app.listen(PORT, startApp(connectDB))
