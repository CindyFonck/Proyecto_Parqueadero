const pool = require('../database/database');
const sqlQueries = require('../../model/sqlQueries/sqlVehicleQueries');

const getVehicles = async () => {
    try {
        const result = await pool.query(sqlQueries.GET_VEHICLES);
        return result;
    } catch (error) {
        throw error;
    }
};
module.exports = getVehicles;