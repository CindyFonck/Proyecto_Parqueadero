const pool = require('../database/database');
const sqlQueries = require('../sqlQueries/sqlPaymentQueries');

const updateParking = async (parking, id) => {
    try {
        const result = await pool.query(sqlQueries.UPDATE_PARKING, [parking, id]);
        return result;
    } catch (error) {
        throw error;
    }
};
module.exports = updateParking;