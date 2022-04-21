const usermodel=require('../models/usermodel')
const productmodel=require('../models/productmodel')
const ordermodel=require('../models/ordermodel')



const newproduct = async function(req,res){
    let data = req.body
    let savedata = await productmodel.create(data)
    res.send({msg:savedata})

}



const newuser = async function(req,res){
    let data = req.body
    let savedata = await usermodel.create(data)
    res.send({msg:savedata})
}


const neworder =async function(req,res){
let data = req.body
let userId = data.userId
let productId = data.productId
let user = await usermodel.findById(userId)
let product = await productmodel.findById(productId)
let headers =  req.headers
let free = headers.isfreeappuser


// let Free = Object.keys(headers)[8]
if (!user) {
    res.send({ "msg": "userid is invalid" })
}

if (!product) {
    res.send({ "msg": "productid is invalid" })
}
if (free == 'false' && user.balance>=product.price){
    user.balance =  user.balance - product.price
    user.save()
    req.body.amount = product.price
    req.body.isFreeAppUser = false
    let savedata = await ordermodel.create(req.body)
    res.send({status:true,data:savedata})

} else if(free=='false'){
    res.send("USER DOESNOT HAVE ENOUGH BALANCE")

}else{
    req.body.amount = 0
    let savedata = await ordermodel.create(req.body)
    res.send({msg:savedata})
}
















// if (req.body.isFreeAppUser === "true") {
//     req.body.amount = 0;
//     let saveorder = await ordermodel.create(req.body)
//     res.send({ "data": saveorder })
// } else {
//     if (user.balance > product.price) {
//         req.body.amount = product.price
//         await usermodel.findOneAndUpdate({ _id: userId }, { balance: user.balance-product.price })
//         let saveorder = await ordermodel.create(req.body)
//         res.send({ "data": saveorder })
//     } else {
//         res.send(" doesn't have enough balance" )
//     }
// }




// if (!userId || !productId){
//     return res.send("Either user id is not present or product id")
// }
// if (!user || !product){
//     return res.send("either os userid or product id is invalid")
// }
// if (user && product){
//     let savedata = await ordermodel.create(data)
    
//     if (Free == true){
//         let order = await ordermodel.find({isFreeAppUser:true}).select
//     }
// }

}



module.exports.newproduct=newproduct
module.exports.newuser=newuser
module.exports.neworder=neworder
