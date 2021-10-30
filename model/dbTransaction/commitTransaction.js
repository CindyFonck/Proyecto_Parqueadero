const pool = require('../database/database');
const sqlQueries = require('../sqlQueries/sqlDbTransactionQueries');

const commitTransaction = async () => {
    try {
        const result = await pool.query(sqlQueries.COMMIT_TRANSACTION);
        return result;
    } catch (error) {
        throw error;
    }
};
module.exports = commitTransaction;
