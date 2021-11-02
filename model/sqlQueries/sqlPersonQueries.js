const sqlQueries = {
    GET_PERSONS:
        'SELECT * FROM person ',

    CREATE_PERSON:
        'INSERT INTO person SET ?',

    UPDATE_PERSON:
        'UPDATE person SET ? WHERE Id_Person = ?',

    COUNT_PERSON:
        'SELECT COUNT(*) as value FROM person WHERE Employee = 0',

    GET_PERSON_BY_TAXID:
        'SELECT * FROM person WHERE Employee = 0 and Taxid = ?',

    GET_PERSON_BY_ID:
        'SELECT * FROM person WHERE Employee = 1 AND Id_Person = ?',
};
module.exports = sqlQueries;