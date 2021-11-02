const pool = require('../database/database');
const sqlQueries = require('../../model/sqlQueries/sqlPersonQueries');

const updatePerson = async (person, id) => {
    try {
        const result = await pool.query(sqlQueries.UPDATE_PERSON, [person, id]);
        return result;
    } catch (error) {
        throw error;
    }
};
module.exports = updatePerson;