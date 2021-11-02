const pool = require('../database/database');
const sqlQueries = require('../../model/sqlQueries/sqlPersonQueries');

const getPersonByTaxid = async (id) => {
    try {
        const result = await pool.query(sqlQueries.GET_PERSON_BY_ID, id);
        return result;
    } catch (error) {
        throw error;
    }
};
module.exports = getPersonByTaxid;