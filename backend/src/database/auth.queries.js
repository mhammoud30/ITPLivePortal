const createNewUserQuery = `
INSERT INTO users VALUES(null, ?, ?, ?, ?, ?,?,?, ?)
`;

const findUserByEmailQuery = `
SELECT * FROM users WHERE email = ?
`;

const findUserByIDQuery = `
SELECT * FROM users WHERE id = ?
`;

const getTalentUserNamesQuery = `
SELECT id, name FROM users Where role = 'talent'
`;

module.exports = { 
    createNewUserQuery,
    findUserByEmailQuery,
    findUserByIDQuery,
    getTalentUserNamesQuery,


}