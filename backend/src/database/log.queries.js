const createNewLog = `
INSERT INTO logs VALUES(null, ?, ?, ?, CURRENT_TIMESTAMP)
`;

const createNewPackage = `
INSERT INTO package VALUES(null, ?, ?, ?, ?)
`

const createNewLogPackage = `
INSERT INTO log_packages VALUES(null, ?, ?)
`

module.exports = {
    createNewLog,
    createNewPackage,
    createNewLogPackage
}