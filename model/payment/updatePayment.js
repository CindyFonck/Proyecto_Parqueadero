const pool = require('../database/database');
const sqlQueries = require('../../model/sqlQueries/sqlPaymentQueries');

const updatePayment = async (payment, id) => {
    try {
        const result = await pool.query(sqlQueries.UPDATE_PAYMENT, [payment, id]);
        return result;
    } catch (error) {
        throw error;
    }
};
module.exports = updatePayment;