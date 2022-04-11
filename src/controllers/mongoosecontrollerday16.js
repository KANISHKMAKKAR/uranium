const UserModel =require("../models/usermodelday16")



let usser = async function (req, res) {
    
    let data = req.body
    let savedata = await UserModel.create(data)
    
    
        res.send({ msg: savedata})
    }
    let ggetuser= async function (req, res) {
        let alluser=  await UserModel.find()
    
    
        res.send({msg : alluser})
    }
    module.exports.usser=usser
    module.exports.ggetuser=ggetuser