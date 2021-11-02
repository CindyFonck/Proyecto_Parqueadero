const pool = require('../database/database');
const sqlQueries = require('../../model/sqlQueries/sqlVehicleQueries');

const getVehicleByPlate = async (plate) => {
    try {
        const result = await pool.query(sqlQueries.GET_VEHICLE_BY_PLATE, plate);
        return result;
    } catch (error) {
        throw error;
    }
};
module.exports = getVehicleByPlate;