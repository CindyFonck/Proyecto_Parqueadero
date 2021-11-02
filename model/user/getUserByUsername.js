const pool = require('../database/database');
const sqlQueries = require('../../model/sqlQueries/sqlUserQueries');

const getUserByUsername = async (username, pass) => {
    try {
        const result = await pool.query(sqlQueries.GET_USER_BY_USERNAME, [username, pass]);
        return result;
    } catch (error) {
        throw error;
    }
};
module.exports = getUserByUsername;