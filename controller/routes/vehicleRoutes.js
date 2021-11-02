const express = require('express');
const vehicle = require('../vehicleController/vehicleController');
const router = express.Router();

router.get('/vehicle', vehicle.getVehicle);

router.post('/vehicle/plate', vehicle.getVehicleById);

router.post('/vehicle/register', vehicle.createVehicle);

module.exports = router;