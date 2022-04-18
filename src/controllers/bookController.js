const e = require("express")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publishermodel")
const newPublisher=require('../models/publishermodel')
const { newAuthor } = require("./authorController")

const createBook = async (req,res) => {
    let data = req.body
    if(data.author && data.publisher){
        let a_check = await authorModel.find({_id: data.author}).select("_id")
        let p_check = await publisherModel.find({_id: data.publisher}).select("_id").lean()
        if(!a_check.length && !p_check.length) 
            res.send({msg: "Author and Publisher Id fields dosen't match our data, hence invalid"})
        else if(!a_check.length && p_check.length) 
            res.send({msg: "Author Id field dosen't match our data, hence invalid"})
        else if(a_check.length && !p_check.length)
            res.send({msg: "Publisher Id field dosen't match our data, hence invalid"})
        else {
            if(!await bookModel.exists(req.body)){ 
                let savedData= await bookModel.create(req.body)
                res.send({msg: savedData})
            } else res.send({msg: "This Book already exits in the collection"})
}
    }
    else if(!data.author && data.publisher) res.send({msg: "You Must input Author ObjectId"})
    else if(data.author && !data.publisher) res.send({msg: "You must input Publisher ObjectId"})
    else res.send({msg: "You must input Author and Publisher objectId in Book Data"})
} 


const findbook= async function (req, res) {
    let d=await bookModel.find().populate('author').populate('publisher')
res.send({msg:d})
}

const updateBook = async (req,res) => {
    let find_PId = await publisherModel.findOne({name: req.body.publisher}).select('_id')
    let data = await bookModel.updateMany(
                                        {publisher: find_PId},
                                        {$set: {isHardCover: true}}
                                        )
    res.send({msg:data})
}

const updateBookPrice = async (req,res) => {
    let data = await bookModel.updateMany(
                                        {rating: {$gt: 3.5}},
                                        {$inc: {price: 10}}
                                        )
    res.send({msg: data})
}
const updateB = async (req,res) => {
    let a_filter = await authorModel.find({rating: {$gt: 3.5}})
    await bookModel.updateMany({author: a_filter}, {$inc: {price: 10}})
    let data = await bookModel.find({author:a_filter})
    res.send({msg: data})
}




const attri = async function(req,res){
let abcd = await bookModel.updateMany({ratings:{$gt:1}} , {$set:{isHardCover:{type:Boolean,default:false}}},{new:true})
res.send({msg:abcd})
}
const create = async function(req,res){
    let book = req.body
    let authorid = book.author
    let publisherid = book.publisher
    let author = await authorModel.findById(authorid)
    let publisher = await publisherModel.findById(publisherid)
    if(!authorid){
       return res.send({status:false,msg:"kindly add author id "})
    }

    if(!author){return res.send({msg:'Notvalid author id'})}

   
     if(!publisherid){
    return res.send({status:false,msg:'kindly add publisher id'})}
    if(!publisher){return res.send({Msg:"Not valid publisher id"})}
    
    let savedata = await bookModel.create(book)
    res.send({msg:savedata})
}

const kanishk = async function(req,res){
    let publishers = await publisherModel.find({name:{$in:['Penguin',"HArperCollins"]}})
    let requiredbooks = await bookModel.updateMany({publisher:publishers},{isHardCover:true},{new:true})
res.send ({msg:requiredbooks})
}

const practice = async function(req,res){
    let authors = await authorModel.find({rating:{$gt:3.5}}).select({id:1})  
   let books = await bookModel.updateMany({author:authors},{$inc:{price:-10}})
//    update hardcover to true for penguin and harrpercolllins
   res.send({data :books})
}




module.exports={practice,create,createBook,updateBook,updateBookPrice,findbook,updateB,attri,kanishk}















// const createBook = async function(req,res){
//     let data = req.body
//     let saveddata = await bookModel.create(data)
//     res.send({msg:saveddata})
// }