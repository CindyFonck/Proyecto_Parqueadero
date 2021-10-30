const response = require('../responses/responses');
// const transactionCommands = require('../infraestructure/infraestructure/queries/dbTransaction/dbTransactionCommandsModule');
const CryptoJS = require('crypto-js');

exports.getUsers = async (req, res, next) => {
    try {
        const result = {};


        result.state = true;
        result.num = numRecords.num;
        result.data = blockchainResult[0];

        response.success(req, res, result, 201, 'success!');
    } catch (error) {
        console.log(error.message);
        response.error(req, res, 'Error', 400, error.message);
    }
};