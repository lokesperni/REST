require("dotenv").config()

var express = require("express")

var connectToDatabase = require("./database/db")

var cors = require("cors")

var bookRoute = require("./routes/book-route")

var app = express()

connectToDatabase()

app.use(express.json())

app.use(cors())

app.use("/api/books",bookRoute)

var PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log("The server is running");
}) 
