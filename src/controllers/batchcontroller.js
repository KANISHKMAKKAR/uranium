const batchmodel = require('../models/batch')

const batch = async function(req,res){
    let data = req.body
    let savedata = await batchmodel.create(data)
    res.send({msg:savedata})
}









module.exports.batch=batch