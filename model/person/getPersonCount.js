const pool = require('../database/database');
const sqlQueries = require('../../model/sqlQueries/sqlPersonQueries');

const getPersonCount = async () => {
    try {
        const result = await pool.query(sqlQueries.COUNT_PERSON);
        return result;
    } catch (error) {
        throw error;
    }
};
module.exports = getPersonCount;