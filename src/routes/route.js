const express = require('express');
const router = express.Router();
const controller = require('../controllers/allcontroller');
const { mid1 } = require('../middlewares/commonMiddlewares');


router.post('/newproduct', controller.newproduct)
router.post('/newuser', mid1 , controller.newuser)
router.post('/neworder', mid1 , controller.neworder)


module.exports = router;