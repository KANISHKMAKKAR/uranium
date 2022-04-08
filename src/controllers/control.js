let addtoarray=function (req, res){
    let x =req.body.element
    console.log(x)
    let rar = [3,4,5,6]
    rar.push(x)
    res.send ( {   msg : "KANISHK" , data:rar } )
    }
    module.exports.addtoarray=addtoarray