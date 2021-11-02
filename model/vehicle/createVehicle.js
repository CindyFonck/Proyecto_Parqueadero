const pool = require('../database/database');
const sqlQueries = require('../../model/sqlQueries/sqlVehicleQueries');

const createVehicle = async (vehicle) => {
    try {
        const result = await pool.query(sqlQueries.CREATE_VEHICLE, vehicle);
        return result;
    } catch (error) {
        throw error;
    }
};
module.exports = createVehicle;