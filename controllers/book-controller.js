var express = require("express")

var Book = require("../model/Book")

var getAllBooks = async(req,res)=>{
    var allBooks = await Books.find()
    res.status(200).json(allBooks)
}

var getSingleBook = async(req,res)=>{
    var BookId = req.params.id
    var getSingleBook = await Books.findById(BookId)
    res.status(200).json(getSingleBook)
}

var addNewBook = async(req,res)=>{
    var Bookdata = req.body
    var newBook = await Books.create(Bookdata)
    if(newBook){
        res.status(201).json(newBook)
    }else{
        res.status(404).json({message : "cannot add"})
    }
}

var updateBook = async(req,res)=>{
    var BookId = req.params.id
    var updateddata = req.body
    var updatedBook = await Books.findByIdAndUpdate(BookId,updateddata)
    if(updatedBook){
        res.status(200).json(updatedBook)
    }else{
        res.status(404).json({message : "cannot find"})
    }
}

var deleteBook = async(req,res)=>{
    var BookId = req.params.id
    var deletedBook = await Books.findByIdAndDelete(BookId)
    if(deletedBook){
        res.status(404).json({message : "cannot delete"})
    }
}

module.exports = {
    getAllBooks,getSingleBook,addNewBook,updateBook,deleteBook
} 