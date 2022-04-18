const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newbook = new mongoose.Schema( {
    
		
        name:String,
            author:{type:ObjectId, ref:'newAuthor'},
        price:Number,
        ratings:Number,
		publisher: {type:ObjectId,ref:'newPublisher'},
        isHardCover :{type:Boolean,default:false}
    


});


module.exports = mongoose.model('LibraryBook', newbook)
