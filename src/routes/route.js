const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const User1Model= require('../models/bookschema')
const User2 = require('../controllers/bookcontroller')
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post('/BOOKS', User2.BOOK)
router.get('/Books1', User2.GBOOK)

module.exports = router;