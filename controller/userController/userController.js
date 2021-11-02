const response = require('../responses/responses');
const userQueries = require('../../model/user/userQueriesModule');
const personQueries = require('../../model/person/personQueriesModule');
const vehicleQueries = require('../../model/vehicle/vehicleQueriesModule');
const CryptoJS = require('crypto-js');

exports.getLogin = async (req, res, next) => {
    try {
        res.render('index');
    } catch (error) {
        console.log(error);
    }
};

exports.createUser = async (req, res, next) => {
    try {
        res.render('register/newRegister');
    } catch (error) {
        console.log(error);
    }
};

exports.getUsers = async (req, res, next) => {
    try {
        const { username, pass } = req.body;
        console.log('REQ: ' + JSON.stringify(req.body, getCircularReplacer()));
        const user = await userQueries.getUserByUsername(username, pass);
        console.log('REQPRO: ' + JSON.stringify(user));
        if (user.length == 0) {
            req.flash('message', 'Contraseña y/o email incorrecto');
            res.redirect('/');
        } else {
            const users = await userQueries.getUsers();
            const persons = await personQueries.getPersonCount();
            const vehicles = await vehicleQueries.getVehicleCount();

            const numPersons = persons[0].value;
            const numVehicles = vehicles[0].value;
            console.log('persons: ' + JSON.stringify(persons));

            res.render('dashboard/dashboard', { users, numPersons, numVehicles });
        }

    } catch (error) {
        console.log(error);
    }
};

exports.getInfo = async (req, res, next) => {
    try {
        const users = await userQueries.getUsers();
        const persons = await personQueries.getPersonCount();
        const vehicles = await vehicleQueries.getVehicleCount();

        const numPersons = persons[0].value;
        const numVehicles = vehicles[0].value;
        console.log('persons: ' + JSON.stringify(persons));
        console.log('numPersons: '+numPersons);

        res.render('dashboard/dashboard', { users, numPersons, numVehicles });


    } catch (error) {
        console.log(error);
    }
};

exports.registerUsers = async (req, res, next) => {
    try {
        const { email, pass, address, taxid, lastname, name } = req.body;
        console.log('REQ: ' + JSON.stringify(req.body, getCircularReplacer()));

        const newPerson = {
            Id_Type_ID: 1,
            Taxid: taxid,
            Names: name,
            Last_Name: lastname,
            Direction: address,
            Phone: null,
            Sign: null,
            Employee: 1,
            Created: new Date(),
            Updated: null,
        };

        const personResult = await personQueries.createPerson(newPerson);
        const personID = personResult.insertId;
        console.log('REQPRO: ' + JSON.stringify(personResult));

        const newUser = {
            Id_Person: 1,
            Id_Post: 1,
            E_mail: email,
            Password: pass,
            Created: new Date(),
            updated: null,
        };

        const userResult = await userQueries.createUser(newUser);
        const userID = userResult.insertId;
        console.log('REQPRO: ' + JSON.stringify(userResult));

        req.flash('success', 'Usuario creado con exito');
        res.redirect('/');

    } catch (error) {
        console.log(error);
    }
};


const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
};