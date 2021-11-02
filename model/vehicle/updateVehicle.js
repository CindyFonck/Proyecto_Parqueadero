const pool = require('../database/database');
const sqlQueries = require('../../model/sqlQueries/sqlVehicleQueries');

const updateVehicle = async (vehicle, id) => {
    try {
        const result = await pool.query(sqlQueries.UPDATE_VEHICLE, [vehicle, id]);
        return result;
    } catch (error) {
        throw error;
    }
};
module.exports = updateVehicle;