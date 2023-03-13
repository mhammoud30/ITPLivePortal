const assignTask = ` 
INSERT INTO task VALUES(null, ?, ?, ?, CURRENT_TIMESTAMP, 'Not Viewed', ?)
`

const getUnfinishedTasks = `
SELECT COUNT(*) AS num_rows
FROM task
WHERE status = 'Not Viewed' and assigned_to = ?
`
const updateStatus = `
UPDATE task
Set status = 'In Progress'
Where assigned_to = ? and status = 'Not Viewed' and id = ?

`
module.exports = {
    assignTask,
    getUnfinishedTasks,
    updateStatus,
}