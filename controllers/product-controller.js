
var Products = require("../models/products")

var getAllproducts = async(req,res)=>{
    var allProducts = await Products.find()
    res.status(200).json(allProducts)
}

var getSingleProduct = async(req,res)=>{
    var productId = req.params.id 
    var singleProduct = await Products.findById(productId)
    res.status(200).json(singleProduct)
}

var addNewProduct = async(req,res)=>{
    var productData = req.body
    var newProduct = await Products.create(productData)
    if(newProduct){
        res.status(201).json(newProduct)
    }else{
        res.status(404).json({message : "cannot add product"})
    }
}

var updateNewProduct = async(req,res)=>{
    var productId = req.params.id 
    var productData = req.body
    var updatedproduct = await Books.findByIdAndUpdate(productId,productData)
    if(updatedproduct){
        res.status(200).json(updatedproduct)
    }else{
        res.status(404).json({message : "cannot update"})
    }
}

var deleteProduct = async(req,res)=>{
    var productId = req.params.id 
    var deletedproduct = await Books.findByIdAndDelete(productId)
    if(deletedproduct){
        res.status(200).json(deletedproduct)
    }else{
        res.status(404).json({message : "cannot delete"})
    }
}

module.exports = {getAllproducts,getSingleProduct,addNewProduct,updateNewProduct,deleteProduct} 