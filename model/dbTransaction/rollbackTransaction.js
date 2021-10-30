const pool = require('../database/database');
const sqlQueries = require('../sqlQueries/sqlDbTransactionQueries');

const rollbackTransaction = async () => {
    try {
        const result = await pool.query(sqlQueries.ROLLBACK_TRANSACTION);
        return result;
    } catch (error) {
        throw error;
    }
};
module.exports = rollbackTransaction;
