const pool = require('../database/database');
const sqlQueries = require('../../model/sqlQueries/sqlPaymentQueries');

const getParkingByBay = async (id) => {
    try {
        const result = await pool.query(sqlQueries.GET_PARKING_BY_BAY, id);
        return result;
    } catch (error) {
        throw error;
    }
};
module.exports = getParkingByBay;