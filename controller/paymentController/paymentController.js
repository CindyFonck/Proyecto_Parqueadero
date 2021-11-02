const response = require('../responses/responses');
const userQueries = require('../../model/user/userQueriesModule');
const personQueries = require('../../model/person/personQueriesModule');
const vehicleQueries = require('../../model/vehicle/vehicleQueriesModule');
const paymentQueries = require('../../model/payment/paymentQueriesModule');
const CryptoJS = require('crypto-js');

exports.getBayAndParking = async (req, res, next) => {
    try {
        const { bay_id, parking, vehicle } = req.body;
        var parkings;

        const bays = await paymentQueries.getBay();
        console.log('bays: ' + JSON.stringify(bays));

        if(bay_id != null && bay_id != undefined && bay_id != ''){
            parkings = await paymentQueries.getParkingByBay(bay_id);

            res.render('register/newRegisterPayment', { bays, parkings });
        }else{
            parkings = null;
        }

        if(bay_id != null && bay_id != undefined && bay_id != ''){

        }
        
        console.log('parkings: ' + JSON.stringify(parkings));

        res.render('user/users', { bays, parkings });
    } catch (error) {
        console.log(error);
    }
};


exports.createPayment = async (req, res, next) => {
    try {
        const { bay_id, parking, vehicle } = req.body;


        const newPayment = {
            Id_Bay: bay_id,
            Id_Vehicle: vehicle,
            Time: null,
            Cost: null,
            StartDate: new Date(),
            EndDate: null,
            Created: new Date(),
            Updated: null,
        };

        const paymentResult = await paymentQueries.createPayment(newPayment);
        console.log('REQPRO: ' + JSON.stringify(paymentResult));

        const newParking= {
            State: 1,
            Updated: new Date()
        };

        const parkingResult = await paymentQueries.updateParking(newParking, parking);
        console.log('REQPRO: ' + JSON.stringify(parkingResult));

        const persons = await personQueries.getPersons();
        res.render('user/users', {persons});
    } catch (error) {
        console.log(error);
    }
};
