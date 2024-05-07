require("dotenv").config()
const express = require("express")
const { connectDB } = require("./config/db.js")

const server = express()
connectDB()
server.use(express.json())



server.use("*", (req, res, next) => {
  return res.status(404).json(`error 404: route not found`)
})

server.listen(3000, ()=> {
   console.log(`server launched at: http://localhost:3000`)
})