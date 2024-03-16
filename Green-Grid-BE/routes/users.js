var express = require('express');
var router = express.Router();
const {userAuth} =require('../middlewares/authorization');
const { getAllCourtData, singleCourtData,getslotsdata } = require('../controllers/userControllers');

router.get('/getallcourtdata',userAuth,getAllCourtData);
router.get('/getsinglecourtdata',userAuth,singleCourtData);
router.get('/getslotsdata',userAuth,getslotsdata);

module.exports = router;