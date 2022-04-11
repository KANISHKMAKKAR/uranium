const mongoose = require('mongoose');
// const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
 firstname:  String,  
  lastname: String,
  mobile:  {type :String,
           unique: true,
           maxlength : 10,
           minlength : 10,
           required : true
        },
        emailId : String,
        gender: {type: String,
             enum: ["male","female","LGBTQ","others :please specify"],
            
            },
        age: Number,
        isIndian : Boolean,
        parentsInfo : {
            motherName : String,
            fatherName : String,
            siblingName : String,
        },
        cars: [ String ],

        },
        {timestamps : true}
        );
        module.exports = mongoose.model('User', userSchema)





        //   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }