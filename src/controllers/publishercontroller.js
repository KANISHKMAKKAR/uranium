const publisherModel = require('../models/publishermodel')
  

const newPublisher = async function (req, res) {
    let data = req.body
    let saveddata = await publisherModel.create(data)
    res.send({msg: saveddata})
}
module.exports.newPublisher = newPublisher