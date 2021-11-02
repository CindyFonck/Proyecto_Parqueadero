const response = require('../responses/responses');
const userQueries = require('../../model/user/userQueriesModule');
const personQueries = require('../../model/person/personQueriesModule');
const vehicleQueries = require('../../model/vehicle/vehicleQueriesModule');
const CryptoJS = require('crypto-js');


exports.getVehicle = async (req, res, next) => {
    try {
        const vehicle = await vehicleQueries.getVehicles();
        console.log('vehicle: ' + JSON.stringify(vehicle));

        res.render('vehicle/vehicle', { vehicle });
    } catch (error) {
        console.log(error);
    }
};

exports.getVehicleById = async (req, res, next) => {
    try {
        const { plate } = req.body;
        const vehicle = await vehicleQueries.getVehicleByPlate(plate);
        console.log('REQPRO: ' + JSON.stringify(vehicle));

        res.render('vehicle/vehicle', { vehicle });
    } catch (error) {
        console.log(error);
    }
};

exports.createVehicle = async (req, res, next) => {
    try {
        const {type, plate, brand, id } = req.body;

        const newVehicle = {
            Id_Person: 1,
            Id_Type: 1,
            Brand: brand,
            License_plate: plate,
            Created: new Date(),
            Updated: null,
        };

        const vehicleResult = await vehicleQueries.createVehicle(newVehicle);
        const vehicleID = vehicleResult.insertId;
        console.log('REQPRO: ' + JSON.stringify(personResult));

        res.render('register/newRegisterPayment', {vehicleID, id});
    } catch (error) {
        console.log(error);
    }
};