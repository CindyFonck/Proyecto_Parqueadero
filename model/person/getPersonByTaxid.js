const pool = require('../database/database');
const sqlQueries = require('../../model/sqlQueries/sqlPersonQueries');

const getPersonByTaxid = async (taxid) => {
    try {
        const result = await pool.query(sqlQueries.GET_PERSON_BY_TAXID, taxid);
        return result;
    } catch (error) {
        throw error;
    }
};
module.exports = getPersonByTaxid;