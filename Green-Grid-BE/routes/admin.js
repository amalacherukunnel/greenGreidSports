var express = require('express');
const { adminAuth } = require('../middlewares/authorization');
const { createnewcourt, createCourtshedules } = require('../controllers/adminController');
var router = express.Router();
const multer =require('multer')

const storage=multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'public/assets')
  },
  filename:function(req,file,cb){
    cb(null,file.fieldname+'-'+Date.now() +file.originalname)
  }
})
const upload=multer({storage:storage})
router.post('/createnewcourt',adminAuth,upload.array('files'),createnewcourt );
router.post('/createschedules',adminAuth,createCourtshedules );

module.exports = router;