const express = require('express');
const router = express.Router();

const batchcontroller = require('../controllers/batchcontroller')
const developercontroller = require('../controllers/developercontroller')

router.post('/createbatch', batchcontroller.batch)
router.post('/createdeveloper', developercontroller.developer)

router.get('/scholarship-developers',developercontroller.get)

router.get('/query',developercontroller.query)
module.exports = router;