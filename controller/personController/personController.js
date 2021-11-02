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
            res.render('register/newRegisterPersonTwo');
        } else if (option == 2) {
           
            res.render('register/newRegisterPerson');
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
            Employee: 0,
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

exports.getPersonByIdentify = async (req, res, next) => {
    try {
       const {id} = req.params;
        const person = await personQueries.getPersonById(id)
        console.log('REQPRO: ' + JSON.stringify(person));
        const personResult = person[0];

        res.render('update/updatePerson', { personResult });

    } catch (error) {
        console.log(error);
    }
};

exports.editProject = async (req, res, next) => {
    try {
        const {id} = req.params;
        const { type_taxid, taxid, name, lastname, address, phone, sign } = req.body;

        const person = await personQueries.getPersonById(id)

        const phoneV = phone != undefined && phone != null && phone != ''? phone: person[0].Phone;
        const signV = sign != undefined && sign != null  && sign != ''? sign: person[0].Sign;
        const taxidV = taxid != undefined && taxid != null  && taxid != ''? taxid: person[0].Taxid;
        const nameV = name != undefined && name != null  && name != ''? name: person[0].Names;
        const lastnameV = lastname != undefined && lastname != null  && lastname != ''? lastname: person[0].Last_Name;
        const addressV = address != undefined && address != null  && address != ''? address: person[0].Direction;

        const updatePerson = {
            Id_Type_ID: 1,
            Taxid: taxidV,
            Names: nameV,
            Last_Name: lastnameV,
            Direction: addressV,
            Phone: phoneV,
            Sign: signV,
            Updated: new Date(),
        };

        console.log('REQ3: ' + JSON.stringify(updatePerson));
        const personResult = await personQueries.updatePerson(updatePerson, id);

        const persons = await personQueries.getPersons();
        res.render('user/users', {persons});
    } catch (error) {
        res.redirect('/error');
        console.log(error);
    }
};