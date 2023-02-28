const assignTask = ` 
INSERT INTO task VALUES(null, ?, ?, ?, CURRENT_TIMESTAMP, 'Not Finished')
`

const getUnfinishedTasks = `
SELECT COUNT(*) AS num_rows
FROM task
WHERE status = 'Not Finished' and assigned_to = ?
`
const updateStatus = `
UPDATE task
Set status = 'In Progress'
Where assigned_to = ? and status = 'Not Finished'

`
module.exports = {
    assignTask,
    getUnfinishedTasks,
    updateStatus,
}