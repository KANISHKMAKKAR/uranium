const express = require('express');
const router = express.Router();


const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createBook", BookController.createBook  )
router.get('/bookList', BookController.bookList)
router.get('/booksinyear', BookController.booksinyear)
router.post("/getParticularBooks", BookController.getParticularBooks)

router.get("/getXINRBooks", BookController.getXINRBooks)
router.get("/getRandomBooks", BookController.getRandomBooks)
router.get("/practice",BookController.practice)
module.exports = router;