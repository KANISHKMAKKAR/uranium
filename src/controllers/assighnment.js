let PLAYERS = function(req,res){


let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": ["soccer"]
               
           
       },
   ]

// let x=req.body.name

// if (x==players[0].name || x==players[1].name  || x==players[2].name || x==players[3].name || x==players[4].name ){
//     res.send("invalid")
// }

//  else
// {    
//     players.push(req.body)
// res.send(players)
// }

// let x=req.body.name
//     players.push(req.body)
// res.send(players)





// let x= req.body.name
// let f=1
// for (let i=0;i<players.length;i++){
    
//     if ( x===players[i].name){
//         f=0
//          }
//      }
//      if(f==1){
//          players.push(req.body)
//      }
//      else{
//          res.send("INVALID")
//      }


 


// if (x!=players[0].name && x!=players[1].name && x!=players[2].name && x!=players[3].name && x!=players[4].name){
//     players.push({name:x , dob: y , gender: z , city: p , sports: q})
//      res.send(players)
// } else{
//     res.send("invalid")
// } 

}
module.exports.PLAYERS=PLAYERS

// , dob: y , gender: z , city: p