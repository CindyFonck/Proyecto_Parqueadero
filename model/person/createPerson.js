const pool = require('../database/database');
const sqlQueries = require('../../model/sqlQueries/sqlPersonQueries');

const createPerson = async (person) => {
    try {
        const result = await pool.query(sqlQueries.CREATE_PERSON, person);
        return result;
    } catch (error) {
        throw error;
    }
};
module.exports = createPerson;