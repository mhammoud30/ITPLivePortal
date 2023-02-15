const createNewUser = `
INSERT INTO users VALUES(null, ?, ?, ?, ?, ?,?)
`;

const findUserByEmail = `
SELECT * FROM users WHERE email = ?
`;

const findUserByID = `
SELECT * FROM users WHERE id = ?
`;


const createNewInfluencer = `
INSERT INTO influencer Values(null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?, 'Active')
`;

const getAllInfluecers = ` Select * FROM influencer Where Status = 'Active'`

module.exports = {
    createNewUser,
    findUserByEmail,
    findUserByID,
    createNewInfluencer,
    getAllInfluecers,
};

