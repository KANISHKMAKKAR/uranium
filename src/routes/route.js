const express = require('express');
const logger = require('./logger')
const addd = require("../controllers/control")
const router = express.Router();
let movie = ['AVENGERS','infinity war','endgame','wintersoldier','civil war',"  KANISHK MAKKAR"]
let film=[ {
    id: 1,
    name: 'The Shining'
   },
    {
    id: 2,
    name:'Incendies'
   }, 
   {
    id: 3,
    name: 'Rang de Basanti'
   }, 
   {
    id: 4,
    name: 'Finding Nemo'
   }]



   
   
// router.get('/user-profile/:abcd', function(req, res) {
//     console.log(req)
//     console.log(req.params.abcd)
//     res.send('dummy response')
// })

// router.get('/test-me', function (req, res) {
//     console.log('------------------')
//     console.log(req)
//     console.log('------------------')
//     console.log('These are the request query parameters: ', req.query)
//     res.send('My first ever api!')
// });
router.get('/movies',function (req, res){
res.send(movie)
});
router.get('/movies/:indexnumber',function (req, res){
    let value = req.params.indexnumber
    let result=movie[value]
    if (value>movie.length){
        res.send("NOT A VALID INDEX")
    }
    else {res.send(result)}
    });
    router.get('/films/:filmId',function(req,res){
    let value=req.params.filmId
    let no =0
    for(let i=0;i<film.length;i++){
        if(film[i].id==value){
            res.send(film[i])
            no =1
            break
        }
    }
    
    if(no==0){
        res.send(" No movie exists with this id.")
    }
    
    
       })
       router.get('/films',function(req,res){
           res.send(film)
       })
    //    router.get('/array', function (req,res)
    //    {let a = [1,2,3,4,5,7,8,9]
    //     let n = a[a.length-1]
    //     let sum = (n * (n+1)/2)
    //     let add = 0
    //     for (let i = 0 ; i < a.length;i++ ){
    //         add = add + a[i]
    //     }
    //     let missingno = sum - add;
    //     // console.log(missingno)
           
    //        res.send('missingno',missingno) 

    //    })

    router.get('/assign',function (req,res){
        let ab = [32,33,34,35,37,38]
let sum =0
for (let i = 0; i < ab.length; i++) {
 sum = sum + ab[i]
}
let b = ((ab.length+1)/2) *(2*ab[0] + (ab.length)) - sum
let c = b
console.log("KANISHK")
    })
    
    router.post('/tesst',function (req, res){
        console.log(req.body)
        res.send ( {   msg : "KANISHK"  } )
        });  

        //write a post request to accept an element in post request body and add it to the given array and return the new array
        router.post('/tesst1' , addd.addtoarray)

module.exports = router;