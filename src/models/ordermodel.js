const mongoose = require('mongoose')
const ObjectId= mongoose.Schema.Types.ObjectId



const orderSchema = new mongoose.Schema( {
	userId: {type:ObjectId,ref:'USER'},
	productId:{type:ObjectId,ref:'PRODUCT'},
	amount: Number,
	isFreeAppUser:{type:Boolean}, 
	date:Date
})

module.exports = mongoose.model('ORDER', orderSchema)
