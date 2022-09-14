require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connectDB = require("./db/connectDB")
const startApp = require("./utils/startApp")
const userRoutes = require("./features/users/routes")
const noteRoutes = require("./features/notes/routes")
const quickNoteRoutes = require("./features/notes/quicknotes")
const auth = require("./middlewares/auth")
const app = express()

// essential middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1/user", userRoutes)
app.use("/api/v1", auth, noteRoutes)
app.use("/api/v1", auth, quickNoteRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT, startApp(connectDB))
