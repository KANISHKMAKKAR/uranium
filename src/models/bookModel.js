const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
     {
    name: {type:String}, 
    author_id: {type:Number,required:true}, 
   
     price:Number, 
    ratings: Number
} );


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
