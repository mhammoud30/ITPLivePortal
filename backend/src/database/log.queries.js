const createNewLog = `
INSERT INTO logs VALUES(null, ?, ?, ?, CURRENT_TIMESTAMP)
`;

const createNewPackage = `
INSERT INTO package VALUES(null, ?, ?, ?, ?)
`

const createNewLogPackage = `
INSERT INTO log_packages VALUES(null, ?, ?)
`

const getAllLogs =`
SELECT  DATE_FORMAT(DATE(logs.datecreated), '%d-%m-%Y') AS Date, users.name AS Contact, influencer.Name AS Influencer,logs.campaign AS Campaign, package.platform AS Platform, package.deliverable AS Deliverable, package.currency as Currency, package.rate AS Rate 
FROM logs
INNER JOIN users ON logs.userID = users.id
INNER JOIN influencer ON logs.influencerID = influencer.ID
INNER JOIN log_packages ON logs.id = log_packages.logID
INNER JOIN package ON log_packages.packageID = package.id
`

const getInfluencerLogs = `
SELECT  DATE_FORMAT(DATE(logs.datecreated), '%d-%m-%Y') AS Date, users.name AS Contact, influencer.Name AS Influencer,logs.campaign AS Campaign, package.platform AS Platform, package.deliverable AS Deliverable, package.currency as Currency, package.rate AS Rate 
FROM logs
INNER JOIN users ON logs.userID = users.id
INNER JOIN influencer ON logs.influencerID = influencer.ID
INNER JOIN log_packages ON logs.id = log_packages.logID
INNER JOIN package ON log_packages.packageID = package.id
Where influencer.ID = ?
`
module.exports = {
    createNewLog,
    createNewPackage,
    createNewLogPackage,
    getAllLogs,
    getInfluencerLogs
}