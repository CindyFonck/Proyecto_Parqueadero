const pool = require('../database/database');
const sqlQueries = require('../../model/sqlQueries/sqlPersonQueries');

const getPersons = async () => {
    try {
        const result = await pool.query(sqlQueries.GET_PERSONS);
        return result;
    } catch (error) {
        throw error;
    }
};
module.exports = getPersons;