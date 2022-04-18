const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publishercontroller =require('../controllers/publishercontroller')


router.post("/newAuthor", authorController.newAuthor  )

router.put('/prac5'. bookController.kanishk)

// router.post("/createBook", bookController.createBook  )
router.get("/findbook", bookController.findbook  )
router.post('/newPublisher', publishercontroller.newPublisher)
router.put('/updatebook',bookController.updateBook)
router.put('/updateprice',bookController.updateBookPrice)
router.put('updateB',bookController.updateB)
router.put('/attri',bookController.practice)
router.post('/createbook',bookController.create)


module.exports = router;