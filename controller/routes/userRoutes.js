const express = require('express');
const user = require('../userController/userController');
const router = express.Router();

router.get('/', user.getLogin);

router.get('/userRegister', user.createUser);

router.post('/user', user.getUsers);

router.get('/userInfo', user.getInfo);

router.post('/user/register', user.registerUsers);

module.exports = router;