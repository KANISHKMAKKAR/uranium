const express = require('express');
const router = express.Router();

const batchcontroller = require('../controllers/batchcontroller')
const developercontroller = require('../controllers/developercontroller')
// const a=require('../index')
// router.post('/createbatch', batchcontroller.batch)
// router.post('/createdeveloper', developercontroller.developer)

// router.get('/scholarship-developers',developercontroller.get)

// router.get('/query',developercontroller.query)
router.get('/middleware',batchcontroller.mid1)
// router.get('/middleware',index.a)
module.exports = router;