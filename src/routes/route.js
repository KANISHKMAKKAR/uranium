const express = require('express');
const log = require ('../logger/logger')
const logg = require ('../util/helper')
const format= require ('../validater/formatter')
const lodash = require ('lodash')
const router = express.Router();
const month=["January","February","March","April","May","June","July","August","September","October","November","December"]
const arr=[1,3,5,7,9,11,13,15,17]
let arr1=[1,2,3]
    let arr2=[1,2,3,4]
    let arr3=[1,2,3,4,5]
    let arr4=[1,2,3,4,5,6]
    let arr5=[1,2,3,4,5,6,7]
    const pairs = [["horror", "The Shining"], ["drama", "Titanic"], ["thriller", "Shutter Island"], ["fantasy", "Pans Labyrinth"]]

router.get('/hello',function(req,res){
    res.send("hey!")
 console.log(lodash.chunk(month,4))
 console.log(lodash.tail(arr))
 console.log(lodash.union(arr1,arr2,arr3,arr4,arr5))
    console.log(lodash.fromPairs(pairs))


})

router.get('/test-me', function (req, res) {
    console.log("hgjhgjhg")
    log.a()
    res.send('My first ever api!')
});
router.get('/test-me1', function (req, res) {
    console.log('date is',logg.DATE)
    res.send('date')
});
router.get('/test-me2', function (req, res) {
    console.log('month is',logg.MONTH)
    res.send('month')
});

router.get('/test-me3', function (req, res) {
    console.log('BATCH',logg.BATCH)
    res.send('BATCH')
});
router.get('/test-me4', function (req, res) {
    console.log()
    format.trim()
    res.send('trimmed')
});


router.get('/test-me5', function (req, res) {
    console.log()
    format.lower()
    res.send('lowercase')
});


router.get('/test-me6', function (req, res) {
    console.log()
    format.upper()
    res.send('uppercase')
});




module.exports = router;
// adding this comment for no reason