const sqlQueries = {
    GET_PERSONS:
        'SELECT * FROM person ',

    CREATE_PERSON:
        'INSERT INTO person SET ?',

    COUNT_PERSON:
        'SELECT COUNT(*) as value FROM person WHERE Employee = 0',

    GET_PERSON_BY_TAXID:
        'SELECT * FROM person WHERE WHERE Employee = 0 and Taxid = ?',
};
module.exports = sqlQueries;