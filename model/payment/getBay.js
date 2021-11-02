const pool = require('../database/database');
const sqlQueries = require('../../model/sqlQueries/sqlPaymentQueries');

const getBay = async () => {
    try {
        const result = await pool.query(sqlQueries.GET_BAY);
        return result;
    } catch (error) {
        throw error;
    }
};
module.exports = getBay;