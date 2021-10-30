const pool = require('../database/database');
const sqlQueries = require('../sqlQueries/sqlDbTransactionQueries');

const beginTransacion = async () => {
    try {
        const result = await pool.query(sqlQueries.BEGIN_TRANSACTION);
        return result;
    } catch (error) {
        throw error;
    }
};
module.exports = beginTransacion;
