const sqlQueries = {

    GET_VEHICLES:
        'SELECT * FROM vehicle',

    GET_COUNT_VEHICLE:
        'SELECT COUNT(*) as value FROM vehicle',

    CREATE_VEHICLE:
        'INSERT INTO vehicle SET ?',

    UPDATE_VEHICLE:
        'UPDATE vehicle SET ? WHERE Id_Vehicle = ?',

    GET_VEHICLE_BY_PLATE:
        'SELECT * FROM vehicle WHERE License_plate = ?',
};
module.exports = sqlQueries;