const pool = require('../database/database');
const sqlQueries = require('../../model/sqlQueries/sqlUserQueries');

const getUsers = async () => {
    try {
        const result = await pool.query(sqlQueries.GET_USERS);
        return result;
    } catch (error) {
        throw error;
    }
};
module.exports = getUsers;