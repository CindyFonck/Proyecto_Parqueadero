const sqlQueries = {
    GET_USERS:
        'SELECT * FROM user',

    CREATE_USER:
        'INSERT INTO user SET ?',

    GET_USER_BY_ID:
        'SELECT * FROM user WHERE Id_User = ?',

    GET_USER_BY_USERNAME:
        'SELECT * FROM user WHERE E_Mail = ? and Password = ?',
};
module.exports = sqlQueries;