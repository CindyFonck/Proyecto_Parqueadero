const express = require('express');
const payment = require('../paymentController/paymentController');
const router = express.Router();

router.post('/bay', payment.getBayAndParking);

router.post('/payment/register', payment.getBayAndParking);

module.exports = router;