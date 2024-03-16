var express = require('express');
const { doSignup, doLogin } = require('../controllers/authController');
var router = express.Router();

/* GET home page. */
router.post('/dosignup',doSignup);
router.post('/doLogin',doLogin);

module.exports = router;