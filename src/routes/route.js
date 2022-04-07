const { query } = require('express');
const express = require('express');
const logger = require('./logger')

const router = express.Router();
let arr = ["kanishk","rahul","amit","prince","hardik","harish","harsh","sagar","akash","kunal"]

// router.get('/test-me', function (req, res) {
//     console.log('------------------')
//     console.log(req)
//     console.log('------------------')
//     console.log('These are the request query parameters: ', req.query)
//     res.send('My first ever api!')
// });
router.get('/all-candidates', function (req, res) {
    
    res.send(arr)
});
router.get('/candidates', function (req, res) {
let result =[]
let j=req.query.count
if (j<=10){
for (i=0;i<j;i++){
    let a
    result.push(arr[i])
}

res.send(result)}
else res.send("ERROR")
});
router.get('/user-profile/:abcd',function (req,res)
{
console.log(req.params.abcd)
res.send('this is it')
});
module.exports = router;
// adding this comment for no reason