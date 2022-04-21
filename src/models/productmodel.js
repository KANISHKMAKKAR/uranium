const mongoose = require('mongoose')
const ObjectId= mongoose.Schema.Types.ObjectId


const productSchema = new mongoose.Schema( {
    
		
    name:String,
    category:{type:String},
    price:{type:Number,required:true} //mandatory property
})

module.exports = mongoose.model('PRODUCT', productSchema)