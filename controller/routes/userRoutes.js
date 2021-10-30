const express = require('express');
const user = require('../userController/userController');
const router = express.Router();

router.get('/user', user.getUsers);

module.exports = router;