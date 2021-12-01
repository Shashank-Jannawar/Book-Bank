const mongoose = require("mongoose")

let bookInfo = new mongoose.Schema({
    book_name: {type:String,default:null},
    book_owner: {type:String, default: null},
    type: {type: String, default: null},
    book_image_name: {type: String, default: null}, 
})

module.exports = mongoose.model('bookDetails',bookInfo);