const batchmodel = require('../models/batch')
let dateTime = require('node-datetime')

const batch = async function(req,res){
    let data = req.body
    let savedata = await batchmodel.create(data)
    res.send({msg:savedata})
}
const mid1= async function(req,res,next){
   
    let DT = dateTime.create();
    let format = DT.format('d/m/Y H:M:S')
    let ipAdd = req.ip
    let url = req.url
    console.log( format, ipAdd, url)
    // res.send("Over and OUT")
    next()
}




module.exports.batch=batch
module.exports.mid1=mid1