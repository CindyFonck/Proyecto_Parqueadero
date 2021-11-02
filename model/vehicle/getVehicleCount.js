const pool = require('../database/database');
const sqlQueries = require('../../model/sqlQueries/sqlVehicleQueries');

const getVehicleCount = async () => {
    try {
        const result = await pool.query(sqlQueries.GET_COUNT_VEHICLE);
        return result;
    } catch (error) {
        throw error;
    }
};
module.exports = getVehicleCount;