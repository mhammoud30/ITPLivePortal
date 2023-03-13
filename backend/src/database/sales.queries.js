const createNewSalesBrief = `
INSERT INTO salesBrief VALUES(null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP )
`;

const briefsNotViewedByTalent = `
SELECT COUNT(*) AS num_rows
FROM SalesBrief
WHERE ViewedByTalent = 0`;


const getAllBriefs =` 
SELECT * FROM salesBrief
Order by ViewedByTalent ASC, id DESC
`;


const viewedByTalent = `
UPDATE salesbrief 
SET ViewedByTalent = 1
WHERE id = ?;

`

const getBrief = `
SELECT * FROM salesbrief
WHERE id = ?
`

const assignTask = ` 
INSERT INTO task VALUES(null, ?, ?, ?, CURRENT_TIMESTAMP, 'Not Finished')
`

const getMyTasks = `
SELECT *
FROM salesbrief
INNER JOIN task
ON salesbrief.id = task.brief_id
WHERE task.assigned_to = ?;
`
const getSalesBriefIdbyTaskId = `
SELECT brief_id
FROM task
WHERE id = ?
`

module.exports = {
    createNewSalesBrief,
    briefsNotViewedByTalent,
    getAllBriefs,
    viewedByTalent,
    getBrief,
    assignTask,
    getMyTasks,
    getSalesBriefIdbyTaskId
    
}