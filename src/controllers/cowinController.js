let axios = require("axios")



let getdist = async function(req,res){
    try{ 
        let id = req.query.district_id
        let date = req.query.date
        let options = {
            method:'get',
            url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`

        }
        let result = await axios(options)
        res.status(200).send({msg:result.data})

    }
    catch(err){
        console.log(err)
         res.status(500).send({ msg: err.message })

}
} 
let getlondontemp = async function(req,res){
   try{ 
       let city = req.query.q
    let appid = req.query.appid
    let options = {
        method:'get',
        url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`}
        let result = await axios(options)
      let r = result.data.main.temp
      console.log(r)
        
        res.status(200).send({msg:r})
    }catch(err){
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let sortedcities = async function(req,res){
 try{   let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    let cityobjarray =[]
    console.log(cities,cityobjarray)
    
    
    for (let i=0;i<cities.length;i++){
        let obj = {city: cities[i]}
        let options = { 
            method:'get',
            url:`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=274201cd5fd9cb24e043084918c1aa2c`
        }
        let result = await axios(options)
         obj.temp=result.data.main.temp
         cityobjarray.push(obj)
         console.log(result,cityobjarray)
    }
    let sorted =  cityobjarray.sort(function(a,b){return a.temp-b.temp})
    console.log(sorted)
    res.status(200).send({data:sorted})}
    catch(err){
        res.status(500).send({msg:'server error'})
    }
}
let memes = async function(req,res){
    try{
        let id = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let user = req.query.username 
        let pass = req.query.password
        let options = {
            method:'post',
           
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${user}&password=${pass}`
        }
        let result = await axios(options)
        
        res.status(200).send({msg: result.data})
    }catch(err){
        res.status(500).send({msg: err.message})
    }
}
let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


// module.exports.getStates = getStates
// module.exports.getDistricts = getDistricts
// module.exports.getByPin = getByPin
// module.exports.getOtp = getOtp
module.exports={getdist,getlondontemp,memes,sortedcities,getOtp,getByPin,getDistricts,getStates}
