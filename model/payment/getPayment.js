const pool = require('../database/database');
const sqlQueries = require('../../model/sqlQueries/sqlPaymentQueries');

const getPersons = async () => {
    try {
        const result = await pool.query(sqlQueries.GET_PAYMENT);
        return result;
    } catch (error) {
        throw error;
    }
};
module.exports = getPersons;