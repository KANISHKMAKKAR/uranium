const developermodel = require('../models/developer')
const batchmodel=require('../models/batch')
const batch = require('../models/batch')
const { estimatedDocumentCount } = require('../models/batch')
const developer = async  function(req,res){
    let data = req.body
    let savedata = await developermodel.create(data)
    res.send({msg:savedata})
}

const get = async function(req,res){
    let result = await developermodel.find({$and:[{gender:"female"},{percentage:{$gte:"70"}}]})
    res.send({msg:result})
}
 const query = async function(req,res){
    let j = req.query.percentage
    let k = req.query.program
    let data = await  batchmodel.find({program:k}).select('_id')
    let savedata = await developermodel.find({batch:data,percentage:{$gte:j}})
    res.send({msg:savedata})


 }



module.exports = {developer,get,query}