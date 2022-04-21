const mongoose = require('mongoose')
const ObjectId= mongoose.Schema.Types.ObjectId

const userSchema = new mongoose.Schema( {
    name: String,
	balance:{type:Number,default:"100"}, // Default balance at user registration is 100
	address:String,
	age: Number,
 	gender:{ type:String, enum: ["male","female","others"]} ,// Allowed values are - “male”, “female”, “other”
	isFreeAppUser:{type:Boolean,default:false}// Default false value.
})

module.exports = mongoose.model('USERR', userSchema) //users




