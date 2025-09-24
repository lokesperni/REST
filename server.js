require("dotenv").config()

var express = require("express")

var connectToDatabase = require("./database/db")

var router = require("./routes/book-routes")

var app = express()

connectToDatabase()

app.use(express.json())

app.use("/api/book",router)

var PORT = process.env.PORT || 3333

app.listen(PORT,()=>{
    console.log("server is running");
    
}) 

