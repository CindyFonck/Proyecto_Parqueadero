const express = require('express');
const person = require('../personController/personController');
const router = express.Router();

router.get('/person/option', person.optionRegisterPerson);

router.get('/person', person.getPersons);

router.post('/person/taxid', person.getPersonById);

router.post('/person/form', person.addPerson);

router.post('/person/register', person.createPerson);

module.exports = router;