# TOPIC: Middleware2

## Request
- Access headers
- Set headers
- Set attributes

## Response 
- Set headers
- Get headers

## Assignment

TOPIC: Middleware2

- For this assignment you have to create a new branch - assignment/middleware2
- Your user document should look like this
```
{ 
    _id: ObjectId("61951bfa4d9fe0d34da86829"),
    name: "Sabiha Khan",
	balance:100, // Default balance at user registration is 100
	address:"New delhi",
	age: 90,
 	gender: “female” // Allowed values are - “male”, “female”, “other”
	isFreeAppUser: false // Default false value.
}
```

- Your product document should look like this
```
{
	_id: ObjectId("61951bfa4d9fe0d34da86344"),
	name:"Catcher in the Rye",
	category:"book",
	price:70 //mandatory property
}
```

Your Order document looks like this.
```
{
	_id: ObjectId("61951bfa4d9fe0d34da86344"),
	userId: “61951bfa4d9fe0d34da86829”,
	productId: “61951bfa4d9fe0d34da86344”
	amount: 0,
	isFreeAppUser: true, 
	date: “22/11/2021”
}
```


NOTE: In some of the below apis a header validation is to be performed (create user and create order). The name of the header is ‘isFreeAppUser’. Write a header validation that simply checks whether this header is present or not. Please note this validation should only be called in create user and create order apis. Perform this validation in a middleware.

- Write a POST api to create a product from the product details in request body. 
- Write a POST api to create a user that takes user details from the request body. If the header **isFreeAppUser** is not present terminate the request response cycle with an error message that the request is missing a mandatory header
- Write a POST api for order purchase that takes a userId and a productId in request body. 
If the header isFreeAppUser is not present terminate the request response cycle with an error message that the request is missing a mandatory header
If the header is present the control goes to the request handler. Perform the user and product validation. Check if the user exists as well as whether the product exists. Return an error with a suitable error message if either of these validations fail
For every purchase we save an order document in the orders collection. isFreeAppUser property in an Order document depends on the header **isFreeAppUser**. If the **isFreeAppUser** header is true then the balance of the user is not deducted and the amount in order is set to 0 as well the attribute in order **isFreeAppUser** is set to true. If this header has a false value then the product’s price is checked. This value is deducted from the user’s balance and the order amount is set to the product’s price as well as the attrbiute **isFreeAppUser** is set to false in order document.
- Update the logic in middleware to set the **isFreeAppUser** attribute in req. Use this attribute in the route handler for setting the isFreeAppUser attributes of User and Order collection. 

### Hints for problem 3

1. Validate the header in a middleware. Terminate the req-res cycle if this fails.
2. Validate the userId. Send error if userId is invalid
3. Validate the productId. Send the error if productId is invalid
4. Now write the logic for order creation. 3 scenarios
//Scenario 1
For paid user app and the user has sufficient balance. We deduct the balance from user's balance and update the user. We create an order document

//Scenaio 2
For paid app user and the user has insufficient balance. We send an error that the user doesn't have enough balance

//Scenario 3
For free app user, we dont check user's balance and create the order with 0 amount.



app.use(function(req, res, next) {
    console.log('This is a global middleware')
    //Adding a property in request object
    req['current-day'] = 'Wednesday'
    next()
})
const req = require("express/lib/request")
const UserModel= require("../models/userModel")

const basicCode= async function(req, res) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)
    //counter
    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
    
    }


const createAUser = function(req, res) {
    let requestBody = req.body
    let headers  = req.headers
    

    //Printing all the headers before modification - addition of a new header called 'month'
    console.log('Request headers are before: ', headers)

    //Accessing a request header called 'batch'
    let batchHeader = headers["batch"] // headers.batch 
    
    ///Accessing a request header called 'content-type'
    let contentHeader = headers['content-type'] // headers.content-type

    console.log('Content Type hedser is: ',contentHeader)
    console.log('Batch header is: ', batchHeader)

    //Adding a new requets header
    req.headers["month"] = 'April' //req.headers.month = 'April' or req.headers["month"] = 'April'


    //Printing the headers after modification - addition of a new header called 'month'
    console.log('Request headers are after: ', headers)


    console.log('Request property called current-day', req['current-day'])
    
    //Adding a response header
    res.header('year', '2022')

    res.send('Just create a user')
}

module.exports.createAUser = createAUser
module.exports.basicCode = basicCode













// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
//const BookController= require("../controllers/bookController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


// router.post("/createUser", UserController.createUser  )
// router.get("/getUsersData", UserController.getUsersData)


// const mid1= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid1")
//     // logic
//     let loggedIn = false

//     if (loggedIn== true) { 
//         console.log( "OK LOGGED IS IS TRUE NOW")
//         next ()
//     }
//     else {
//         res.send ("Please login or register")
//     }
// }

// // e.g. restricted and open-to-all API's can be handled like below now:
// router.get('/homePage', mid1, UserController.feeds)
// router.get('/profileDetails', mid1, UserController.profileDetails)
// router.get('/friendList', mid1, UserController.friendList)
// router.get('/changePassword', mid1, UserController.changePassword)

// router.get('/termsAndConditions',  UserController.termsAndConditions)
// router.get('/register',  UserController.register)





router.get("/basicRoute", UserController.basicCode)
router.post('/create-a-user', UserController.createAUser)



// router.get("/basicRoute2", commonMW.mid1, UserController.basicCode2)
// router.get("/basicRoute3", commonMW.mid2, UserController.basicCode3)
// router.get("/basicRoute4", commonMW.mid1, commonMW.mid4, UserController.basicCode4)


















const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode