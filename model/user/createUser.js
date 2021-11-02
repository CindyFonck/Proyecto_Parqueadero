const pool = require('../database/database');
const sqlQueries = require('../../model/sqlQueries/sqlUserQueries');

const createUser = async (user) => {
    try {
        const result = await pool.query(sqlQueries.CREATE_USER, user);
        return result;
    } catch (error) {
        throw error;
    }
};
module.exports = createUser;