const express = require('express');
const logger = require('./logger')

const router = express.Router();
let movie = ['AVENGERS','infinity war','endgame','wintersoldier','civil war','nowayhome']
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

module.exports = router;