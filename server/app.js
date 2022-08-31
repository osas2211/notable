require("dotenv").config()
const express = require("express")
const http = require("http2")
const cors = require("cors")
const app = express()

// essential middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT || 4000

http.createServer(app).listen(PORT, ()=>{
  console.log(`server is running at PORT ${PORT}`)
})
