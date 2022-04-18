const AuthorModel= require("../models/authorModel")

const newAuthor= async function (req, res) {
    let data = req.body
    let saveddata = await AuthorModel.create(data)
    res.send({msg: saveddata})
}


module.exports.newAuthor= newAuthor
