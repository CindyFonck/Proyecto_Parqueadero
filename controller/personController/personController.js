const response = require('../responses/responses');
const userQueries = require('../../model/user/userQueriesModule');
const personQueries = require('../../model/person/personQueriesModule');
const vehicleQueries = require('../../model/vehicle/vehicleQueriesModule');
const CryptoJS = require('crypto-js');

exports.optionRegisterPerson = async (req, res, next) => {
    try {
        res.render('register/optionRegister');

    } catch (error) {
        console.log(error);
    }
};


exports.getPersons = async (req, res, next) => {
    try {
        const persons = await personQueries.getPersons();
        console.log('persons: ' + JSON.stringify(persons));

        res.render('user/users', { persons });
    } catch (error) {
        console.log(error);
    }
};

exports.getPersonById = async (req, res, next) => {
    try {
        const { taxid } = req.body;
        const persons = await personQueries.getPersonByTaxid(taxid);
        console.log('REQPRO: ' + JSON.stringify(persons));

        res.render('user/users', { persons });

    } catch (error) {
        console.log(error);
    }
};

exports.addPerson = async (req, res, next) => {
    try {
        const { option } = req.body;
        console.log('option'+option);

        if (option == 1) {
            res.render('register/newRegisterPerson');
        } else if (option == 2) {
            res.render('register/newRegisterPersonTwo');
        }

    } catch (error) {
        console.log(error);
    }
};

exports.createPerson = async (req, res, next) => {
    try {
        const { type_taxid, taxid, name, lastname, address, phone, sign } = req.body;

        const phoneV = phone != undefined && phone != null? phone: null;
        const signV = sign != undefined && sign != null? sign: null;

        const newPerson = {
            Id_Type_ID: 1,
            Taxid: taxid,
            Names: name,
            Last_Name: lastname,
            Direction: address,
            Phone: phoneV,
            Sign: signV,
            Employee: 1,
            Created: new Date(),
            Updated: null,
        };

        const personResult = await personQueries.createPerson(newPerson);
        const personID = personResult.insertId;
        console.log('REQPRO: ' + JSON.stringify(personResult));

        res.render('register/newRegisterVehicle',  {personID});
    } catch (error) {
        console.log(error);
    }
};