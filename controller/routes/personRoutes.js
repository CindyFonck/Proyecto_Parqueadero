const express = require('express');
const person = require('../personController/personController');
const router = express.Router();

router.get('/person/option', person.optionRegisterPerson);

router.get('/person', person.getPersons);

router.post('/person/taxid', person.getPersonById);

router.post('/person/form', person.addPerson);

router.post('/person/register', person.createPerson);

router.post('/person/update/:id', person.editProject);

router.get('/person/update/:id', person.getPersonByIdentify);

module.exports = router;