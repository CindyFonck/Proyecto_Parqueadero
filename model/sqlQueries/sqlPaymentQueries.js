const sqlQueries = {
    GET_PAYMENT:
        'SELECT * FROM payment ',

    CREATE_PAYMENT:
        'INSERT INTO payment SET ?',

    UPDATE_PAYMENT:
        'UPDATE payment SET ? WHERE Id_Pay = ?',

    GET_BAY:
        'SELECT * FROM bay',

    GET_PARKING_BY_BAY:
        'SELECT * FROM parking WHERE State=0 AND Id_Bay = ?',

    UPDATE_PARKING:
        'UPDATE parking SET ? WHERE Id_Parking = ?',
};
module.exports = sqlQueries;