const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook = async function(req,res){
    let data =req.body
    let savedata=await BookModel.create(data)
    res.send({msg:savedata})
}

const bookList = async function(req,res){
    let bklist=await BookModel.find().select({bookName:1, authorName:1,_id:0})
    res.send({msg:bklist})
}

const booksinyear = async function(req,res){
    let yea = req.query.yea
    let bklist=await BookModel.find({year:yea})
    res.send({msg:bklist})
}
const getParticularBooks = async function (req, res) {
    let ran = req.body.bookName
let allBooks =  await BookModel.find(ran)
    res.send({msg: allBooks})
}



const getXINRBooks = async function (req, res) {
    let allBooks =  await BookModel.find({
        'prices.indianPrice':{$in:['100','200','300']}
    })
    res.send({msg: allBooks})
}

const getRandomBooks  = async function (req, res) {
    let allBooks =  await BookModel.find({
        $or: [{stockAvailable: false},{totalpages:{$gt: 50}}]
    }).count()
    res.send({msg: allBooks})
}


const practice  = async function (req, res) {
    let page=req.query.page
    let allBooks =  await BookModel.find({bookname:   /.* and .*/i})
    res.send({msg: allBooks})
}









// const getParticularBooks = async function(req,res)
// {
//   let condition = req.body
//   let particularBooks = await bookModel.find(condition)

//   res.send(particularBooks)
// }









module.exports = {createBook,bookList,booksinyear,getXINRBooks,getRandomBooks,getParticularBooks,practice}