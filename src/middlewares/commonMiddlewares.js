const req = require("express/lib/request")

const mid1= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid1")
    
 
  let headers = req.headers.isfreeappuser
  

  if (!headers) 
  { res.send("Kindly add mandatory header")}
     else
    next()   
    
    
// let check = req.headers.isFreeAppUser
// if (check) {
//     req.body.isFreeAppUser = check
//     next()
// }else {
//     res.send({ "msg": " the request is missing a mandatory header" })
// }



}

module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
