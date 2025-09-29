var mongoose = require("mongoose")

var productSchema = new mongoose.Schema({
    title : String,
    price : Number,
    author : String,
    isActive : Boolean
})

module.exports = mongoose.model("products",productSchema)