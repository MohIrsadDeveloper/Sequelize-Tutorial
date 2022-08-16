const express = require('express');
const {  userController } = require('../controllers/user');
const router = express();


router.get("/user", userController);


module.exports = router;