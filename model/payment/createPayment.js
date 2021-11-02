const pool = require('../database/database');
const sqlQueries = require('../../model/sqlQueries/sqlPaymentQueries');

const createPayment = async (payment) => {
    try {
        const result = await pool.query(sqlQueries.CREATE_PAYMENT, payment);
        return result;
    } catch (error) {
        throw error;
    }
};
module.exports = createPayment;